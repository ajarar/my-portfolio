const navigationBtn = document.querySelector('.site-menu-btn-menu');
const siteMenuNav =  document.querySelector('.site-menu');
const siteMenuNavList =  siteMenuNav.querySelector('ul');
const siteMenuNavListItem = siteMenuNavList.querySelectorAll('button'); 
const activeNavClass = 'active-menu';
const hiddenNavClass = 'd-none';
const navListItemActiveClass= 'active';


/* Open Burger Menu */
const navigationBtnToogle = () => {
    if(siteMenuNav && siteMenuNavList) {
        siteMenuNav.classList.toggle(activeNavClass);
        siteMenuNavList.classList.toggle(hiddenNavClass);
        document.body.classList.toggle('lock-screen');
    }
}

/* Add active class to nav item */
const navChoseActiveItem = (event) => {
    let parentElement = event.target.parentElement;
    let activeElement = siteMenuNav.querySelector('.active');
    let current = activeElement.querySelector('span.sr-only');
    console.log(current);
    if(!event.isTrusted) {
        return ;
    }
    if(parentElement) {
        parentElement.classList.add('active');
        event.target.appendChild(current.cloneNode(true))
    }
    if(activeElement) {
        activeElement.classList.remove('active');
        current.remove();
    }    
}


/* Add Event active class to nav item */
if(siteMenuNavListItem) {
    [...siteMenuNavListItem].map((item) => item.addEventListener('click' , navChoseActiveItem));
}

/* Add Event for open Burger Menu */ 

if(navigationBtn) {
    navigationBtn.addEventListener('click', navigationBtnToogle);
}
