module.exports = function toReadable(number) {
    let arrOfNumber = String(number).split("");
    let readable = "";
    let isOne = false;
    let isZero = false;
    numStr = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
    };
    let tentoStr = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };
    if (number <= 20) {
        readable = readable + numStr[number];
    }
    if (20 < number && number < 100) {
        arrOfNumber[1] == 0
            ? (readable = tentoStr[arrOfNumber[0]])
            : (readable =
                  tentoStr[arrOfNumber[0]] + " " + numStr[arrOfNumber[1]]);
    }
    if (99 < number) {
        for (let i = 0; i < arrOfNumber.length; i++) {
            if (i == 0) {
                readable = numStr[arrOfNumber[i]] + " hundred";
            } else if (i == 1) {
                switch (arrOfNumber[i]) {
                    case "0":
                        isZero = true;
                        arrOfNumber[2] == 0
                            ? readable
                            : (readable =
                                  readable + " " + numStr[arrOfNumber[i + 1]]);
                        break;
                    case "1":
                        isOne = true;
                        readable;
                        break;
                    default:
                        readable = readable + " " + tentoStr[arrOfNumber[i]];
                        break;
                }
            } else if (i == 2) {
                if (isOne == true) {
                    readable =
                        readable + " " + numStr[Number(arrOfNumber[i]) + 10];
                } else if (isZero == true) {
                    readable;
                } else {
                    arrOfNumber[i] != 0 && isOne !== true
                        ? (readable = readable + " " + numStr[arrOfNumber[i]])
                        : readable;
                }
            }
        }
    }

    return readable;
};
