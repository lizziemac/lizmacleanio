module.exports.rules = {
  'no-hardcoded-strings': context => ({
    CallExpression: node => {
      if (node.arguments.some(arg => arg.type === 'Literal' && arg.value)) {
        context.report(node, 'Do not use hardcoded strings')
      }
    }
  })
}