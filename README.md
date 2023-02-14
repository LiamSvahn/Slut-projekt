# Slut-projekt
detta blir slut projektet för typescript/ajax och sass

hur man tar ner

För att tanka ner detta repot kan du ta di till den hära länken https://github.com/LiamSvahn/Slut-projekt och i din git bash skriv git clone [link] med länken fär repot. skriv sedan [pip install -r requirements.txt] i din consol. 


I detta projettet har jag två olika mappar för typescriptet samt sass. ska du kompilera Typescriptet räker det att du är i din över seende mapp i git bash och skriver [tsc] i tolken. Sass är lite anurlunda eftersom du i dethärafallet behöver var i din sass map i det hära fallet och kommer behövas skriva [sass main.sass main.css] vi behöver säga att vi ska 


mit slutprojet består utav 3 mappar min slut-project samt tsfile och sassfile. och mina sass och typescript mappar fins i en src map. de fillerna som finns inuti min slutproject map är package.json, package-lock.json, read.me, tsconfig.json och min index.html

package.json: syftet med den hära filen är att identifiera projectets metadata. och allat som projectet är berde av som de olika modulerna som används. Här i kan vi även se licensen samt veriationen utav tilläg som projectet kräver.

package-lock.json: syftet med en package-lock-json är att få alla som arbetar på project använder samma veriation utav de tillägen som finns för projectet.

tsconfig.json: filens syfte är att heltänkelt anpassa kompilatorns instälningar för att för det projetet du arbetar på. du kan göra saker som att beskriva din path när du ska använda kompilatorn veriationer, hur strict dit project ska vara, mm.

index.html: html coden som visas på sidan.

Tsfile: --> index.js index.ts

index.ts: här finns all Typescript kod som sedan ska kompileras til Javascript

sassfile --> main.sass, main.css, main.css.map, _cloorThemes.scss, _Fonts.scss, _sassPath.scss.

_cloorThemes.scss, _Fonts.scss: filerna innhåler variabler.

_sassPath.scss: i denna filen @importerar jag både _cloorThemes.scss, _Fonts.scss och det gör jag för att det ska bli enklare att kalla in variablerna på min main.scss(detta är good practise)

main.scss: är anropar jag alla mina variabler genom _path.scss filen genom att skriva [@use '../sassfile/sassPath' as *;] och likt vad vi gör i våran .ts fil så är det denna fil som ska kompileras.

main.css.map: med hjälp av den hära filen gör det möjligt att som jobbar mellan din scss fill och css fill. altså den källkoden och seden den genererande koden.  

jag använder mig utav bored api.

'http://www.boredapi.com/api/activity/';
'http://www.boredapi.com/api/activity?type=';
'http://www.boredapi.com/api/activity?participants=';


jag använder mig utav typescript samt scss och ajax i detta project. jag använder mig utav olika koncept som responsivitet, Api, backend samt frontend.de ramverk jag använder mig av är typescript och sass samt html. de bibliotek jag anveder mig utav är node.js

https://github.com/LiamSvahn

