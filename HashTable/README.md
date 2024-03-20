## Hash Table
- A hash table, also known as hash map, is a data structure that is used to store key-value pairs.
- Given a key, you can associate a value with that key for very fast lookup.
- JavaScript's Object os a special implementation of the hash table data structure. However, object class adds its own keys. Keys that you input may conflict and overwrite the inherited default properties
- Maps which were introduced in 2015 allow you to store key-value pairs.
    
### Hash Table contd
- Hash tables store key value pairs
    - 'bn' = 'Bangladesh'
    - 'in' = 'India'
    - 'it' = 'Italy'
- We store the key value pairs in a fix sized array.
- Array have a numeric index.
- How do we go from using a string as an index to number as an index?
- A hashing function accepts the string key, converts it into a hash code using a defined logic and then maps it into a numeric index that is within the bounds of the array.
- Using the index, store the value.
- The same hashing function is reused to retrieve the value given a key:
    - Set to store a key-value pair
    - Get to retrieve a value given it's key
    - Remove to delete a key value pair

### Hash Table Visualization
![](https://miro.medium.com/max/1400/1*xOmBfzMxLLldy1ll4w7esg.png)

### Hash Table Usage
- Hash tables are typically implemented where constant time lookup and insertion are required.
- Database indexing
- Cashes

### Hash Table Implementation
- Set to store a key-value pair
- Get to retrieve a value given it's key
- Remove to delete a key value pair
- Hashing function to convert a string key to a numeric index
