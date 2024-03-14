const flatArray = [{
    id: 0,
    house: '1',
    floor: '2',
    roomsAmount: '3',
    square: '82m²',
    priceForSquare: '643$',
    price: '52 918$',
    flatNumber: 1,
    status: 'burgain',
}, {
    id: 1,
    house: '1',
    floor: '2',
    roomsAmount: '2',
    square: '60m²',
    priceForSquare: '1233$',
    price: '73 980$',
    flatNumber: 2,
    status: 'sold',
}, {
    id: 2,
    house: '1',
    floor: '2',
    roomsAmount: '2',
    square: '61m²',
    priceForSquare: '1233$',
    price: '75 000$',
    flatNumber: 3,
    status: 'burgain',
}, {
    id: 3,
    house: '1',
    floor: '2',
    roomsAmount: '3',
    square: '82m²',
    priceForSquare: '453$',
    price: '37 140$',
    flatNumber: 4,
    status: 'sold',
}, {
    id: 4,
    house: '1',
    floor: '2',
    roomsAmount: '3',
    square: '80m²',
    priceForSquare: '976$',
    price: '78 080$',
    flatNumber: 5,
    status: 'free',
}, {
    id: 5,
    house: '1',
    floor: '2',
    roomsAmount: '3',
    square: '39m²',
    priceForSquare: '345$',
    price: '13 455$',
    flatNumber: 6,
    status: 'free',
}, {
    id: 6,
    house: '1',
    floor: '2',
    roomsAmount: '3',
    square: '42m²',
    priceForSquare: '623$',
    price: '26 166$',
    flatNumber: 7,
    status: 'free',
}, {
    id: 7,
    house: '1',
    floor: '2',
    roomsAmount: '3',
    square: '39m²',
    priceForSquare: '764$',
    price: '29 796$',
    flatNumber: 8,
    status: 'booked',
}, {
    id: 8,
    house: '1',
    floor: '2',
    roomsAmount: '3',
    square: '79m²',
    priceForSquare: '2145$',
    price: '169 455$',
    flatNumber: 9,
    status: 'booked',
}, ]

window.addEventListener('load', () => {
    const installFloor = () => {
        const flatsFloors = document.querySelectorAll('.flat');
        const flatInfo = document.querySelector('.floor-info');
        const removeActiveClass = () => {
            flatsFloors.forEach(active => {
                active.classList.remove('active');
            })
        }

        const initialValue = [{
            id: 9,
            house: '1',
            floor: '2',
            roomsAmount: '3',
            square: '53m²',
            priceForSquare: '755$',
            price: '40 050$',
            flatNumber: '10',
            status: 'booked',
        }]

        const renderInfo = (array) => {
            const flatInformation = array.map(item => {
                return (
                    `
                    <div class="info-item">
                        <div class="info-item__title">Номер будинку:</div>
                        <div>${item.house}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Поверх:</div>
                        <div>${item.floor}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">К-ст кімат:</div>
                        <div>${item.roomsAmount}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Площа:</div>
                        <div>${item.square}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Ціна за м²:</div>
                        <div>${item.priceForSquare}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Ціна:</div>
                        <div>${item.price}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Номер квартири:</div>
                        <div>${item.flatNumber}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-item__title">Статус квартири:</div>
                        <div>${item.status}</div>
                    </div>`
                )
            }).join('')
            flatInfo.innerHTML = flatInformation;
        }
        renderInfo(initialValue);
        flatsFloors.forEach(flatFloor => {
            if (flatFloor.classList.contains('booked')) {
                flatFloor.querySelector('.status-cell__text-span').innerHTML = "Бронь";
            } else if (flatFloor.classList.contains('burgain')) {
                flatFloor.querySelector('.status-cell__text-span').innerHTML = "Акция";
            } else if (flatFloor.classList.contains('sold')) {
                flatFloor.querySelector('.status-cell__text-span').innerHTML = "Продано";
            } else if (flatFloor.classList.contains('free')) {
                flatFloor.querySelector('.status-cell__text-span').innerHTML = "Свободно";
            }
            flatFloor.addEventListener('click', () => {
                removeActiveClass();
                flatFloor.classList.add('active');
                let thisFlat = flatFloor.getAttribute('data-number')
                let flatNumber = flatArray.filter(item => item.flatNumber === Number(thisFlat));
                console.table(initialValue, flatNumber)
                renderInfo(flatNumber);
            })
        })
    }
    document.querySelector('.floor-plan') ? installFloor() : null;
})