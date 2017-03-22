# grinde-pathfinding


## Installation

```
npm install --save git+https://github.com/grind086/grinde-options.git
```

## Example

```javascript
'use strict';

const Options = require('grinde-options');

class Person {
    constructor(opts) {
        var options = new Options(Person.defaults).merge(opts);
        
        this.hasAge = options.isDefined('age');
        
        this.name = options.get('name');
        this.age = options.get('age');
    }
    
    sayHello() {
        if (this.hasAge)
            console.log(`Hello, my name is ${this.name}. I am ${this.age} years old.`);
        else
            console.log(`Hello, my name is ${this.name}`);
    }
}

Person.defaults = {
    name: 'John Doe',
    age: undefined
};

```

## API

#### Properties

* `values {object}` -- Contains the current values.

#### constructor([defaults])

* `defaults {object}` -- (optional) The original options to merge in.

#### merge(options, [allowNew])

Merges another options object into the current values. Optionally allows for
new options.

* `options {object}` -- Additional options to merge in.
* `allowNew {boolean}` -- (optional) Whether or not to allow options that aren't already
present in the `options.values` object. Default is `true`.

#### get(name)

Returns the current value of option `name`.

#### isOption(name)

Returns a boolean indicating whether or not `name` is a valid option.

#### isDefined(name)

Returns a boolean indicating whether or not `name` is `undefined`.

#### isDefinedAndNonNull(name)

Returns a boolean indicating whether or not `name` is neither `undefined` nor
`null`.
