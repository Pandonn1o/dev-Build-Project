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
const InstallFloors = ()=>{
    const adressFlats = document.querySelector('#address-stages');
    const floorLevel = document.querySelector('#floor-level');
    const amountOfFlats = document.querySelector('#flats-amount');
    const freeFlats = document.querySelector('#free-flats');
    const salesFlats = document.querySelector('#sales-flats');
    const bookedFlats = document.querySelector('#booked-flats');
    const soldFlats = document.querySelector('#sold-flats');
    const stages = document.querySelectorAll('.floors-js');
    stages.forEach(stages =>{
        stages.addEventListener('mouseover', ()=>{
            const flatStage = stages.getAttribute('data-flat-stage');
            const flatNumber = stages.getAttribute('data-flats-amount');
            const flatFree = stages.getAttribute('data-flat-free');
            const flatSales = stages.getAttribute('data-flat-sales');
            const flatBooked = stages.getAttribute('data-flat-booked');
            const flatSold = stages.getAttribute('data-flat-sold');
            console.log(flatStage)
            
            floorLevel.innerHTML = flatStage;
            amountOfFlats.innerHTML = flatNumber;
            freeFlats.innerHTML = flatFree;
            salesFlats.innerHTML = flatSales;
            bookedFlats.innerHTML = flatBooked;
            soldFlats.innerHTML = flatSold;
        })
    })
}
document.querySelector('.genplan') ? InstallGenplan() : null;
document.querySelector('.floors-plan') ? InstallFloors(): null;

