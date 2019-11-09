# Values, Types and Operators

In JavaScript you have six types of data.

```
numbers
strings
Booleans
objects
functions
undefined values
```

## Numbers 

Numbers are what you think they are, numerical values. You have whole numbers and fractional numbers.

```JavaScript
const myNum = 100
```

JavaScript uses 64 bits to hold a single number. Always treat fractional numbers as approximations. 
This due to the limit of patterns JavaScript can make within the 64 bits.

# Strings

Strings are text written within quotes. You can use single or double quotes, pick one an stick to it.

```JavaScript
const myString = "Hello this is a string"
```

You can put any string inside of the quotes. You can use the backslash to ESCAPE special characters 
```JavaScript
const myString = "Hello this is a \"strings\" are amazing"
```

You cannot do arithmetic with strings but you can concatenate strings

```JavaScript
const myString = "Hello this is a \"strings\" are amazing" + " I " + "Love JavaScript" 
```

# Unary operators

The unary operator when used produces a string value naming the type of value you gave it.
The unary operator only takes one value, an operator that takes two is called a binary operator.

´´´
typeof
!
´´´

```JavaScript
const myString = "I am a string";
console.log(typeof  myString);
// logs string
```

```JavaScript
const myNumber = 1000;
console.log(typeof  myNumber);
// logs number
```

```JavaScript
const add = function(a, b) {
    return a + b;
};
console.log(typeof add); 
// logs function
```

# Boolean

The Boolean type allows you check the difference between two values on or off, 1 or 0, true, or false
```JavaScript
const myNumber = 1000;
const mySecondNumber = 1001;

console.log(myNumber === mySecondNumber);
// logs false
```

# Comparisons

If you want to check if something is truthy or falsy. 
To produce a boolean value you must compare something with something else using a comparison operator.

```JavaScript
const myNumber = 1000;
const mySecondNumber = 1001;

console.log(myNumber === mySecondNumber);
// logs false

console.log(myNumber !== mySecondNumber);
// logs true

console.log(myNumber > mySecondNumber);
// logs false

console.log(myNumber < mySecondNumber);
// logs true
```

## Symbols

```
> greater than 
< less than
== loose equality
=== strict equality
! not
!== not equal to
>= greater than or equal to
<= less than or equal to
NaN is the result of a nonsensical computation
```

# Logical operators

JavaScript supports 3 logical operators, and, or and not. These operators can be used to reason about your booleans... 
if something is true do this or that.

```
&& and
|| or
! not
```

The && operator returns true only if both values given are true. This is binary operator.
```JavaScript
const age = 35;
const ageLimit = 15;

if (age > ageLimit && age !== ageLimit ) {       
    console.log("Congratulations you may open a bank account")
    return true
} else {
  console.log("You are too young open a bank account.")
  return false 
}
```

The || operator produces true if either values given to it are true

```JavaScript
const age = 35;
const ageLimit = 15;

if (age < ageLimit || age <= ageLimit ) {       
    console.log("You are too young open a bank account.")
    return false
} else {
  console.log("Congratulations you may open a bank account")
  return true 
}
```

The Not operator is written with an exclamation mark ! This operator can flip the value given to it.

```
! not (unary operator)
!true produces false
!false produces true
```

# Ternary operator
This operator operates on three values, using the quotation mark

```JavaScript
const age = 35;
const ageLimit = 15;

const isLegalAgeLimit = age > ageLimit ? true : false;

if (isLegalAgeLimit) {       
    console.log("Congratulations you may open a bank account");
    return false
} else {
  console.log("You are too young open a bank account.");
  return true
}
``` 

# Undefined values
`null` and `undefined are what is returned when values are seen to have no value. However remember that null and undefined are values in of themselves, they can be used in an expression to check the absence of value

# Automatic type conversion
If an operator is applied to the "wrong" type of value JavaScript will silently convert it to the type that it wants. This is called type coercion

```JavaScript
const age = 35;
const ageLimit = "15";

const isLegalAgeLimit = age > ageLimit ? true : false;

if (isLegalAgeLimit) {       
    console.log("Congratulations you may open a bank account");
} else {
  console.log("You are too young open a bank account.");
}
``` 
