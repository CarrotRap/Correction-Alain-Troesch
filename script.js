const home      = document.querySelector('.home')
const find      = document.querySelector('.find')
const submit    = document.querySelector('.submit')

const home_btn  = document.getElementById('home_btn')
const find_btn  = document.getElementById('find_btn')
const submit_btn= document.getElementById('submit_btn')

const finder    = document.getElementById('finder')
const error_finder= document.querySelector('.error')
const frame     = document.querySelector('.frame')


/* DISPLAY CONTROL */
function changeDisplay(display) {
    if(display == 'home') {
        find.style.display = "none"
        submit.style.display = 'none'
        home.style.display = ""
    } else if(display == 'find') {
        home.style.display = "none"
        submit.style.display = 'none'
        find.style.display = ""
    } else if(display == 'submit') {
        find.style.display = "none"
        home.style.display = 'none'
        submit.style.display = ""
    }
}

home_btn.addEventListener('click', () => changeDisplay('home'));
find_btn.addEventListener('click', () => changeDisplay('find'))
submit_btn.addEventListener('click', () => changeDisplay('submit'))

changeDisplay('home')

/* END OF DISPLAY CONTROL */

/* FINDER CONTROL */
finder.addEventListener('input', (ev) => {
    fetch('./files/' + ev.target.value + ".pdf").then((res) => {
        if(res.status == 404) {
            error_finder.innerHTML = "Exercice introuvable"
            frame.style.display = "none"
            setTimeout(() => {
                error_finder.innerHTML = ""
            }, 2000)
            return;
        } else if(res.status == 200) {
            frame.src = './files/' + ev.target.value + '.pdf'
            frame.style.display = ''
        }
    })
})
