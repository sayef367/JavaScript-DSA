const map = new Map([ ['a',1], ['b', 2] ]);
map.set('c', 3); //add data

for(let [key, value] of map){
    console.log(`${key}: ${value}`);
}

console.log("Has: " + map.has('a')); //data is there or not
console.log("Delete: " + map.delete('b')); //data is delete
console.log("Size of: " + map.size); //size of map
map.clear(); //delete all
console.log(map);
