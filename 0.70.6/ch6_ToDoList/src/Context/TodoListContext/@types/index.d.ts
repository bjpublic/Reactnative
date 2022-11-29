interface ITodoListContext {
  todoList: Array<string>;
  addTodoList: (todo: string) => void;
  removeTodoList: (index: number) => void;
}
