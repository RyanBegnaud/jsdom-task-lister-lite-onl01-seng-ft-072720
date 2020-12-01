let sub = document.querySelector('#create-task-form').addEventListener("submit", function(e){
  e.preventDefault();
  let des = document.querySelector('input[name="new-task-description"]')
  let tasks = document.querySelector("#tasks")
  tasks.innerHTML = `<li>${des.innerHTML}</li>
})
