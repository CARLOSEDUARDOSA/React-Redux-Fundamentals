const Todo = require('./todo')

//ja habilita todos os metodos
Todo.methods(['get','post','put','delete'])
//altera as opções, new --> força retornar o objeto atualizado
// eunValidators --> obriga a validar os requireds, default que nao valida sozinho --'
Todo.updateOptions({new:true, runValidators: true})

module.exports = Todo