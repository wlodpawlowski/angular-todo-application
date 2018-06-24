import { Injectable } from '@angular/core';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})

export class CategoryDataService {
  lastId = 0;
  categories: Category[] = [];
  constructor() { }

  //ADD method for todo-category:
  addCategory(category: Category): CategoryDataService {
    if (!category.id) {
      category.id = ++this.lastId;
    }
    this.categories.push(category);
    return this;
  }

  //DELETE method for todo-category:
  deleteCategoryById(id: number): CategoryDataService {
    this.categories = this.categories.filter(category => category.id !== id);
    return this;
  }

  //UPDATE method for todo-category:
  updateCategoryById(id: number, values: Object = {}): Category {
    let category = this.getCategoryById(id);
    if (!category) {
      return null;
    }
    Object.assign(category, values);
    return category;
  }

  //Getting all categories of todo-items:
  getAllCategories(): Category[] {
    return this.categories;
  }

  //Getting category by ID:
  getCategoryById(id: number): Category {
    return this.categories.filter(category => category.id === id).pop();
  }
}
