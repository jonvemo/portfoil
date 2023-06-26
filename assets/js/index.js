import { getHTML } from "/assets/js/include.js"
import { SKILLS } from "/assets/js/skills.js"
import { SOCIALMEDIA } from "/assets/js/social-links.js"

document.addEventListener('DOMContentLoaded', ev=>{
    const $SECTION = document.getElementById('section')

    document.addEventListener('click',ev=>{
        const TARGET = ev.target
        if(TARGET.matches('#toggle__social__btn, #toggle__social__btn *')){
            const 
                $SOCIALMEDIA_HIDDEN = document.getElementById('social__hidden'),
                $BTN_USE = document.getElementById('change__icon'),
                CURRENT_ICON = $BTN_USE.getAttribute('href')

            $SOCIALMEDIA_HIDDEN.classList.toggle('hidden')
            CURRENT_ICON === '#caret__right' ? $BTN_USE.setAttribute('href', '#caret__left') : $BTN_USE.setAttribute('href', '#caret__right')
        }
        if(TARGET.matches('.navegator__link, .navegator__link *')) {
            ev.preventDefault()
        
            let url = TARGET.href
            TARGET.matches('.navegator__link *') ? url = TARGET.parentNode.href : url = TARGET.href
        
            getHTML({
                url: url,
                success: (html) => {
                    $SECTION.innerHTML = html;
                    if (url === '/page/home.html') {
                        SKILLS()
                        SOCIALMEDIA()
                    }
                },
                error: (err) => {
                    $SECTION.innerHTML = `<h1>${err}</h1>`
                }
            })
        }   
    })
    getHTML({
        url: '/page/home.html',
        success: (html) => {
            $SECTION.innerHTML = html
            SKILLS()
            SOCIALMEDIA()
        },
        error: (err) => $SECTION.innerHTML = `<h1>${err}</h1>`
    })

})