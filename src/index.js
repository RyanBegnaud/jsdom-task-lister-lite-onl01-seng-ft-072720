let sub = document.querySelector('#create-task-form').addEventListener("submit", function(e){
  e.preventDefault();
  let des = document.querySelector('input[name="new-task-description"]')
  let tasks = document.querySelector("#tasks")
  let newTasks = document.createElement("li")
  newTasks.innerHTML = des.value 
  tasks.append(newTasks)
})
