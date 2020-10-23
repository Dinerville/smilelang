# SMILE - simple markup language
SMILE is like YAML, but simpler

## Install

npm
```
npm i smilelang
```

html
```html
<script src="https://unpkg.com/smilelang@1.0.6/bundle.js"></script>

<script>
var SMILE = require('smilelang')
</script>

```


## SMILE data types
### string
```
'some string'
```  
string is any characters, covered with single quotes

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
boolean is a special type which has only 2 values: true or false. 

### no value

```
null
```

`null` is used to specify that there is no value.   
We don't have different types of no values, like in JSON (no value of enumerable type - [], no value of object type - {}, just no value - null). In SMILE it all is `null` 

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

object is a set of keys and values. the pattern is `key: value`.  
key is any characters, including whitespaces, except `:`. For example `city` or `address line 1`  
value is any value of the types above (string, number, boolean, null) or object or list(will be discussed soon) types

nested object
```
address:
  country: 'USA'
  city: 'New York' 
```
to show that `address` key has value of object, leave `address:` on the first line and write next object `key:value` pair in the next line. Put *2 whitespaces* before the key so that compiler will know that next object belongs to `address` key. Depth is not limited, you can create nested objects inside nested objects.
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

list is almost the same as object, but instead of `key:` you have `-` sign. It is usefull in the cases when you don't need key for each item and want to get the item by it's index, for example item number 2.  
List can have the same `value`s as object (string, number, boolean, null, object, list)

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
I hope you found it really simple  
Especially compared to YAML

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