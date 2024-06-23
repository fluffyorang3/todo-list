const ui = function() {
    const projectSidebar = document.getElementById('projects')
    const tasksSidebar = document.getElementById('todos')
    const todayContent = document.getElementById('today')
    const projectsContent = document.getElementById('projects-content')
    const allTasksContent = document.getElementById('all-todos-content')
    
    projectSidebar.addEventListener("click", () => {
        alert("project sidebar")
    })

    tasksSidebar.addEventListener("click", () => {
        alert("tasks sidebar")
    })

    todayContent.addEventListener("click", () => {
        alert("today content")
    })

    projectsContent.addEventListener("click", () => {
        alert("project content")
    })

    allTasksContent.addEventListener("click", () => {
        alert("alltasks content")
    })
}

export default ui