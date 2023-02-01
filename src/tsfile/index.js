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
const typesUrl = 'http://www.boredapi.com/api/activity?type=';
//antal delltagare i sysslan
const antalUrl = 'http://www.boredapi.com/api/activity?participants=';
const randomBtn = document.querySelector('#random-btn');
const randSysla = document.querySelector('#syslla-Text');
const getSelec = document.querySelector('#select-categories');
const creatOption = document.createElement('option');
function randSyssla() {
    return __awaiter(this, void 0, void 0, function* () {
        const respons = yield fetch(randUrl);
        const data = yield respons.json();
        randSysla.textContent = data['activity'];
        console.log(data.activity);
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
