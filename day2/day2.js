/*
                DATA TYPES
    data tpleri 2 ye ayrılır.
    Primitive Data Type
    Non-pirimitive data types
    

    PRIMITIVE DATA TYPES
        -Numbers
        -Strings
        -Booleans
        -Null
        -Undifinded

        Primitive data tipleri dğerelerine göre karşılartırılır.
        Değer tanımlandıktan sonra değiştirilemez.mutable

        let word = "Javascript"
        word[0]= "Y"
        console.log(word) // Javascript

        Pirimitive data typeların değerleri atandıktan sonra değiştirilemez
*/

/* ÖRNEK
let num1= 3;
let num2 = 3;

console.log(num1 == num2);  //true

let javascript = "Javascript";
let python ="python";

console.log(javascript == python);   //false


let lightOn =true;
let lightOff = false;

console.log(lightOn==lightOff);   //false
*/


/*
NON-PRIMITIVE DATA TYPES
        -Objects
        -Functions
        -Arrays
    
    Non-primitive data tipleri atama yapıldıktan sonra değerleri değiştirilebilir.immutable

    ARRYS(DİZİLER)
    Diziler aynı yada farklı veri türlerini içerebilir. Primitive veya Non-primitive veri türlerini içerisnde barındırabilir.
        let varibles = ["faruk",27,true,null,undifended,[]];
    Dizi değerleri indexlerine göre referanslanır. Dizideki ilk eleman 0. index ile başlar.


        ÖRNEK
let nums = [1,2,3,4]

console.log(nums); // [1,2,3,4]

console.log("--------------------")

nums[1]="faruk";

console.log(nums) // [1,'faruk',3,4]

Non-primitive data typeların değerleri atandıktan sonra değiştirlebilir

Non-pirimitive data typelarda primitive data type lar gibi karsılastırma yapılamaz. Çünkü tutukları referansar farklıdır.

ÖRNEK 

let nums1 = [1,2,3];
let nums2 = [1,2,3];

console.log(nums1==nums2)  // false


İki non primitive ancak tek bir refaransı temel aldıgında bibirine eşit olur.

let nums1 = [1,2,3];
let nums2 = nums1; // nums1 ve nums2 aynı referansı işaret ettiği için eşit olurlar.

console.log(nums1==nums2)  // true


*/

/*
NUMBERS

Tam sayı ve ondalıklı sayıları tutar. tüm bu artimetik işlemleri tutan veri tipidir.

let age = 27;
const gravity = 9.81;let 
let mass = 87;


Math Object
    Sayılar ile çalışmak için method saglar.
    Matematiksel Sabitler
        Math.PI: Pi sabiti (3.14159...).
        Math.E: Euler sabiti (2.71828...).
        Math.SQRT2: 2'nin karekökü.
        Math.SQRT1_2: 1/2'nin karekökü.

    Matematiksel Fonksiyonlar

        *Temel Fonksiyonlar
            Math.abs(x): Mutlak değerini alır.
            Math.round(x): En yakın tam sayıya yuvarlar.
            Math.ceil(x): Üste yuvarlar.
            Math.floor(x): Alta yuvarlar.
            Math.max(x1, x2, ...): Verilen değerler arasındaki en büyüğünü döndürür.
            Math.min(x1, x2, ...): Verilen değerler arasındaki en küçüğünü döndürür.

        *Üs ve Kök
            Math.pow(x, y): x'in y üssünü alır.
            Math.sqrt(x): Karekökünü alır.
            Math.cbrt(x): Küpkökünü alır.
            Math.pow(x, 1/3) ile aynıdır.

        *Trigonometrik Fonksiyonlar
            Math.sin(x): x'in sinüsünü alır (radyan cinsinden).
            Math.cos(x): x'in kosinüsünü alır (radyan cinsinden).
            Math.tan(x): x'in tanjantını alır (radyan cinsinden).
            Math.atan2(y, x): x ve y koordinatlarına göre ters tanjantıyı döndürür.

        *Rastgele Sayılar
            Math.random(): 0 ile 1 arasında rastgele bir sayı döndürür. //0.234624242
            Math.floor(Math.random() * max): 0 ile max arasında rastgele bir tamsayı döndürür.

        console.Log(Math) math objesi içerisndeki tüm methodları ve sabitleri listeler
*/

