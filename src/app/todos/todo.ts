export class Todo {
  id: number;
  title = '';
  complete = false;
  category: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
