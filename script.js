const todoList = JSON.parse(localStorage.getItem('todo')) || [{

  name:'reyr',
  date:'2022-12-22'
},
{
  name: 'sjgh',
  date: '2022-12-22'
}];



renderTodoList();
function renderTodoList(){
  let todoListHTML = '';
  for( let i = 0 ; i < todoList.length ; i++){
    const todoObject = todoList[i];
    // const name = todoObject.name;
     // const date = todoObject.date;
    const {name , date} = todoObject ;
    const html = 
      `<div>${name}</div>
       <div>${date}</div>    
      <button 
       class="delete-button 
       js-delete-todo-button">Delete</button>`;
    todoListHTML += html ; 
    
    
  }
  document.querySelector('.todo-box')
    .innerHTML = todoListHTML; 

    document.querySelectorAll('.js-delete-todo-button')
      .forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click' , () =>{
          todoList.splice(index ,1);
          renderTodoList();
        })
      })


}

document.querySelector('.js-add-todo-button')
  .addEventListener('click' , ()=>{
    addTodo();
  })
function addTodo(){
  const input = document.querySelector('.js-input');
  const dateElement = document.querySelector('.js-date');
  const date = dateElement.value ;
  let name = input.value ;
  todoList.push({ name , date});
  input.value = '';
  renderTodoList();
  saveLocalStorge();
}
function saveLocalStorge(){
  localStorage.setItem('todo' , JSON.stringify(todoList));
}