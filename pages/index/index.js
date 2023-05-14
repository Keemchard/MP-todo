const app = getApp()
var globalTodos = app.todos

const setTodos = (todos)=>{
    return my.setStorageSync({
    key: 'todos',
    data: todos || []
  })
}

Page({ 
  data: {globalTodos},

  onSubmit(e) {
    const {__unknown_for_control_1: todoTitle} = e.detail.value;;
    let newSetOfTodos = [...globalTodos, {id: Math.random(), title: todoTitle}]
    setTodos(newSetOfTodos)
    this.setData({ globalTodos: newSetOfTodos }) 
  }, 

  deleteTodo(event){ 
    const id = event.target.dataset.id;
    const filteredTodos = globalTodos.filter((todo)=>{
        return id !== todo.id ; 
    })
    setTodos(filteredTodos)
    this.setData({globalTodos: filteredTodos})
  }
  
  // deleteAll() {
  //   my.clearStorageSync();
  //   console.log(globalTodos) 
  // }
});
