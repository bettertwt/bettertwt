class BetterTwT {
  constructor() {
    this.__events__ = new Map();
  }

  emit(eventName, ...props) {
    const list = this.__events__.get(eventName) || [];
    for (const callback of list) {
      callback(...props);
    }
  }

  on(eventName, callback) {
    const list = this.__events__.get(eventName) || [];
    list.push(callback);
    this.__events__.set(eventName, list);
  }
}

const bettertwt = new BetterTwT();
