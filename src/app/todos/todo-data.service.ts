import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TodoDataService {
  lastId = 0; //Automatic incrementing id's counter
  todos: Todo[] = []; //Array with all todo-items
  constructor() { }
  
  //ADD method for todo-items:
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  //DELETE method for todo-items:
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  //UPDATE method for todo-items:
  updateTodoById(id: number, values: Object = {}): Todo {
    const todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }
    Object.assign(todo, values);
    return todo;
  }
  
  //Getting all todos:
  getAllTodos(): Todo[] {
    return this.todos;
  }

  //Getting todo-item by ID:
  getTodoById(id: number): Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  //Getting todo-item by Category:
  getTodoByCategory(id: number): Todo[] {
    return this.todos.filter(todo => todo.category === id);
  }

  //Toggling todo-item complete-status:
  toggleTodoComplete(todo: Todo) {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
