export interface IMediator {
  send(message: string, from: Colleague): void;
  sendPrivate(message: string, from: Colleague, to: Colleague): void;
}

export abstract class Colleague {
  constructor(protected mediator: IMediator, public name: string) { }

  send(message: string, to?: Colleague) {
    if (to) this.mediator.sendPrivate(message, this, to)
    else this.mediator.send(message, this);
  }
  abstract receive(message: string, from: Colleague): void;
  abstract receiveError(error: string): void;
}

export class ChatRoomMediator implements IMediator {
  private colleagues: Set<Colleague> = new Set();

  register(col: Colleague) {
    this.colleagues.add(col);
  }

  send(message: string, from: Colleague): void {
    for (const c of this.colleagues) {
      if (c !== from) c.receive(message, from);
    }
  }

  sendPrivate(message: string, from: Colleague, to: Colleague): void {
    if (this.colleagues.has(to)) to.receive(message, from)
    else from.receiveError("Usuário inexistente")
  }
}

export class User extends Colleague {
  receive(message: string, from: Colleague): void {
    console.log(`[${from.name}] -> [${this.name}]: ${message}`);
  }

  receiveError(error: string): void {
    console.log(`[SYSTEM] -> [${this.name}]: ${error}`);
  }
}

const mediator = new ChatRoomMediator();

const alice = new User(mediator, 'Alice');
mediator.register(alice);

const bob = new User(mediator, 'Bob');
mediator.register(bob);

const charlie = new User(mediator, 'Charlie');
mediator.register(charlie);

const fake = new User(mediator, 'Fake');

alice.send('Ola a todos!');
bob.send('Ola ola!');
fake.send('Oi Oi')

alice.send('Acho que tem um Fake entre nós!!', bob);
alice.send('Testando Testando...', fake);
//TODO Adicionar uma forma de enviar mensagem para uma pessoa específica