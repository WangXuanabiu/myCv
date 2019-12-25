var Book = {};
var name = "";
Object.defineProperty(Book, 'name', {
    set: function(val){
        name = val;
        console.log("you set name " + val);
    },
    get: function(){
        return "《"+ name +"》";
    }
})

Book.name = "权威指南";
console.log(Book.name);