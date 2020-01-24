let navigationBtn = document.querySelector('.site-menu-btn-menu');
let siteMenuNav =  document.querySelector('.site-menu');
let siteMenuNavList =  siteMenuNav.querySelector('.site-menu ul');
const activeNavClass = 'active-menu';
const hiddenNavClass = 'd-none';

let navigationBtnToogle = () => {
    if(siteMenuNav && siteMenuNavList) {
        siteMenuNav.classList.toggle(activeNavClass);
        siteMenuNavList.classList.toggle(hiddenNavClass);
        document.body.classList.toggle('lock-screen');
    }
}

navigationBtn.addEventListener('click',navigationBtnToogle);