# SMILE - simple markup language
SMILE is similar to YAML, but much more simple to learn and use.

## Install

npm
```
npm i smilelang
```

html
```html
<script src="https://unpkg.com/smilelang@1.1.3/bundle.js"></script>

<script>
var SMILE = require('smilelang')
</script>

```


## SMILE data types
### string
```
'some string'
```  
A `string` is any collection of characters. It must have a single quote at the beginning to open the string and a single quote at the end to close it.

### number
examples
```
123
245.7
0.5
```

### boolean
```
true
false
```
A `boolean` is a special type which must be one of two possible values, either `true` or `false`. 

### no set value

```
null
```

The value `null` is used to specify that there is no set value.   
Unlike languages such as JSON (no value of `enumerable` type - `[]`, no value of `object` type - `{}`), Smile does not have different types of no set value. In Smile all of these are just no set value: `null`

### object
```
name: 'Steve'
age: 30
homeless: false
children: null
address:
  country: 'USA'
  city: 'New York' 
```

An `object` is a set of `keys` and `values`. the pattern is `key: value`.  
`key` is any characters, including whitespaces, except `:`. For example `name` or `age`  
`value` is any value of the types above (`string`, `number`, `boolean`, `null`) or `object` or `list` types (`list` is discussed below).

nested object
```
address:
  country: 'USA'
  city: 'New York' 
```
to show that the `address` key has value of an `object`, leave `address:` on the first line and write next object `key:value` pair in the next line. Put *2 whitespaces* before the key so that compiler will know that the next object belongs to the `address` key. Depth is not limited, you can create nested objects inside nested objects.
```
address:
  country: 'USA'
  contact:
    email: true
    phone: false
  city: 'New York' 
```

### list

```
- 'Smith'
- 'Doe'
- 'Jones'
- 123
- true
- null
-
  name: 'Tony'
  surname: 'Stark'
```

`list` is similar to an `object`, but instead of `key:` you have `-` sign. It is usefull in cases where you don't need key for each item and want to get the item by it's index, for example item number 2.  
`List` can have the same `value`s as `object` (`string`, `number`, `boolean`, `null`, `object`, `list`)

make list a value to object key
```
members:
  - 'Tony Stark'
  - 'Spiderman'
  - 
    squadName: 'best'
    members:
      - 'me'
      - 'you'
```

# That is all
I hope you find it very simple and easy to use.

Especially when compared with YAML!

## SMILE example

```
squadName: 'Super hero squad'
homeTown: 'Metro City'
formed: 2016
secretBase: 'Super towel'
active: true
leader: null
members:
  -
    name: 'Molecule Man'
    age: 29
    secretIdentity: 'Dan Jukes'
    powers:
      - 'Radiation resistance'
      - 'Turning tiny'
      - 'Radiation blast'
  -
    name: 'Madame Uppercut'
    age: 39
    secretIdentity: 'Jane Wilson'
    powers:
      - 'Million tonne punch'
      - 'Damage resistance'
      - 'Superhuman reflexes'
  -
    name: 'Eternal Flame'
    age: 1000000
    secretIdentity: 'Unknown'
    powers:
      - 'Immortality'
      - 'Heat Immunity'
      - 'Inferno'
      - 'Teleportation'
      - 'Interdimensional travel'
```

# Live demo
[Demo](demo.html) 

# Library usage

npm or html

```javascript
var SMILE = require('smilelang')

// stringify
var demoObject = {
  name: "Tony",
  surname: "Stark"
}

SMILE.stringify(demoObject)
/*
OUTPUT:

name: 'Tony'
surname: 'Stark'

*/

// parse
var str =`
name: 'Tony'
surname: 'Stark'
`
SMILE.parse(str)

/*
OUTPUT:

{
  name: "Tony",
  surname: "Stark"
}

*/
```
