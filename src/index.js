let sub = document.querySelector('#create-task-form').addEventListener("submit", function(e){
  e.preventDefault();
  let des = document.querySelector('input[name="new-task-description"]').textContent
  console.log(des)
})
