//här hämtar vi in en hell random url
const randUrl:string = 'http://www.boredapi.com/api/activity/';

// här är url'en för att du ska kunna söka på typer 
const serchUrl:string = 'http://www.boredapi.com/api/activity?type=';

//antal delltagare i sysslan
const antalUrl:string = 'http://www.boredapi.com/api/activity?participants=';


const randomBtn = document.querySelector('#random-btn') as HTMLSelectElement;

const deltagarebtn = document.querySelector('#deltagare') as HTMLSelectElement;

const randSysla = document.querySelector('#syslla-Text') as HTMLElement;

const getMainSection = document.querySelector('#show-text') as HTMLSelectElement;

const getMainButton = document.querySelector('#main-add') as HTMLButtonElement;

const getSelec = document.querySelector('#select-categories') as HTMLSelectElement;

const creatOption = document.createElement('option') as HTMLElement;

const getbuton = document.querySelector('#serch-button') as HTMLButtonElement;

const getSerch = document.querySelector('#serch-input') as HTMLInputElement;

const getAside = document.querySelector('aside') as HTMLElement;

const getSection = document.querySelector('#hide-Section') as HTMLSelectElement;

const getNav = document.querySelector('#header-section') as HTMLSelectElement;

const getIcon = document.querySelector('#nav-icon') as HTMLSelectElement;

const getaddbutton = document.querySelector('#main-add') as HTMLElement;


const arraysysslor: string[] = [];



async function randSyssla() {
    try {
        const respons = await fetch(randUrl)
        const data:{
            activity: string;
        } = await respons.json();

        randSysla.textContent = data['activity'];
    } catch (error) {
        console.log(error)
    }
}randomBtn.addEventListener('click', myfunction)

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
    const antaldata:{
        activity:string;
    } = await parFech.json()

    randSysla.textContent = antaldata['activity'];
}deltagarebtn.addEventListener('click', deltagarefunc)

function deltagarefunc(){
    participantsActivity();
}

async function serchFunc(){
    try {
        const costomUrl:string = serchUrl + getSerch.value
        const newUrl = await fetch(costomUrl)
        const serchData:{
            activity:string;
        } = await newUrl.json();

        console.log(costomUrl)
        randSysla.textContent = serchData['activity'];
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
        getSection.style.display = "block";
        getIcon.innerHTML = "&#8594;";
    }
    else{
        getAside.style.height = "50px";
        getAside.style.width = "50px";
        getSection.style.display = "none";
        getIcon.innerHTML = "&#10003;";
    }

}getNav.addEventListener('click', asideFunction)


getMainSection.addEventListener("mouseover", mousein);
getMainSection.addEventListener("mouseout", mouseout);

function mousein(){
    getaddbutton.style.display = "block";
}
function mouseout(){
    getaddbutton.style.display = "none";
}

getMainButton.addEventListener('click', () => {
    arraysysslor.push(randSysla.innerText)
    console.log(arraysysslor)
    document.querySelectorAll('#p-array').forEach(p => p.remove())
    for (let i = 0; i < arraysysslor.length; i++) {
        const addP = document.createElement('p') as HTMLElement;
        addP.setAttribute('id', 'p-array')
        addP.innerText = arraysysslor[i]
        getSection.append(addP)
        
    }
})


//
