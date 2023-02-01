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

const getSelec = document.querySelector('#select-categories') as HTMLSelectElement;
const creatOption = document.createElement('option') as HTMLElement;



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

function addOption(){
    for (let i = 1; i < 5; i++) {
        const creatOption = document.createElement('option') as HTMLElement;

        creatOption.setAttribute('id','option-id')
        creatOption.innerText = i.toString()
        getSelec.append(creatOption)
    }
}

addOption();






