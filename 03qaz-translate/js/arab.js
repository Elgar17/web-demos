var syMap = {
    ا: ["а", "a"],
    ءا: ["ә", "á"],
    ب: ["б", "b"],
    ۆ: ["в", "v"],
    گ: ["г", "g"],
    ع: ["ғ", "ǵ"],
    د: ["д", "d"],
    ە: ["е", "e"],
    ج: ["ж", "j"],
    ز: ["з", "z"],
    ي: ["и", "i"],
    ي: ["й", "i"],
    ك: ["к", "k"],
    ق: ["қ", "q"],
    ل: ["л", "l"],
    م: ["м", "m"],
    ن: ["н", "n"],
    ڭ: ["ң", "ń"],
    و: ["о", "o"],
    ءو: ["ө", "ó"],
    پ: ["п", "p"],
    ر: ["р", "r"],
    س: ["с", "s"],
    ت: ["т", "t"],
    ۋ: ["у", "ý"],
    ۇ: ["ұ", "u"],
    ءۇ: ["ү", "ú"],
    ف: ["ф", "f"],
    ح: ["х", "h"],
    ھ: ["һ", "h"],
    چ: ["ц", "ch"],
    ش: ["ш", "sh"],
    شش: ["щ", "shsh"],
    // ъ: ["", ""],
    ы: ["ى", "y"],
    ءى: ["і", "ı"],
    // ь: ["", ""],
    يە: ["э", "ie"],
    يۋ: ["ю", "iý"],
    يا: ["я", "ia"],
    يو: ["ё", "io"],
    تس: ["ч", "ts"],
}

var str = "ەلعار "

function arabTrans(srt, isSy) {
    var num = 0;
    isSy == true ? '' : num = 1;
    var newStr = ''
    for (var i = 0; i < str.length;) {
        if (syMap[str[i]] == undefined) {
            newStr += str[i];
            i++;
            continue;
        }
        // console.log(str.substring(i, 1))
        if (str[i + 1] && syMap[str.substring(i, 2)] && syMap[str.substring(i, 2)][num]) { //i + 1 < str.length && 
            newStr += syMap[str.substring(i, i + 2)][num]
            i += 2;
        } else {
            newStr += syMap[str[i]][num]
            i += 1;
            // console.log(str.substring(i, 1), i)
        }
    }
    return newStr;
}

console.log(arabTrans(str, 1))