const newTaskButton = document.getElementById('task-button')
const newProjectButton = document.getElementById('project-button')
const taskDialog = document.getElementById('task-dialog')
const projectDialog = document.getElementById('project-dialog')
const taskSubmit = document.getElementById('task-submit')
const projectSubmit = document.getElementById('project-submit')
const closeButtonTask = document.querySelector('#task-close')
const closeButtonProject = document.querySelector('#project-close')

newTaskButton.addEventListener("click", () => {
    taskDialog.showModal();
})

newProjectButton.addEventListener("click", () => {
    projectDialog.showModal();
})

closeButtonTask.addEventListener("click", () => {
    taskDialog.close()
})

closeButtonProject.addEventListener("click", () => {
    projectDialog.close()
})