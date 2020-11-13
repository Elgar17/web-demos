var syMap = {
    а: ["ا", "a"],
    ә: ["ءا", "á"],
    б: ["ب", "b"],
    в: ["ۆ", "v"],
    г: ["گ", "g"],
    ғ: ["ع", "ǵ"],
    д: ["د", "d"],
    е: ["ە", "e"],
    ж: ["ج", "j"],
    з: ["ز", "z"],
    и: ["ي", "i"],
    й: ["ي", "i"],
    к: ["ك", "k"],
    қ: ["ق", "q"],
    л: ["ل", "l"],
    м: ["م", "m"],
    н: ["ن", "n"],
    ң: ["ڭ", "ń"],
    о: ["و", "o"],
    ө: ["ءو", "ó"],
    п: ["پ", "p"],
    р: ["ر", "r"],
    с: ["س", "s"],
    т: ["ت", "t"],
    у: ["ۋ", "ý"],
    ұ: ["ۇ", "u"],
    ү: ["ءۇ", "ú"],
    ф: ["ف", "f"],
    х: ["ح", "h"],
    һ: ["ھ", "h"],
    ц: ["چ", "ch"],
    ш: ["ش", "sh"],
    щ: ["شش", "shsh"],
    ъ: ["", ""],
    ы: ["ى", "y"],
    і: ["ءى", "ı"],
    ь: ["", ""],
    э: ["يە", "ie"],
    ю: ["يۋ", "iý"],
    я: ["يا", "ia"],
    ё: ["يو", "io"],
    ч: ["تس", "ts"],
}

// var syStr = "күйдім"

// console.log(wordTran(syStr, 0))



function wordTran(str) {
    var newStr = '';

    for (var i = 0; i < str.length; i++) {
        if (syMap[str[i]] == undefined) {
            newStr += str[i];
            continue;
        }
        if (i === 0) {
            newStr += syMap[str[i]][0]
        } else {
            if (str[i] == 'ү') {
                newStr += 'ۇ';
            } else if (str[i] == 'і') {
                newStr += 'ى';
            } else if (str[i] == 'ө') {
                newStr += 'و';
            } else {
                newStr += syMap[str[i]][0]
            }
        }

    }
    return newStr
}

// 参数1： 转换的字符串
// 参数2： 如果为 true 为转化成 拉丁 否则转化成 阿拉伯

function syTranQaz(str, isLaten) {
    var isLa = 0;
    if (isLaten) {
        isLa = 1;
    }
    var qazStr = ""
    var len = str.length;
    for (var i = 0; i < len; i++) {
        if (syMap[str[i]] == undefined) {
            qazStr += str[i]
            continue;
        }
        qazStr += syMap[str[i]][isLa];
    }
    return qazStr;
}

export{
    wordTran,
    syTranQaz
}