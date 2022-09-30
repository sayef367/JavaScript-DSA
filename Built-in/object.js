const obj ={
    name: 'Sayef Islam',
    age: 26,
    'key': true,
    myName: function(){
        console.log(this.name);
    }
};
obj.hobby = 'football'; //add key value pairs to the object
console.log(obj); //print all
delete obj.hobby;//delete 
console.log(obj.name);
console.log(obj['age']);
console.log(obj['key']);
obj.myName();

