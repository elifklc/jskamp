console.log("Merhaba Kodlama.io")

let dolarDun = 9.20 //backendden gelir bu değerler
//dolarDun = "Ankara"
let dolarBugun = 9.30

{
    let dolarDun = 9.10  //bu başka bir blok ve burası çalışır. bunu blok dışında tanımaz.
    // ama var ile kullansaydı tatsızlık. var global değişken gibi çalışıyor. let fav :)
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11 ->bunu yapamıyoruz. cıssss!

console.log(euroDun)
//error aldık, euroDun is readonly. const ile atadığın değere başka bir değer atayamazsın.

//array
//camelCasing
//PascalCasing
//let konutKredileri = [12, "Emlak Konut Kredisi", ["a","b","c"]]

let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi", "Özel Konut Kredileri"]
//react, library js kullanan gelişmiş library.
//let users = getUsersFromApi() //burası bana bir array verecek. [  ] diye başlıyor. JSON formatı

//console.log(konutKredileri)
console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) {
    console.log("<li>"+konutKredileri[i]+"</li>")
    
}
console.log("</ul>")  //HTML ürettik
