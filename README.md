# Grammar List

Function to display a list in a more grammatical fashion

## Installation

```
npm install grammarlist --save
```

## Usage

```js
const grammarList = require('grammarlist')

let people = ['John', 'Anna', 'Casey', 'Beata']
let result = grammarList(people, 'then')
console.log(result)

// Expected output: Anna, Beata, Casey, then John
```

## Signature

```js
grammarList(list:Array, clause:String='and', sort:Boolean=true) {
  return :String
}
```

## Development

Clone this repo, then run:

```
npm install
npm test
```
