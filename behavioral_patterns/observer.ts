export interface IObserver {
  name: string;
  showPublisherUpdates: boolean;
  update(data: any): void;
}

export interface ISubject {
  subscribe(obs: IObserver): void;
  unsubscribe(obs: IObserver): void;
  notify(data: any): void;
  notifyUpdate(data: any): void;
}

export class Publisher implements ISubject {
  private observers: Set<IObserver> = new Set();

  subscribe(obs: IObserver) {
    this.notifyUpdate(`Observer ${obs.name} adicionado.`);
    this.observers.add(obs);
  }

  unsubscribe(obs: IObserver) {
    this.observers.delete(obs);
    this.notifyUpdate(`Observer ${obs.name} removido.`);
  }

  notify(data: any) {
    for (const o of this.observers)
      o.update(data);
  }

  notifyUpdate(update: any) {
    for (const o of this.observers) {
      if (o.showPublisherUpdates)
        o.update(update);
    }
  }

  publish(data: any) {
    console.log('Publishing:', data);
    this.notify(data);
  }
}

export class Subscriber implements IObserver {
  constructor(public name: string, public showPublisherUpdates: boolean) { }

  update(data: any): void {
    console.log(`${this.name} got update:`, data);
  }
}

const pub = new Publisher();

const s1 = new Subscriber('S1', true);
pub.subscribe(s1);

const s2 = new Subscriber('S2', false);
pub.subscribe(s2);

pub.publish({ msg: 'Hello Observers' });
pub.unsubscribe(s2);
pub.publish({ msg: 'Second message' });

//TODO Permitir observar toda vez que um novo observer for adicionado ou removido pelo publisher
