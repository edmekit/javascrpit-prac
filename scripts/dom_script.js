 function sub(btn) {
    const buttonElem = document.querySelector(btn);
    buttonElem.innerHTML = buttonElem.classList.toggle('is_sub') ? 'Subscribed' : 'Subscribe';
}


function toggl(btn) {
    document.querySelector('.btn1').classList.remove('is_sub');
    document.querySelector('.btn2').classList.remove('is_sub');
    document.querySelector('.btn3').classList.remove('is_sub');
    
    document.querySelector(btn).classList.add('is_sub');
}

function calc() {
    let cost = document.querySelector('.cost').value
    cost = Number(cost);

    if (cost < 0) {
        document.querySelector('.total').classList.add('red');
        document.querySelector('.total').innerHTML = `Error: Cost cannot be negative.`;
    } else if (cost < 40) {
        document.querySelector('.total').classList.remove('red');
        cost += 10;
        cost = cost.toFixed(2);
        document.querySelector('.total').innerHTML = `Total Cost: $${cost}`;
    } else {
        document.querySelector('.total').classList.remove('red');
        document.querySelector('.total').innerHTML = `Free Shipping.Total Cost: $${cost}`;
    }
}

function getName() {
    const name = document.querySelector('.name').value
    document.querySelector('.names').innerHTML = `Your name is, ${name}`
}
