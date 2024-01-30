/* Data Types

console.log(typeof("test"));
console.log(typeof(55));
console.log(typeof(true));
console.log(typeof null);
console.log(typeof undefined);

*/

// VARIABLES
/* 
    Değişkenler hafızada yer tutar.
    Bir değişken tanımlandığında hafızada bu değişken için bir yer rezerve edilir.
    Nezamn ki bu değişken bir değer atadıgınızda değişkenin hafızadaki yeri değer ile değiştirilir.
    Bir değişken tanımlama için VAR LET CONST anahtar kelimeleri kullanılır.
    Değişkenler camel case kullanılarak tanımlanır. camelCase

    LET: Yeniden atanabilir.Hosting yoktur, yani tanımlandığı yerden önce kullanılamaz.Hosting yoktur, yani tanımlandığı yerden önce kullanılamaz
    VAR: Yeniden atanabilir. Hosting vardır, yani tanımlandığı yerden önce kullanılabilir. İlk değer ataması isteğe bağlıdır, atanmadığı durumda undefined olur.
    CONST:Yeniden atanamaz, değer sabittir.Hosting yoktur, yani tanımlandığı yerden önce kullanılamaz. İlk değer ataması zorunludur ve sonrasında değiştirilemez.

    -Değişken isimleri harf (a-z veya A-Z), alt çizgi (_) veya dolar işareti ($) ile başlamalıdır.
    -İsimler, harfler, rakamlar, alt çizgiler (_) veya dolar işaretleri ($) içerebilir.
    -Değişken isimleri büyük-küçük harfe duyarlıdır (case-sensitive). Yani age ile Age farklı değişkenlerdir.
    -Anahtar kelimeler (keywords) değişken isimlerinde kullanılamazlar. Örneğin, var, let, const, if, else, for, while, function, vb.


*/

let name = "faruk"
let surname="karaaslan"
let age = 27;
let isMarried = true;

console.log(`Ad =${name} Soyad =${surname} Yaş= ${age} Evlimi= ${isMarried}`)

/*
    AYNI let KEY WORDÜ İLE BİRDEN FAZLA DEĞİŞKEN TANIMLANABİLİR.

    let name = "faruk",
        surname="karaaslan",
        age = 27,
        isMarried = true
*/

