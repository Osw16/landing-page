const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const  USERS_URL= 'https://jsonplaceholder.typicode.com/users';

const getTodoItems = async () => {
  try {
    const response = await axios.get(`${POSTS_URL}?_limit=5`);
    const response_ = await axios.get(`${USERS_URL}?_limit=5`);

    const todoItems = response.data;
    const todoItems_ = response_.data;

    
    console.log(`GET: Here's the list of posts`, todoItems, todoItems_);
    return todoItems;
} catch (errors) {
    console.error(errors);
}
};
getTodoItems()
// const createTodoElement = item => {
//     const todoElement = document.createElement('li');
  
//     todoElement.appendChild(document.createTextNode(item.title));
  
//     return todoElement;
//   };
  
//   const updateTodoList = todoItems => {
//     const todoList = document.querySelector('ul');
  
//     if (Array.isArray(todoItems) && todoItems.length > 0) {
//       todoItems.map(todoItem => {
//         todoList.appendChild(createTodoElement(todoItem));
//       });
//     } else if (todoItems) {
//       todoList.appendChild(createTodoElement(todoItems));
//     }
//   };
  
//   const main = async () => {
//     updateTodoList(await getTodoItems());
//   };
  
//   main();