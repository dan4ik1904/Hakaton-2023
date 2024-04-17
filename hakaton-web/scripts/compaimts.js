const complaintsPage = document.getElementById('complaints')


fetch('http://81.94.150.112:3001/api/user/get/complaints')
.then(complaints => complaints.json())
.then(complaints => {
    console.log(complaints)
    complaints.forEach(complaint => {
        console.log(complaint)
        complaintsPage.innerHTML += `
        <div class="box">
            <div class="img-box">
                <img src="./images/${complaint.img}" alt="">
            </div>
            <div class="detail-box">
            <h5>
                Категоия: ${complaint.category}
            </h5>
            <h4>
                Имя: ${complaint.name}
            </h4>
            <h4>
                Средство связи: ${complaint.feedback}
            </h4>
            <span onclick="openText('${complaint._id}')">Текст</span>
            </div>
            <div class="btn-box">
                <a href="#" onclick="deleteC('${complaint._id}')">
                Просмотрено
                </a>
            </div>
      </div>
        `
    });
})


async function deleteC(id) {
    await fetch(`http://81.94.150.112:3001/api/user/disactive/complaints/${id}`)
    .then(() => {
        window.location.reload()
    })
}


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