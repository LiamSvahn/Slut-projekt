'use strict'


let X:number = 4;
console.log("hello world", X)

//här hämtar vi in en hell random url
const randUrl = 'http://www.boredapi.com/api/activity/';

// här är url'en för att du ska kunna söka på typer 
const typesUrl = 'http://www.boredapi.com/api/activity?type=';

//antal delltagare i sysslan
const antalUrl = 'http://www.boredapi.com/api/activity?participants=';


const randomBtn = document.querySelector('#random-btn') as HTMLSelectElement;

const randSysla = document.querySelector('#syslla-Text') as HTMLElement;


async function randSyssla() {

    const respons = await fetch(randUrl)
    const data = await respons.json();

    randSysla.textContent = data['activity'];

    console.log(data.activity)
}

randomBtn.addEventListener('click', myfunction)

function myfunction(){
    randSyssla();
}



