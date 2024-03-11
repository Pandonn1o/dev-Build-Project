
const  InstallGenplan = ()=>{
    const adress = document.querySelector('#adress');
    const floors = document.querySelector('#floor');
    const flats = document.querySelector('#flat');
    const builds = document.querySelectorAll('.build-path');
    //
    builds.forEach(build => {
        build.addEventListener('mouseover', ()=>{
            const buildAdress = build.getAttribute('data-address');
            const buildFloor = build.getAttribute('data-floor-amount');
            const buildFlats = build.getAttribute('data-flat-quaintity');
            adress.innerHTML = buildAdress;
            floors.innerHTML = buildFloor;
            flats.innerHTML = buildFlats;
        })
    })
}
document.querySelector('.genplan') ? InstallGenplan() : null;
const headerNav = document.querySelector('.header-nav');
const burger = document.querySelector('.burger-btn');

burger.addEventListener('click', ()=>{
    headerNav.classList.toggle('show');
})
burger.addEventListener('click', ()=>{
    burger.classList.toggle('is-active');
})