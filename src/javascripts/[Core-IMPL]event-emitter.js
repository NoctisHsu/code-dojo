// https://www.freecodecamp.org/news/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1/
// https://gist.github.com/mudge/5830382

class EventEmitter {
    listeners = {}
    
    on(eventName, fn) {
      this.listeners[eventName] = this.listeners[eventName] || [];
      this.listeners[eventName].push(fn);
      return this;
    }
  
    // once(eventName, fn) {
    //   this.listeners[eventName] = this.listeners[eventName] || [];
    //   const onceWrapper = () => {
    //     fn();
    //     this.off(eventName, onceWrapper);
    //   }
    //   this.listeners[eventName].push(onceWrapper);
    //   return this;
    // }
  
    off (eventName, fn) {
      let lis = this.listeners[eventName];
      if (!lis) return this;
      for(let i = lis.length; i > 0; i--) {
        if (lis[i] === fn) {
          lis.splice(i,1);
          break;
        }
      }
      return this;
    }
  
    emit(eventName, ...args) {
      let fns = this.listeners[eventName];
      if (!fns) return false;
      fns.forEach((f) => {
        f(...args);
      });
      return true;
    }
  
    // listenerCount(eventName) {
    //   let fns = this.listeners[eventName] || [];
    //   return fns.length;
    // }
  
    // rawListeners(eventName) {
    //   return this.listeners[eventName];
    // }
  }

const eventEmitter = new EventEmitter();
eventEmitter.on('test-event', () => { console.log ("test one") });
eventEmitter.emit('test-event')