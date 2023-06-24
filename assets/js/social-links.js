const 
    $SOCIALMEDIA = document.getElementById('social'),
    $SOCIALMEDIA__HIDDEN = document.getElementById('social__hidden'),
    LINKS = [
        'https://linkedin.com/in/jonvemo',
        'https://github.com/jonvemo',
        'https://twitter.com/jonvemodev'
    ],
    LINKS_HIDDEN = [
        'https://instagram.com/jonvemodev',
        'https://facebook.com/jonvemodeveloper'
    ], 
    $TEMPLATE_SOCIAL = document.getElementById('template__social').content,
    $TEMPLATE_SOCIAL_PLUS = document.getElementById('template__social__plus').content,
    $FRAGMENT = document.createDocumentFragment()

export const SOCIALMEDIA = () => {
    const insertSocialLinks = (links, template, container, insertAtStart) => {
        links.forEach((el, i) => {
            const 
                LINK = links[i],
                DOMAIN_NAME = LINK.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n.]+)/im)[1]
    
            template.querySelector('a').href = LINK
            template.querySelector('use').setAttribute('href', `#${DOMAIN_NAME}`)
    
            let $clone = document.importNode(template, true)
            $FRAGMENT.appendChild($clone)
        })
        
        insertAtStart ? container.insertBefore($FRAGMENT, container.firstChild) : container.appendChild($FRAGMENT)
    }
    
    insertSocialLinks(LINKS, $TEMPLATE_SOCIAL, $SOCIALMEDIA, true)
    insertSocialLinks(LINKS_HIDDEN, $TEMPLATE_SOCIAL_PLUS, $SOCIALMEDIA__HIDDEN, false)
}
