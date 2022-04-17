module.exports.rules = {
  'no-hardcoded-strings': context => ({
    CallExpression: node => {
      // Check if the node is within a test file or import statement
      if (
        context.getFilename().includes('test.tsx') || // Modify the path as needed
        (node.arguments.some(arg => arg.type === 'Literal' && arg.value) &&
          node.parent.type === 'ImportDeclaration')
      ) {
        // Ignore test files and import statements with hardcoded strings
        return;
      }

      if (node.arguments.some(arg => arg.type === 'Literal' && arg.value)) {
        context.report(node, 'Do not use hardcoded strings')
      }
    }
  })
}