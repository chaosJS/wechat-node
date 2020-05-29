const recast = require('recast')
const code = `
  function add(a, b) {
    return a +
      // 有什么奇怪的东西混进来了
      b
  }
  `
// 用螺丝刀解析机器
const ast = recast.parse(code)
const add = ast.program.body[0]
// console.log(ast)
/*
{ program:
   Script {
     type: 'Program',
     body: [ [FunctionDeclaration] ],
     sourceType: 'script',
     loc:
      { start: [Object],
        end: [Object],
        lines: [Lines],
        indent: 2,
        tokens: [Array] },
     errors: [] },
  name: null,
  loc:
   { start: { line: 1, column: 0, token: 0 },
     end: { line: 7, column: 2, token: 13 },
     lines:
      Lines {
        infos: [Array],
        mappings: [],
        cachedSourceMap: null,
        cachedTabWidth: undefined,
        length: 7,
        name: null },
     indent: 0,
     tokens:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ] },
  type: 'File',
  comments: null,
  tokens:
   [ { type: 'Keyword', value: 'function', loc: [Object] },
     { type: 'Identifier', value: 'add', loc: [Object] },
     { type: 'Punctuator', value: '(', loc: [Object] },
     { type: 'Identifier', value: 'a', loc: [Object] },
     { type: 'Punctuator', value: ',', loc: [Object] },
     { type: 'Identifier', value: 'b', loc: [Object] },
     { type: 'Punctuator', value: ')', loc: [Object] },
     { type: 'Punctuator', value: '{', loc: [Object] },
     { type: 'Keyword', value: 'return', loc: [Object] },
     { type: 'Identifier', value: 'a', loc: [Object] },
     { type: 'Punctuator', value: '+', loc: [Object] },
     { type: 'Identifier', value: 'b', loc: [Object] },
     { type: 'Punctuator', value: '}', loc: [Object] } ] }
*/
// console.log(add)
console.log('-----', JSON.stringify(add.body.body[0].argument.left))
/**
 FunctionDeclaration {
  type: 'FunctionDeclaration',
  id:
   Identifier {
     type: 'Identifier',
     name: 'add',
     loc:
      { start: [Object],
        end: [Object],
        lines: [Lines],
        tokens: [Array],
        indent: 2 } },
  params:
   [ Identifier { type: 'Identifier', name: 'a', loc: [Object] },
     Identifier { type: 'Identifier', name: 'b', loc: [Object] } ],
  body:
   BlockStatement {
     type: 'BlockStatement',
     body: [ [ReturnStatement] ],
     loc:
      { start: [Object],
        end: [Object],
        lines: [Lines],
        tokens: [Array],
        indent: 2 } },
  generator: false,
  expression: false,
  async: false,
  loc:
   { start: { line: 2, column: 2, token: 0 },
     end: { line: 6, column: 3, token: 13 },
     lines:
      Lines {
        infos: [Array],
        mappings: [],
        cachedSourceMap: null,
        cachedTabWidth: undefined,
        length: 7,
        name: null },
     tokens:
      [ [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object],
        [Object] ],
     indent: 2 } }
 
 */
