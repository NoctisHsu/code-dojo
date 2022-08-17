/**
 * @param {string} s
 * @return {number}
 */
 const romanToInt = function(s) {
    const splitRoman = s.split('');
    const mapped = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const keys = Object.keys(mapped);
    let sum = 0;
    splitRoman.forEach(function(t, index){
        if(!mapped[t]) {
            throw new Error("char is invalid!");
        }
        const isMinusValue = keys.indexOf(t) < keys.indexOf(splitRoman[index+1]);
        sum += isMinusValue? -mapped[t]: mapped[t];
    });
    return sum;
};
console.log(romanToInt("III"));
console.log(romanToInt("IV"));
console.log(romanToInt("V"));
console.log(romanToInt("VI"));
console.log(romanToInt("MCMXCIV"));
console.log(romanToInt("LVIII"));
console.log(romanToInt("VI"));