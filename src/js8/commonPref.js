function commonPref(strs) {
    if (strs.length < 2) return "Мало элементов в массиве";

    const findPref = (str1, str2) => {
        let i = 0;
        for (i = 0; i < str1.length && i < str2.length; i++) {
            if (str1[str1.length - 1 - i] !== str2[str2.length - 1 - i]) break;
        }
        return str1.slice(str1.length - i);
    };

    let pref = strs[0];
    for (let i = 1; i < strs.length; i++) {
        pref = findPref(pref, strs[i]);
        if (pref.length < 2) return "";
    }

    return pref;
}

const strs1 = ["цветок", "поток", "хлопок"];
console.log(commonPref(strs1)); // "ок"

const strs2 = ["собака", "гоночная машина", "машина"];
console.log(commonPref(strs2)); // ""

const strs3 = ["слово"];
console.log(commonPref(strs3)); // ""