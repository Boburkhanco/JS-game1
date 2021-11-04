
var game = prompt("Keling, 1ta o'yin o'ynaymiz,rozimisiz? ");

if (game == "ha" ) {
    var okay = prompt("Berilgan topshiriqni bajarib bo'lgach  ok  deb yozing, ok?")
    if (okay == "ok"){
        var number = prompt("1ta son o'ylang.");
        if (number == "ok"){
            var numberByTwo = prompt("O'ylagan soningizni 2ga ko'paytiring.");
            if (numberByTwo == "ok"){
                var numberAddTen = prompt("Chiqqan natijaga 10 sonini qo'shing.");
                if (numberAddTen == "ok"){
                    var numberDivTwo = prompt("Yig'indini esa 2ga bo'ling.");
                    if (numberDivTwo == "ok"){
                        var numberSubtractOne = prompt("Chiqqan javobdan 1-chi o'ylagan soningizni ayiring.");
                        if (numberAddTen == "ok"){
                            var result = prompt("Va natija 5, to'g'rimi?");
                            if (result == "ha") {
                                alert("Bu shunchaki bir trick edi. Sog' bo'ling! Byee!")
                            } else if ("yoq") {
                                alert("Ehtimol hisoblashda adashgandirsiz, qayta harakat qilib ko'ring!")
                            };
                        } else {
                            alert("ok deyish kerak hisoblab bo'lib, qayta harakat qiling.")
                        }
                    } else {
                        alert("ok deyish kerak hisoblab bo'lib, qayta harakat qiling.")
                    }
                } else {
                    alert("ok deyish kerak hisoblab bo'lib, qayta harakat qiling.")
                }
            } else{
                alert("ok deyish kerak hisoblab bo'lib, qayta harakat qiling.")
            }
        } else {
            alert("ok deyish kerak hisoblab bo'lib, qayta harakat qiling.")
        }
    } else {
        alert("ok deyish kerak hisoblab bo'lib, qayta harakat qiling.")
    }
} else {
    alert("Ne unda boshimmi aylantirvossize?")
}