const Store = require('electron-store')

class DataStore extends Store {

    constructor(settings) {
        super(settings)

        this.todos = this.get('todos') || []
    }
    // Sauvegarde la todoliste
    saveTodos() {
        this.set('todos', this.todos)

        return this
    }  

    // Ajoute un element à la todoList
    addTodo(todo) {
        this.todos = [...this.todos, todo]

        return this.saveTodos()
    }

    // Supprime un element à la todoList
    deleteTodo(todo) {
        this.todos = this.todos.filter(t => t !== todo)

        return this.saveTodos()
    }
}

module.exports = DataStore
