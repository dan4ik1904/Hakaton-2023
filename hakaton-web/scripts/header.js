const userOption = document.getElementById('User_option')
const nav = document.getElementById('nav_js')
if(document.cookie) {
    const userId = JSON.parse(document.cookie)
    fetch(`http://81.94.150.112:3001/api/user/${userId}`)
    .then(user => user.json())
    .then(user => {
      console.log(user)
      if(user.admin === false) {
        userOption.innerHTML = `
        <a class="" href="profile.html">
        ${user.name}
        </a>
        `
        nav.innerHTML = `
                  <a href="/">Главная</a>
                  <a href="about.html">О нас</a>
                  <a href="form-complaint.html">Сообщить о дефекте</a>
                  <a href="profile.html">Профиль</a>
                  
        `
        
    }else if (user.admin === true) {
      userOption.innerHTML = `
        <a class="" href="profile.html">
        ${user.name}
        </a>
        `
      nav.innerHTML = `
                  <a href="complaints.html">Сообщения</a>
                  <a href="/">Главная</a>
                  <a href="form-complaint.html">Сообщить о дефекте</a>
                  <a href="profile.html">Профиль</a>
                  <a href="about.html">О нас</a>
      `
    }

  })
    
}else {
  nav.innerHTML = `
                <a href="/">Главная</a>
                <a href="register.html">Сообщить о дефекте</a>
                <a href="about.html">О нас</a>
                <a href="login.html">Вход</a>
                <a href="register.html">Регистрация</a>
    `
  userOption.innerHTML = `
    <a class="mr-4" href="login.html">
      Вход
    </a>
    <a class="" href="register.html">
      Регистрация
    </a>
  `
}