/*
STRINGS

Bir string ifade tanımlaması için bir değişken adı, atama operatörü, ve single '', double "" veya back-tick `` karaktere ihitiyaç vardır.

String Concatenation (string birleştirme)
 let name = "faruk";
 let surname = "karaaslan";
let fullName = name +' ' + surname

Artı ile birleştirme işlemi eski bir yöntemdir ve hataya açıktır.

\ karakteri ile uzun stringler alt satırdan devam etmesini saglayabiliriz.

let paragraph= "faruk\
karaaslan
"



TEMPLATE STRINGS

template stringler back-tick arasında yazılır.``

Back-ticler arasına değişkenlerde yazıla bilir. bunun için back-ticler arasına ${} ifadesi arasına değişkenler yazılır.

let name = "faruk";
let surname = "karaaslan";
let fullName = `${name} ${surname}`;


STRİNG METHODS
    charAt(index): Belirtilen dizindeki karakteri döndürür.
    charCodeAt(index): Belirtilen dizindeki karakterin Unicode değerini döndürür.
    concat(string1, string2, ...): Bir veya daha fazla stringi mevcut stringe ekler ve yeni stringi döndürür.
    indexOf(searchValue, startIndex): Belirtilen değerin string içindeki ilk indeksini döndürür.
    lastIndexOf(searchValue, startIndex): Belirtilen değerin string içindeki son indeksini döndürür.
    toUpperCase(): Stringin tüm karakterlerini büyük harfe dönüştürür.
    toLowerCase(): Stringin tüm karakterlerini küçük harfe dönüştürür.
    slice(startIndex, endIndex): Belirtilen indeks aralığında bir alt dizesini döndürür.
    substring(startIndex, endIndex): Belirtilen indeks aralığında bir alt dizesini döndürür.
    split(separator, limit): Belirtilen ayırıcıya göre bir stringi parçalar ve bir diziye dönüştürür.
    trim(): Bir stringin başındaki ve sonundaki boşlukları kaldırır.
    startsWith(searchString, position): Stringin belirli bir dizinde belirtilen string ile başlayıp başlamadığını kontrol eder.
    endsWith(searchString, position): Stringin belirli bir dizinde belirtilen string ile bittiğini kontrol eder.
    includes(searchString, position): Stringin belirli bir dizinde belirtilen stringi içerip içermediğini kontrol eder.
    match(regexp): Stringin bir RegExp ile eşleşip eşleşmediğini kontrol eder.
    search(regexp): String içinde bir RegExp arar ve eşleşmenin indeksini döndürür.
    replace(regexp, newSubstr|function): Belirli bir deseni arar ve bunu yeni bir dizeyle değiştirir.
    repeat(count): Stringi belirtilen sayıda tekrarlar.
    padStart(targetLength, padString): Belirli bir uzunluğa ulaşmak için başına karakter ekler.
    padEnd(targetLength, padString): Belirli bir uzunluğa ulaşmak için sonuna karakter ekler.
    localeCompare(compareString): Stringi belirtilen bir başka string ile karşılaştırır.
    valueOf(): String nesnesinin ilgili ilkel değerini döndürür.
    toString(): String nesnesinin ilgili string temsilini döndürür.


CHECK DATA TYPES AND CASTİNG(data tipi değiştirme)

    Check Data Type 
        console.log("Faruk") //string
    
    Changind Data Type
        String(): Bir değeri string türüne dönüştürür.
        var num = 123;
        var str = String(num); // "123"

        Number(): Bir değeri sayı türüne dönüştürür.
        var str = "123";
        var num = Number(str); // 123

        parseInt(): Bir stringi tam sayıya dönüştürür.
        var str = "123";
        var num = parseInt(str); // 123

        parseFloat(): Bir stringi ondalıklı sayıya dönüştürür.
        var str = "3.14";
        var num = parseFloat(str); // 3.14

        Boolean(): Bir değeri boolean türüne dönüştürür.
        var num = 123;
        var bool = Boolean(num); // true

        toString(): Bir nesneyi stringe dönüştürür.
        var num = 123;
        var str = num.toString(); // "123"

        valueOf(): Bir nesnenin ilgili ilkel değerini döndürür.
        var num = new Number(123);
        var value = num.valueOf(); // 123
        
        JSON.stringify(): Bir nesneyi JSON formatına dönüştürür.
        var obj = { name: "John", age: 30 };
        var jsonStr = JSON.stringify(obj); // '{"name":"John","age":30}'
        
        JSON.parse(): Bir JSON formatındaki stringi JavaScript nesnesine dönüştürür.
        var jsonStr = '{"name":"John","age":30}';
        var obj = JSON.parse(jsonStr); // { name: "John", age: 30 }


*/

