//basic array method
const arr = [2, 3, 4, 'Sayef'];

arr.unshift(1); //first element
arr.push(5); //last element
console.log(arr);

arr.pop(); //delete last element
arr.shift(); //delete first element

//print in for-of loop
for(let item of arr){
    console.log(item);
}

