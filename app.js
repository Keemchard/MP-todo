
let todos = my.getStorageSync({ key: 'todos' });
// console.log(todos.data)
//  my.alert({
//     content: JSON.stringify(todos.data),
//  });

// const todoData = [{title:"hey"},{title:"you"}]
const todoData = todos.data

App({
  todos: todoData,
  globalPersonData: {
    name: "Keemchard",
    age: 22,
    count: 0
  },
  onLaunch(options) {
    // Page opens for the first time
    console.info('App onLaunch');
  },
  onShow(options) {
    // Reopened by scheme from the background
  },
});
