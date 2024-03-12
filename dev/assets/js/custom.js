const headerNav = document.querySelector('.header-nav');
const burger = document.querySelector('.burger-btn');

burger.addEventListener('click', ()=>{
    headerNav.classList.toggle('show');
})
burger.addEventListener('click', ()=>{
    burger.classList.toggle('is-active');
})
const  InstallGenplan = ()=>{
    const adress = document.querySelector('#adress');
    const floors = document.querySelector('#floor');
    const flats = document.querySelector('#flat');
    const build = document.querySelectorAll('.build-path');
    //
    build.forEach(build => {
        build.addEventListener('mouseover', ()=>{
            const buildAdress = build.getAttribute('data-address');
            const buildFloor = build.getAttribute('data-floor-amount');
            const buildFlats = build.getAttribute('data-flat-quaintity');
            adress.innerHTML = buildAdress;
            floors.innerHTML = buildFloor;
            flats.innerHTML = buildFlats;
        })
    })
    const booking = (build)=> build.forEach(build =>{
        const buildLink = build.closest('a');
        const flatAmount = build.getAttribute('data-flat-quaintity');
        //const flatAmountToNumber = Number(flatAmount);
        // const flatAmountToNumber = flatAmount * 1;
        // const flatAmountToNumber = +build.getAttribute('data-flat-quaintity');
        const flatAmountToNumber = parseInt(flatAmount);
        flatAmountToNumber ? flatAmountToNumber >= 0 : buildLink.classList.add('booking');
        
        buildLink.addEventListener('click', ()=> {
            if(buildLink.classList.contains('booking'))
            event.preventDefault();
        })
    })
    booking(build);
}
document.querySelector('.genplan') ? InstallGenplan() : null;
