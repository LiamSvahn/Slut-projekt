'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let X = 4;
console.log("hello world", X);
//här hämtar vi in en hell random url
const randUrl = 'http://www.boredapi.com/api/activity/';
// här är url'en för att du ska kunna söka på typer 
const serchUrl = 'http://www.boredapi.com/api/activity?type=';
//antal delltagare i sysslan
const antalUrl = 'http://www.boredapi.com/api/activity?participants=';
const randomBtn = document.querySelector('#random-btn');
const deltagarebtn = document.querySelector('#deltagare');
const randSysla = document.querySelector('#syslla-Text');
const getSelec = document.querySelector('#select-categories');
const creatOption = document.createElement('option');
const getbuton = document.querySelector('#serch-button');
const getSerch = document.querySelector('#serch-input');
const getAside = document.querySelector('aside');
function randSyssla() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respons = yield fetch(randUrl);
            const data = yield respons.json();
            randSysla.textContent = data['activity'];
            console.log(data.activity);
        }
        catch (error) {
            console.log(error);
        }
    });
}
randomBtn.addEventListener('click', myfunction);
function myfunction() {
    randSyssla();
}
function addOption() {
    for (let i = 1; i < 5; i++) {
        const creatOption = document.createElement('option');
        creatOption.setAttribute('id', 'option-id');
        creatOption.innerText = i.toString();
        getSelec.append(creatOption);
    }
}
addOption();
function participantsActivity() {
    return __awaiter(this, void 0, void 0, function* () {
        const newUrl = antalUrl + getSelec.options[getSelec.selectedIndex].value;
        const parFech = yield fetch(newUrl);
        const antaldata = yield parFech.json();
        randSysla.textContent = antaldata['activity'];
        randSysla.append(randSysla);
        console.log(antaldata['activity']);
    });
}
deltagarebtn.addEventListener('click', deltagarefunc);
function deltagarefunc() {
    participantsActivity();
}
function serchFunc() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const costomUrl = serchUrl + getSerch.value;
            const newUrl = yield fetch(costomUrl);
            const serchData = yield newUrl.json();
            randSysla.textContent = serchData['activity'];
            randSysla.append(randSysla);
            console.log(serchData['activity']);
        }
        catch (error) {
            console.log(error);
        }
    });
}
getbuton.addEventListener('click', SerchFuction);
function SerchFuction() {
    serchFunc();
}
;
function asideFunction() {
    if (getAside.style.height === '50px') {
        getAside.style.height = "100vh";
        getAside.style.width = "40vw";
    }
    else {
        getAside.style.height = "50px";
        getAside.style.width = "50px";
    }
}
getAside.addEventListener('click', asideFunction);
