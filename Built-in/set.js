const set = new Set([1,2,3]);

set.add(4); //add item
set.add(3); //dublicate is not add
console.log(set);

console.log(set.has(4)); //value is there or not
set.delete(2); //delete item
console.log("size of: ", set.size); //how many item is there

for(let item of set){
    console.log(item);
}

set.clear(); //all data is clear
console.log(set);