let userId = document.cookie
if (userId) {
    userId = JSON.parse(userId)
}else {
    window.location = '/'
}
const userComplaints = document.getElementById('user-complaints')
const userInfo = document.getElementById('user-info')


fetch(`http://81.94.150.112:3001/api/user/get/complaints/${userId}`)
.then(complaints => complaints.json())
.then(complaints => {
    complaints.forEach(complaint => {
        userComplaints.innerHTML += 
            `  
            <div class="box">
                <div class="img-box">
                <img src="./images/${complaint.img}" alt="">
                </div>
                <div class="detail-box">
                <h6>
                    ${complaint.category}
                </h6>
                <a href="#" onclick="openText('${complaint._id}')">Текст</a>
                </div>
            </div> 
            `
    });
   
})

fetch(`http://81.94.150.112:3001/api/user/${userId}`)
.then(user => user.json())
.then(user => {
    if(user) {
        userInfo.innerHTML = `
        <h2>Ваше имя:   <strong>${user.name}</strong></h2>
        <h2>Ваше ID:   <strong>${user._id}</strong></h2>
        <h2>Ваш email:  <strong>${user.email}</strong></h2>
        <h2>Обратная связь:  <strong>${user.feedback}</strong></h2>
    `
    }else {
        window.location = '/'
    }
    
})

function openText(id) {
    console.log(id)
    const modalContainer = document.getElementById('modal-container')
    const modalContent = document.getElementById('modalContent')
    fetch(`http://81.94.150.112:3001/api/complaints/${id}`)
    .then(complaint => complaint.json())
    .then(complaint => {
        modalContainer.classList.add('active')
        console.log(modalContent)
        modalContent.innerHTML = `
        <div class="modal-header">
        <span class="close" onclick="closeModal()">×</span>
        <h2>Текст</h2>
        </div>
        <div class="modal-body">
        <p>${complaint[0].text}</p>
        </div>
        `
    })
}

function closeModal() {
    const modalContainer = document.getElementById('modal-container')
    modalContainer.classList.remove('active')
}
