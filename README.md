# @devprasant/learns

Get docs, word meanings, Harry Potter characters in one place

### you can (till now)
- get info and docs about your query from mdn
- get info about a word (including definition)
- get info about Harry Potter characters 
---
## Installation
```
npm i @devprasant/learns
```
## quick start

Import the package
```js
import learns from "@devprasant/learns"
```
optionally, you can destructure it
```js
let { findFrom, getMdn, wordInfo, hpChar, findList } = learns
```
---
## `getMdn()` ,  `wordInfo()` , `hpChar()`

These functions take 2 arguments:
-  `query` (required) : the word / query you want to search for

- `callback` (required) : the callback function called when the search results are returned
   - the callback function takes 2 parameters: 
     - `data` (required) : the data returned for your query

     - `error` (optional) : the error (if error occurred)

### Syntax

```js
learns.getMdn(query, callback)

learns.wordInfo(query, callback)

learns.hpChar(query, callback)
```
### Note
>  **NOTE**: \
  If  you have  destructured  the imported object as stated in [quick start](#quick-start), you can call the function directly like `getMdn(query, callback)` instead of  `learns.getMdn(query, callback)`. Same for other functions.

## Example

```js
learns.getMdn('api', (data, error) => {
    if(error) return console.log(`Error occurred: ${error}`);
    console.log(data);
})

learns.wordInfo('apple', (data, error) => {
    if(error) return console.log(`Error occurred: ${error}`);
    console.log(data);
})

learns.hpChar('Harry potter', (data, error) => {
    if(error) return console.log(`Error occurred: ${error}`);
    console.log(data);
})
```

- `getMdn` : returns data from mdn according to your query

- `wordInfo` : returns information about the word (your query)

- `getMdn` : returns data from mdn according to your query
---

## `findFrom()`

This function takes 3 arguments:
- `destination` (required) : the destination (from where or what to search)

-  `query` (required) : the word / query you want to search for

- `callback` (required) : the callback function called when the search results are returned
   - the callback function takes 2 parameters: 
     - `data` (required) : the data returned for your query

     - `error` (optional) : the error (if error occurred)

### Syntax

```js
learns.findFrom(destination, query, callback)
```

> See [NOTE](#note)

## Example

```js
learns.findFrom('mdn', 'array', (data, error) => {
    if(error) return console.log(`Error occurred: ${error}`);
    console.log(data);
})

learns.findFrom('word', 'mango', (data, error) => {
    if(error) return console.log(`Error occurred: ${error}`);
    console.log(data);
})

learns.findFrom('hpChar', 'hermione', (data, error) => {
    if(error) return console.log(`Error occurred: ${error}`);
    console.log(data);
})
```

### To get all possible `destinations` call the function `findList()`

Like
```js
console.log(learns.findList())
```
---