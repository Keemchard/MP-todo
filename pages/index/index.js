const app = getApp()
// var globalPersonDataObj = app.globalPersonData
var globalTodos = app.todos

const setTodos = (todos)=>{
  return my.setStorageSync({
    key: 'todos',
    data: todos || []
  })
}

console.log(globalTodos)

Page({ 
  data: {globalTodos},
  onSubmit(e) {
    const {__unknown_for_control_1: todoTitle} = e.detail.value;;
    let newSetOfTodos = [...globalTodos, {id: Math.random(), title: todoTitle}]

    setTodos(newSetOfTodos)
    console.log(setTodos(newSetOfTodos))
 
    // my.reLaunch({
    //   url: '/pages/index/index'
    // });
    this.setData({ globalTodos: newSetOfTodos }, console.log(newSetOfTodos)) 
  },
  // deleteTodo(){ 
  //   const filteredTodos = globalTodos.filter((todo)=>{
  //       return todo.id > 0;
  //   })
  //   console.log(filteredTodos)
  //   setTodos(filteredTodos)
  // }
  // deleteAll() {
  //   my.clearStorageSync();
  //   console.log(globalTodos)
  // }
});
