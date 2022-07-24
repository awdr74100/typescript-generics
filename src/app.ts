// const names: Array<string> = []; // string[]
// // names[0].split(' ');

// const promise: Promise<number> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split(' ');
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const mergeObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  if (element.length === 0) return [element, 'Got no value.'];
  return [element, `Got ${element.length} element(s).`];
}

console.log(countAndDescribe('Hi there!'));
console.log(countAndDescribe(['Sports', 'Cooking']));
console.log(countAndDescribe([]));
console.log(countAndDescribe(''));
console.log(countAndDescribe({ length: 20 }));
// console.log(countAndDescribe(10)); // doesn't work!

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U,
) {
  return `Value: ${obj[key]}`;
}

extractAndConvert({ name: 'Max' }, 'name');

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  getItems() {
    return this.data;
  }

  updateItem(oldItem: T, newItem: T) {
    const itemIndex = this.data.findIndex((i) => i === oldItem);

    if (itemIndex !== -1) this.data[itemIndex] = newItem;
  }

  removeItem(item: T) {
    const itemIndex = this.data.findIndex((i) => i === item);

    if (itemIndex !== -1) this.data.splice(itemIndex, 1);
  }
}

const namesStorage = new DataStorage<string>();
namesStorage.addItem('Leo');
namesStorage.addItem('Ian');
namesStorage.removeItem('Leo');
namesStorage.updateItem('Ian', 'Owen');
console.log(namesStorage.getItems());

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}

const todoList: Readonly<Todo[]> = [{ title: '...', description: '...' }];
// todoList.push({ title: '...', description: '...' });
// todoList.pop();
// todoList.forEach(({ title }) => console.log(title));
// todoList[1] = { title: '...', description: '...' };

const todo: Readonly<Todo> = { title: '...', description: '...' };
// todo.title = 'dw';

type UserName = 'Ian' | 'Owen';

const todoStorage: Record<UserName, Todo[]> = {
  Ian: [{ title: '...', description: '...' }],
  Owen: [{ title: '...', description: '...' }],
};
