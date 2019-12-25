function observe(data) {
    if(!data || typeof data !== "object"){
        return 
    }
    Object.keys(data).forEach(function(key) {
        defineReactive(data, key, data[key]);
    });
}

function defineReactive(data, key, value){
    observe(value);
    var dep = new Dep();
    Object.defineProperty(data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
            if(Dep.target) {
                dep.addSub(Dep.target)
            }
            return value
        },
        set: function(newVal){
            if(value === newVal) {
                return 
            }
            value = newVal;
            console.log("属性"+ key +"已经被监听，现在值为"+ newVal);
            dep.notify(); //数据变化通知订阅者,会通知所有订阅者
        }
    })
}

//用一个消息订阅器来专门收集订阅者
function Dep() {
    this.subs = [];
}
Dep.prototype = {
    addSub: function(sub) {
        this.subs.push(sub)
    },
    notify: function() {
        this.subs.forEach(function(sub) {
            sub.update();
        })
    }
}
//https://segmentfault.com/a/1190000015846104


var library = {
    book1: {
        name: ""
    },
    book2: ""
};
observe(library);
library.book1.name = "权威指南";
library.book2 = "没有此书籍";

