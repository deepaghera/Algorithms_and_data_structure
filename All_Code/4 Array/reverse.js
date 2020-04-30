let str = "i am deep";


function reverseString(str) {

    if(!str || str.length < 2 || typeof str !== 'string'){
        return 'hmm that\'s not good';
    }

    let rvString = "";
    for(let i = str.length - 1;i >= 0 ; i--){
        rvString += str[i];
    }
    return rvString;
}

console.log(reverseString(str));