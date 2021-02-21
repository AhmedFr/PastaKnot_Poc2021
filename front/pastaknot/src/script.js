const loginButton = document.querySelector('.button1');
let clicked = false;

function onClick(e){
    clicked = !clicked;
    const sect = document.querySelector('section');
    if (clicked){
        sect.insertAdjacentHTML('afterend', <div></div>)
    }else{
        sect.removeChild('.loginwindow')
    }
}

loginButton.addEventListener('click', onClick);