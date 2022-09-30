## Built in data structures in JavaScript
- Array
- Object
- Set
- Map

## Array
- An array is a data structure that can hold a collection of values.
- Array can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array.
- Arrays are resizable, You don't have to declare the size of an array before creating it.
- JavaScript arrays are zero-indexed and the insertion order is maintained.
- Arrays are iterables, They can be used with a for of loop.

### Array Big-0 time complexity
- insert/remove from end - 0(1)
- insert/remove from beginning - 0(n)
- access - 0(1)
- search - 0(n)
- push/pop - 0(1)
- access - 0(1)
- shift/unshift/concat/slice/splice - 0(n)
- forEach/map/filter/reduce - 0(n)


## Object
- An object is an unordered collection of key-value pairs. The key must either be a string or symbol data type where as the value can be of any data type.
- To retrieve a value, you can use the corresponding key. This can be achieved using the dot notation or bracket natation.
- An object is not an iterable. You cannot use it with a for of loop.

### Object Big-0 time complexity
- insert-0(1)
- remove-0(1)
- access-0(1)
- search-0(n)
- object.keys()-0(n)
- object.values()-0(n)
- object.entries()-0(n)


## Set
- A JavaScript Set is a collection of unique values.
- Each value can only occur once in a Set.
- A Set can hold any value of any data type.
- Set are iterables, They can be used with a for of loop.

### Set vs Array
- Arrays can contain duplicate values whereas set cannot.
- Insertion order is maintained in arrays but it is not the case with sets.
- Searching and deleting an element in the set is faster compared to arrays.

### Set Big-0 time complexity
- insert-0(1)
- remove-0(1)
- access-0(1)
- search-0(n)
- object.keys()-0(n)
- object.values()-0(n)
- object.entries()-0(n)

