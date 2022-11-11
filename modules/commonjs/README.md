# Modules

## Need

- Having a way to split the codebase into multiple files.
- Allowing code reuse across different projects.
- Encapsulation (or information hiding).
- Managing dependencies.

Two types of module systems

- CommonJS (require)
- ECMAScript modules (import)

## CommonJs

look at commonjs-mod.js

- module.exports versus exports

  _The exports variable is just a reference to the initial value of module.exports ._

  - we can only attach new properties to the object referenced by the exports variable

  ```
  // Correct
  exports.hello = () => {
      console.log('Hello')
  }
  ```

  - Reassigning the exports variable doesn't have any effect

  ```
  // Wrong
  exports = () => {
      console.log('Hello')
  }
  ```

  _If we want to export something other than an object literal, such as a function, an instance, or even a string, we have to reassign module.exports as follows:_

  ```
  module.exports = () => {
      console.log('Hello')
  }
  ```

- **The require function is synchronous**

  What if we need some asynchronous initialization steps for a module ?

- The resolving algorithm
  Node.js solves the dependency hell problem elegantly by loading a different version of a module depending on where the module is loaded from. (npm/yarn organize this)

  - File modules
  - Code modules
  - Package modules

  `require.resolve()`

- The module cache
- Circular dependencies **beware**

### Module definition patterns

#### 1. Named exports

_assigning the values we want to make public to properties of the object referenced by exports_

```
// file logger.js
exports.info = (message) => {
    console.log(`info: ${message}`)
}
exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}

// file main.js
const logger = require('./logger')
logger.info('This is an informational message')
logger.verbose('This is a verbose message')
```

The use of module.exports is an extension provided by Node.js to support a broader range of module definition patterns.

#### 2. Exporting a function

reassigning the whole module.exports variable to a function.

```
// file logger.js
// expose only a single functionality, which provides a clear
// entry point for the module

module.exports = (message) => {
    console.log(`info: ${message}`)
}
module.exports.verbose = (message) => {
    console.log(`verbose: ${message}`)
}

// file main.js
const logger = require('./logger')
logger('This is an informational message') // <- see the diff
logger.verbose('This is a verbose message')
```

#### 3. Exporting class

#### 4. Exporting an instance

_We can leverage the caching mechanism of require() to easily define stateful instances created from a constructor or a factory_

#### 5. Modifying other modules or the global scope

Called **_Monkey Patching_**
