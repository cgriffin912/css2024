
/*var a = document.querySelector(`a`)
var aside = document.querySelector(`aside`)

a.addEventListener(`click` , e =>{
    e.preventDefault(); 
    aside.classList.toggle(`close`)})

/*
//reference to the button that opens and closes the tray
var trayButton = document.querySelector(`aside button:first-child`)

//opens and closes the tray when the button is clicked
trayButton.addEventListener(`click`, toggle)
function toggle(e)
{
   document.querySelector(`.tray`).classList.toggle(`hide`)
}

//Tab buttons are stored in an array
var buttons = Array.from(document.querySelectorAll(`nav button`))

//Adds event listeners to all buttons in the array
for(let i=0; i<buttons.length; i++)
{
   buttons[i].addEventListener(`click`, butts)
}

//removes the active class from all buttons and adds it to the one that was clicked
//Adds tab name to the breadcrumbs
function butts(e)
{
    console.log(e)
    for(let i=0; i<buttons.length; i++)
    {
        buttons[i].classList.remove(`active`);
    }
    e.target.classList.add(`active`)
    document.querySelector(`#breadcrumbs`).innerHTML= `<a href="#">${e.target.innerText}</a>`
}