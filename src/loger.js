let logerStore = null;
export const logerInit = store => {
  logerStore = store;
};

const loger = () => {
  console.log('loger', logerStore.getState());
};

export default loger;

const Singleton = (() => {
    let instance;
    const createInstance = () => loger;
    return {
        getInstance: () => {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        },
    };
})();

function LogerPrototype(proto) {
    this.clone = function () {
        var loger = new LogerInstance();
        loger.store = proto.store;
        return loger;
    };
}

function LogerInstance(store) {
    this.store = store;
}

var proto = new LogerInstance(null);
var prototype = new LogerPrototype(proto);
var clone = prototype.clone();
