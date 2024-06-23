const taskCreator = function() {
    const formData = new FormData(event.target)
    const formObject = {}

    formData.forEach((value,key) => {
        formObject[key] = value
    })

    return formObject
}


export default taskCreator