'use strict'


let X:number = 4;
console.log("hello world", X)

//här hämtar vi in en hell random url
const randUrl = 'http://www.boredapi.com/api/activity/';

// här är url'en för att du ska kunna söka på typer 
const serchUrl = 'http://www.boredapi.com/api/activity?type=';

//antal delltagare i sysslan
const antalUrl = 'http://www.boredapi.com/api/activity?participants=';


const randomBtn = document.querySelector('#random-btn') as HTMLSelectElement;

const deltagarebtn = document.querySelector('#deltagare') as HTMLSelectElement;

const randSysla = document.querySelector('#syslla-Text') as HTMLElement;

const getSelec = document.querySelector('#select-categories') as HTMLSelectElement;

const creatOption = document.createElement('option') as HTMLElement;

const getbuton = document.querySelector('#serch-button') as HTMLButtonElement;

const getSerch = document.querySelector('#serch-input') as HTMLInputElement;

const getAside = document.querySelector('aside') as HTMLElement;


async function randSyssla() {
    try {
        const respons = await fetch(randUrl)
        const data = await respons.json();
        randSysla.textContent = data['activity'];
        console.log(data.activity)
    } catch (error) {
        console.log(error)
    }
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

async function participantsActivity() {
    const newUrl:string = antalUrl + getSelec.options[getSelec.selectedIndex].value

    const parFech = await fetch(newUrl)
    const antaldata = await parFech.json()

    randSysla.textContent = antaldata['activity'];
    randSysla.append(randSysla);
    console.log(antaldata['activity'])

}deltagarebtn.addEventListener('click', deltagarefunc)

function deltagarefunc(){
    participantsActivity();
}

async function serchFunc(){
    try {
        const costomUrl:string = serchUrl + getSerch.value
        const newUrl = await fetch(costomUrl)
        const serchData = await newUrl.json();
        randSysla.textContent = serchData['activity'];
        randSysla.append(randSysla)
        console.log(serchData['activity']);   
    } catch (error) {
        console.log(error)
    }
}getbuton.addEventListener('click', SerchFuction)

function SerchFuction(){
    serchFunc();
};

function asideFunction(){
    if(getAside.style.height === '50px'){
        getAside.style.height = "100vh";
        getAside.style.width = "40vw";
    }
    else{
        getAside.style.height = "50px";
        getAside.style.width = "50px";
    }

}
getAside.addEventListener('click', asideFunction)
