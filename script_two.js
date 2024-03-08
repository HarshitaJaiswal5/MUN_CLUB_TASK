const slides = document.querySelectorAll('.slider')
let counter = 0;
const sl = [...slides];

sl.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
})

window.addEventListener('scroll', () => {
    let header = document.querySelector('.nav-bar')
    header.classList.toggle('sticky', window.scrollY > 0)
})

const goPrev = () => {
    counter--
    slideShow()
}
const goNext = () => {
    counter++
    slideShow()
}
const slideShow = () => {
    console.log(sl)
    sl.forEach((slide) => {
        console.log('hello insider')
        ch()
        slide.style.transform = `translateX(-${counter * 100}%)`
    })
}

const ch = () => {
    if (counter == 4) {
        counter = 0;

    }
}

// timer

const endDate = '25 april 2024 '
// document.getElementById('endDate').innerText = endDate;
const inputs = document.getElementsByTagName('input')

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    if(diff>=0){
    inputs[0].value = (Math.floor(diff / 3600 / 24));
    inputs[1].value = (Math.floor((diff / 3600) % 24));
    inputs[2].value = (Math.floor(diff / 60) % 60)
}}

setInterval(()=>{
    clock()
}, 1000)

function redirectToWebsite() {
    window.location.href = "https://linktr.ee/worldaccord"
}