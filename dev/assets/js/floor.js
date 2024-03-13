const installFloor = () =>{
    const flatsFloors = document.querySelectorAll('.flat');
    
    flatsFloors.forEach(flatsFloor => {
        if(flatsFloor.classList.contains('booking')){
            flatsFloor.querySelector('.status-cell__text-span').innerHTML = "test";
        }
        else if(flatsFloor.classList.contains('.sold')){
            flatsFloor.querySelector('.status-cell__text-span').innerHTML = "Акция";
        }
    })
}
document.querySelector('.floor-plan') ? installFloor() : null;