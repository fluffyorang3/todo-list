const newProjectButton = document.getElementById('project-button')
const newTaskButton = document.getElementById('task-button')
const taskDialog = document.getElementById('task-dialog')
const projectDialog = document.getElementById('project-dialog')
const taskSubmit = document.getElementById('task-submit')
const projectSubmit = document.getElementById('project-submit')

newTaskButton.addEventListener("click", () => {
    taskDialog.showModal();
})

newProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
})