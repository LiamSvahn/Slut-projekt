"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const randUrl = 'http://www.boredapi.com/api/activity/';
const serchUrl = 'http://www.boredapi.com/api/activity?type=';
const antalUrl = 'http://www.boredapi.com/api/activity?participants=';
const randomBtn = document.querySelector('#random-btn');
const deltagarebtn = document.querySelector('#deltagare');
const randSysla = document.querySelector('#syslla-Text');
const getMainSection = document.querySelector('#show-text');
const getMainButton = document.querySelector('#main-add');
const getSelec = document.querySelector('#select-categories');
const creatOption = document.createElement('option');
const getbuton = document.querySelector('#serch-button');
const getSerch = document.querySelector('#serch-input');
const getAside = document.querySelector('aside');
const getSection = document.querySelector('#hide-Section');
const getNav = document.querySelector('#header-section');
const getIcon = document.querySelector('#nav-icon');
const arraysysslor = [];
function randSyssla() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respons = yield fetch(randUrl);
            const data = yield respons.json();
            randSysla.textContent = data['activity'];
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
        getSection.style.display = "block";
        getIcon.innerHTML = "&#8594;";
    }
    else {
        getAside.style.height = "50px";
        getAside.style.width = "50px";
        getSection.style.display = "none";
        getIcon.innerHTML = "&#10003;";
    }
}
getNav.addEventListener('click', asideFunction);
getMainButton.addEventListener('click', () => {
    arraysysslor.push(randSysla.innerText);
    console.log(arraysysslor);
    document.querySelectorAll('#p-array').forEach(p => p.remove());
    for (let i = 0; i < arraysysslor.length; i++) {
        const addP = document.createElement('p');
        addP.setAttribute('id', 'p-array');
        addP.innerText = arraysysslor[i];
        getSection.append(addP);
    }
});
