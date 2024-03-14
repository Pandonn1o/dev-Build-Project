const installFloor = () =>{
    const flatsloors = document.querySelectorAll('.flat');
    
    flatsloors.forEach(flatsloor => {
        if(flatsloor.classList.contains('booked')){
            flatFloor.querySelector('.status-cell__text-span').innerHTML = "test";
        }
        else if(flatsFloor.classList.contains('burgain')){
            flatsFloor.querySelector('.status-cell__text-span').innerHTML = "Акция";
        }
    })
}

document.querySelector('.floor-plan') ? installFloor() : null;