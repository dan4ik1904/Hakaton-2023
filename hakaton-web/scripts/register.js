function send() {
    const loading = document.getElementById('loading')
    loading.classList.add('active')
    
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const feedback = document.getElementById('feedback').value
    fetch(`http://81.94.150.112:3001/api/user/register/${name}/${feedback}/${email}/${password}`)
    .then(() => {
        fetch(`http://81.94.150.112:3001/api/user/logining/${name}/${email}/${password}`)
        .then(user => user.json())
        .then(user => {
            console.log(user)
            if (user) {
                document.cookie = JSON.stringify(user._id)
                window.location = '/'
            }else {
                error.innerHTML = '<h1>Неправильный логин или пароль</h1>'
            }
        })
    })
}