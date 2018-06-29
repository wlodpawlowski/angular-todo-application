import { Component, OnInit } from '@angular/core';
import { CategoryDataService } from './categories/category-data.service';
import { Category } from './categories/category';
import { Todo } from './todos/todo';
import { TodoDataService } from './todos/todo-data.service';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [TodoDataService, CategoryDataService]
})

export class AppComponent implements OnInit {
  newTodo: Todo = new Todo();
  newCategory: Category = new Category();
  selectedCategory: Category;

  constructor(private todoDataService: TodoDataService, private categoryDataService: CategoryDataService) {

  }

  addTodo() {
    this.newTodo.category = this.selectedCategory.id;
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
    console.log(this.todos);
  }

  toggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  removeTodo(todo: Todo) {
    this.todoDataService.deleteTodoById(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }

  get todosForCat() {
    return this.todoDataService.getTodoByCategory(this.selectedCategory.id);
  }

  countTodosByCat(id: number) {
    return this.todoDataService.getTodoByCategory(id).length;
  }

  addCategory() {
    this.categoryDataService.addCategory(this.newCategory);
    this.newCategory = new Category();
  }

  removeCategory(category: Category) {
    this.categoryDataService.deleteCategoryById(category.id);
  }

  get categories() {
    return this.categoryDataService.getAllCategories();
  }

  categoryById(id: number) {
    return this.categoryDataService.getCategoryById(id);
  }

  addInitialCategory(category: Category) {
    this.categoryDataService.addCategory(category);
  }

  addInitialTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onSelect(category: Category): void {
    this.selectedCategory = category;
  }

  ngOnInit() {
    //Initializing default categories for example:
    let names = ['Today', '10 days', 'Month', 'Business', 'Partners', 'USA', 'Canada', 'Books', 'Family', 'Sport'];
    this.initCategory(names);
  }

  //Special function for initializing data of default objects:
  initCategory(data) {
    let initCat = new Category();
    let id = 1;
    for (const name of data) {
      initCat = {
        'name' : name,
        'id' : id,
      }
      id++;
      this.addInitialCategory(initCat);
    }
  }

  initTodo(data) {
    let initTodo = new Todo();
  }


}

