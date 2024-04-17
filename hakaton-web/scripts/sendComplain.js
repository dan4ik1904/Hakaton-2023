function send() {
    const loading = document.getElementById('loading')
    loading.classList.add('active')

    const file = document.getElementById('file').files[0]
    const category = document.getElementById('disabledSelect').value
    const text = document.getElementById('exampleFormControlTextarea1').value
    const anonim = document.getElementById('anonim').checked
    const userId = JSON.parse(document.cookie)

    console.log(anonim)

    console.log(file.name)

    fetch(`http://81.94.150.112:3001/api/user/${userId}`)
    .then(user => user.json())
    .then(user => {
        if(anonim === false) {
            fetch(`http://81.94.150.112:3001/api/user/add/complaints/${user.name}/${userId}/${user.feedback}/${category}/${text}/${file.name}`)
            .then(mess => {
                const formData = new FormData()
                formData.append('file', file)
                fetch("complaitCall.php", {
                    method: "post",
                    body: formData
                })
                .then(() => {
                    window.location = '/'
                })
            })
        }else {
            fetch(`http://81.94.150.112:3001/api/user/add/complaints/Аноним/${userId}/Нет/${category}/${text}/${file.name}`)
            .then(mess => {
                const formData = new FormData()
                formData.append('file', file)
                fetch("complaitCall.php", {
                    method: "post",
                    body: formData
                })
                .then(() => {
                    window.location = '/'
                })
            })
        }
        console.log(anonim)
        
    })
    
}