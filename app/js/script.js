
const bthHamburger = document.querySelector("#btnHamburger")
const body = document.querySelector('body')
const header = document.querySelector('.header')
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade')


bthHamburger.addEventListener('click', ()=>{
    // console.log('Test')
    if(header.classList.contains('open')){
        //Close Hamburger
        body.classList.remove('nonScroll')
        header.classList.remove('open')
        fadeElems.forEach((element)=>{
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        })
    }else{
        //Open Hamburger
        body.classList.add('nonScroll')
        header.classList.add('open');
        fadeElems.forEach((element)=>{
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        })
        }

    }
)