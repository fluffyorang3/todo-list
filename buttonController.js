import taskCreator from "./taskObject.js"

const buttons = function() {
    const newTaskButton = document.getElementById('task-button')
    const newProjectButton = document.getElementById('project-button')
    const taskDialog = document.getElementById('task-dialog')
    const projectDialog = document.getElementById('project-dialog')
    const taskSubmit = document.getElementById('task-submit')
    const projectSubmit = document.getElementById('project-submit')
    const closeButtonTask = document.querySelector('#task-close')
    const closeButtonProject = document.querySelector('#project-close')
    const taskForm = document.getElementById('task-form')
    const projectSidebar = document.getElementById('projects')
    const tasksSidebar = document.getElementById('todos')
    const todayContent = document.getElementById('today')
    const projectsContent = document.getElementById('projects-content')
    const allTasksContent = document.getElementById('all-todos-content')

    const taskArray = []


    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newObj = taskCreator()
        console.log(newObj)
        const newLink = document.createElement("div")
        newLink.classList.add("test")
        newLink.innerText = `${newObj.description}`
        todayContent.insertAdjacentElement('afterend', newLink)
        taskArray.push(newObj)
        console.log(taskArray)
        taskDialog.close()
        taskForm.reset()

    })

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

    
}

export default buttons