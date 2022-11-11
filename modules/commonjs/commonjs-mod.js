//  1. require -- to import
//  2. exports and module.exports for export
//  3. loading modules in CommonJS are deliberately synchronous operations.

// Implement mock require function

function require(moduleName) {
  console.log(`Require invoked for module: ${moduleName}`);
  const id = require.resolve(moduleName);
  // (1)
  if (require.cache[id]) {
    // (2)
    return require.cache[id].exports;
  }
  // module metadata
  const module = {
    exports: {},
    id,
  };
  // Update the cache
  require.cache[id] = module; // (4)
  // load the module
  loadModule(id, module, require); // (5)
  // return exported variables
  return module.exports; // (6)
  // (3)
}
require.cache = {};
require.resolve = (moduleName) => {
  /* resolve a full module id from the moduleName */
};
