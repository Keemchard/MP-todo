
let todos = my.getStorageSync({ key: 'todos' });
 
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
