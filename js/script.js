let messageInput = document.querySelector('.message');
let addButton = document.querySelector('.add');
let todoList = [];
addButton.addEventListener('click', function(){
  let todoObject = {
    todo:messageInput.value,
    checked:false,
    important: false
  }
  todoList.push(todoObject);
  console.log(todoList);
  displayMessages()
});

function displayMessages(){
    todoList.forEach(function(item){

    })
}