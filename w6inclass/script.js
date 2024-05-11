var trayButton = document.querySelector(`aside button:first-child`)

trayButton.addEventListener(`click`, toggle) // naming the button toggle

function toggle(e) // e in parenthese calls the event listener
{
    document.querySelector(`.tray`).classList.toggle(`hide`)
}

var buttons = Array.from(document.querySelectorAll(`nav button`))

for(let i=0; i<buttons.length; i++)
{
    buttons[i].addEventListener(`click`, butts)
}

function butts(e)
{
    for(let i=0; i<buttons.length; i++)
    {
        buttons[i].style.backgroundColor=`#c2c2c2`; // making the color switch back after clicking new button
    }
    e.target.style.backgroundColor=`#161616`;
    document.querySelector(`#breadcrumbs`).innerHTML=`<a href="#">${e.target.innerText}</a>` // adding the tab names to the breadcrumbs line
}

