// Command pattern - TypeScript implementation
export interface Command {
  execute(): void;
  undo(): void;
  name: string;
}

export class TextList {
  private items: string[] = [];
  add(text: string) { this.items.push(text); }
  removeLast() { return this.items.pop(); }
  setList(items: string[]) { this.items = items }
  list() { return [...this.items]; }
}

export class AddTextCommand implements Command {
  name = 'AddText';
  private removed?: string;
  constructor(private receiver: TextList, private text: string) { }
  execute(): void { this.receiver.add(this.text); }
  undo(): void { this.removed = this.receiver.removeLast(); }
}

export class CleanListCommand implements Command {
  name = 'CleanList';
  private removed?: string[];
  constructor(private receiver: TextList) { }
  execute(): void { this.removed = this.receiver.list(); this.receiver.setList([]); }
  undo(): void { this.receiver.setList(this.removed ?? []) }
}

export class AddTextListCommand implements Command {
  name = 'AddTextList';
  private removed?: string[];
  private listLength?: number
  constructor(private receiver: TextList, private list: string[]) { }
  execute(): void {
    this.listLength = this.list.length;
    this.receiver.setList([...this.receiver.list(), ...this.list]);
  }
  undo(): void {
    this.removed = this.receiver.list().slice(-(this.listLength ?? 0));
    this.receiver.setList(this.receiver.list().slice(0, -(this.listLength ?? 0)))
  }
}

export class CommandManager {
  private undoStack: Command[] = [];
  private redoStack: Command[] = [];
  execute(cmd: Command) {
    cmd.execute();
    this.undoStack.push(cmd);
    this.redoStack = [];
  }
  undo() {
    const c = this.undoStack.pop();
    if (c) {
      c.undo();
      this.redoStack.push(c);
    }
  }
  redo() {
    const c = this.redoStack.pop();
    if (c) {
      c.execute();
      this.undoStack.push(c);
    }
  }
}

const list = new TextList();
const mgr = new CommandManager();
const c1 = new AddTextCommand(list, 'Hello');
const c2 = new AddTextCommand(list, "World");
const c3 = new CleanListCommand(list);
const c4 = new AddTextListCommand(list, ["eita", "loucura", "total"])
mgr.execute(c1);
mgr.execute(c2);
console.log(list.list());
mgr.undo();
console.log(list.list());
mgr.redo();
console.log(list.list());

mgr.execute(c3);
console.log(list.list());
mgr.undo();
console.log(list.list());

mgr.execute(c4);
console.log(list.list());
mgr.undo();
console.log(list.list());
mgr.redo();
console.log(list.list());


//TODO Adicionar um comando para limpar a lista
//TODO Adicionar um comando para adicionar X itens de uma vez