var getPosts = function() {
  const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=3';
  loading.style.display = 'block';
  axios.get(POSTS_URL, {
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        console.log(res.data[0].body);
        first_testimonial.innerHTML = res.data[0].body;
        second_testimonial.innerHTML = res.data[1].body;
        third_testimonial.innerHTML = res.data[2].body;
        
      }
      // console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      loading.style.display = 'none';
    });
  }
  getPosts()
  
  var getUsers = function() {
  const  USERS_URL= 'https://jsonplaceholder.typicode.com/users?_limit=3';
  loading.style.display = 'block';
  axios.get(USERS_URL, {
    responseType: 'json'
  })
    .then(function(res) {
      if(res.status==200) {
        // console.log(res.data[2].name);
        first_person.innerHTML = res.data[0].name
        second_person.innerHTML = res.data[1].name
        third_person.innerHTML = res.data[2].name
        // user_name.innerHTML = res.data.map((x)=>x.name)
      }
      console.log(res);
    })
    .catch(function(err) {
      console.log(err);
    })
    .then(function() {
      loading.style.display = 'none';
    });
}
getUsers()



// const getTodoItems = async () => {
//   try {
//     let posts = await axios.get(`${POSTS_URL}?_limit=5`);
//     let users = await axios.get(`${USERS_URL}?_limit=5`);

//      posts = posts.data;
//      users = users.data;

    
//     console.log(`GET: Here's the list of posts`, posts, users);
//     return posts;
// } catch (errors) {
//     console.error(errors);
// }
// };
// getTodoItems()

// const createTodoElement = item => {
//     const todoElement = document.createElement(".response");
  
//     todoElement.appendChild(document.createTextNode(item.title));
  
//     return todoElement;
//   };
  
//   const updateTodoList = todoItems => {
//     const todoList = document.querySelector(".response");
  
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