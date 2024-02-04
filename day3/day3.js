/*
BOOLEANS

    Booleans veri türleri geriye true yada false değeri döndürür.

    Truthy Values
        Tüm sayılar(negatif ve pozitif) sıfır hariç
        Tüm stringler('' boş strig hariç)
        Booleanın kendisi

    Falsly Values
        0
        0n
        null
        undifinded
        NaN
        False boolean
        "" '' `` boş stringler

Asingments Operatörs (Atama Operatörleri)
    =: Bir değişkene bir değer atar.
    +=: Bir değişkenin değerini artırır ve atar. (x = x + y)
    -=: Bir değişkenin değerini azaltır ve atar. (x = x - y)
    *=: Bir değişkenin değerini çarpar ve atar. (x = x * y)
    /=: Bir değişkenin değerini böler ve atar. (x = x / y)
    %=: Bir değişkenin değerini modüler ve atar. (x = x % y)
    **=: Bir değişkenin üssünü alır ve atar. (x = x ** y)
    <<=: Sol kaydırma ve atama işlemi yapar.
    >>=: Sağ kaydırma ve atama işlemi yapar.
    >>>=: Sağ kaydırma ve atama işlemi yapar (işaret bitini dikkate almadan).
    &=: 'AND' işlemi yapar ve atar. (x = x & y)
    ^=: 'XOR' işlemi yapar ve atar. (x = x ^ y)
    |=: 'OR' işlemi yapar ve atar. (x = x | y)

Comparatios Operators(Karşılaştırma Operatörleri)
    ==: Eşitse true döndürür.
    ===: Değer ve tür eşitse true döndürür.
    !=: Eşit değilse true döndürür.
    !==: Değer veya tür eşit değilse true döndürür.
    >: Büyüktürse true döndürür.
    <: Küçüktürse true döndürür.
    >=: Büyük eşitse true döndürür.

Logical Operator(Mantıksal Opertorler)
    && (Ve Operatörü): Her iki ifadenin de doğru olması durumunda true döndürür.

    || (Veya Operatörü): En az bir ifadenin doğru olması durumunda true döndürür.

    ! (Değil Operatörü): Bir ifadenin tersini alır.
Incerement-Decerement Operator(Artırmave Azaltma Operatörü)
    ++ (Artırma Operatörü): Değişkenin değerini 1 artırır.

    Ön-ekleme kullanımı: Değişkenin değeri artırıldıktan sonra kullanılır.
    var x = 5;
    var y = ++x;
    // Şimdi x = 6, y = 6

    Son-ekleme kullanımı: Değişkenin değeri işleme girip kullanıldıktan sonra artırılır.
    var a = 10;
    var b = a++;
    // Şimdi a = 11, b = 10

    -- (Azaltma Operatörü): Değişkenin değerini 1 azaltır.
    Ön-azaltma kullanımı: Değişkenin değeri azaltıldıktan sonra kullanılır.
    var m = 7;
    var n = --m;
    // Şimdi m = 6, n = 6

    Son-azaltma kullanımı: Değişkenin değeri işleme girip kullanıldıktan sonra azaltılır.
    var p = 12;
    var q = p--;
    // Şimdi p = 11, q = 12
Ternary Opertor(3 lü karşılaştırma)

    Ternary operatörü (veya üçlü operatör), JavaScript ve birçok programlama dilinde bulunan bir koşullu ifade yapısıdır.   Genellikle kısa ve basit koşullu ifadeler için tercih edilir. Ternary operatörü, üç parçadan oluşur: bir koşul, bir ifade     (true durumunda döndürülecek değer) ve bir alternatif ifade (false durumunda döndürülecek değer).

    Ternary operatörünün genel sözdizimi şu şekildedir:
    koşul ? ifade1 : ifade2

    koşul: Bir mantıksal ifade veya bir değer. Bu ifade true veya false sonuçlanabilir.
    ifade1: Koşul true ise döndürülecek değer veya ifade.
    ifade2: Koşul false ise döndürülecek değer veya ifade.
    Örnek olarak, bir sayının pozitif mi negatif mi olduğunu kontrol eden bir ternary operatör kullanımı:

    var sayi = -5;
    var durum = (sayi >= 0) ? 'Pozitif' : 'Negatif';
    console.log(durum); // 'Negatif'

Window Methods

    JavaScript'te window objesi, tarayıcı ortamında tarayıcı penceresini temsil eden global bir nesnedir. Tarayıcı ortamında       çalışan JavaScript kodu için, window objesi en üst düzey global nesnedir ve tarayıcı penceresini temsil eder.
    
    window objesi, tarayıcı penceresinin özelliklerine ve metodlarına erişim sağlar. İşte window objesinin bazı yaygın kullanılan      metodları:
    
    alert(): Kullanıcıya bir ileti kutusu gösterir.
    window.alert("Merhaba!");

    confirm(): Kullanıcıya bir onay ileti kutusu gösterir ve Kullanıcı 'OK' veya 'Cancel' seçeneklerinden birini seçebilir.
    var result = window.confirm("Emin misiniz?");

    prompt(): Kullanıcıdan bir değer girmesini ister.
    var name = window.prompt("Adınız nedir?", "John Doe");

    open(): Yeni bir tarayıcı penceresi açar.
    var newWindow = window.open("https://www.example.com", "_blank");

    close(): Mevcut tarayıcı penceresini kapatır. (Yalnızca yeni pencereleri açan pencereleri kapatır.)
    window.close();

    setTimeout(): Belirli bir işlevi veya kod parçasını belirli bir zaman aralığından sonra çalıştırır.
    setTimeout(function() {
        console.log("Merhaba dünya!");
    }, 2000); // 2 saniye sonra çalışır

    setInterval(): Belirli bir işlevi veya kod parçasını belirli aralıklarla tekrar tekrar çalıştırır.
    setInterval(function() {
        console.log("Zaman geçiyor...");
    }, 1000); // Her saniye çalışır


Date Object
    getDate(): Ayın kaçıncı günü olduğunu döndürür (1-31 arası).
    var date = new Date();
    var dayOfMonth = date.getDate(); // Örneğin: 15

    getDay(): Haftanın gününü döndürür (0'dan Pazar, 6'ya Cumartesi).
    var date = new Date();
    var dayOfWeek = date.getDay(); // Örneğin: 3 (Çarşamba)

    getMonth(): Ayı sıfırdan başlayarak (0-11) döndürür.
    var date = new Date();
    var month = date.getMonth(); // Örneğin: 6 (Temmuz)

    getFullYear(): Yılı dört haneli olarak döndürür.
    var date = new Date();
    var year = date.getFullYear(); // Örneğin: 2023

    getHours(): Saati döndürür (0-23 arası).
    var date = new Date();
    var hours = date.getHours(); // Örneğin: 14

    getMinutes(): Dakikayı döndürür (0-59 arası).
    var date = new Date();
    var minutes = date.getMinutes(); // Örneğin: 30

    getSeconds(): Saniyeyi döndürür (0-59 arası).
    var date = new Date();
    var seconds = date.getSeconds(); // Örneğin: 45

    getMilliseconds(): Milisaniyeyi döndürür (0-999 arası).
    var date = new Date();
    var milliseconds = date.getMilliseconds(); // Örneğin: 250

    getTime(): Zamanın UNIX zaman damgası olarak milisaniye cinsinden değerini döndürür.
    var date = new Date();
    var timestamp = date.getTime(); // Örneğin: 1646462425000

    getTimezoneOffset(): Yerel saat diliminin UTC'ye göre farkını dakika cinsinden döndürür.
    var date = new Date();
    var offset = date.getTimezoneOffset(); // Örneğin: -180 (Türkiye için UTC+3, fark -180 dakika)

    toDateString(): Tarihi insan tarafından okunabilir bir biçimde döndürür.
    var date = new Date();
    var dateString = date.toDateString(); // Örneğin: "Wed Jul 05 2023"

    toISOString(): Tarihi ISO 8601 biçimine dönüştürür.
    var date = new Date();
    var isoString = date.toISOString(); // Örneğin: "2023-07-05T14:30:45.250Z"
    
    toJSON(): Tarihi JSON biçimine dönüştürür.
    var date = new Date();
    var jsonString = date.toJSON(); // Örneğin: "2023-07-05T14:30:45.250Z"

    toLocaleDateString(): Yerelleştirilmiş tarih biçiminde tarihi döndürür.
    var date = new Date();
    var localeDateString = date.toLocaleDateString(); // Örneğin: "5.7.2023"

    toLocaleString(): Yerelleştirilmiş tarih ve saat biçiminde tarihi döndürür.
    var date = new Date();
    var localeString = date.toLocaleString(); // Örneğin: "5.7.2023 14:30:45"

    toLocaleTimeString(): Yerelleştirilmiş saat biçiminde tarihi döndürür.
    var date = new Date();
    var localeTimeString = date.toLocaleTimeString(); // Örneğin: "14:30:45"

    toString(): Tarihi bir dizeye dönüştürür.
    var date = new Date();
    var dateString = date.toString(); // Örneğin: "Wed Jul 05 2023 14:30:45 GMT+0300 (GMT+03:00)"

    toTimeString(): Saati insan tarafından okunabilir bir biçimde döndürür.
    var date = new Date();
    var timeString = date.toTimeString(); // Örneğin: "14:30:45 GMT+0300 (GMT+03:00)"

    toUTCString(): Tarihi UTC biçiminde döndürür.
    var date = new Date();
    var utcString = date.toUTCString(); // Örneğin: "Wed, 05 Jul 2023 11:30:45 GMT"

    valueOf(): Belirtilen tarihin zaman damgasını döndürür.
    var date = new Date();
    var timestamp = date.valueOf(); // Milisaniye cinsinden zaman damgası

*/