module.exports = function reverse (n) {
    let newN = String(n);
    let numb = newN.split("").reverse();
    if(numb[0]=='0')
    {
        numb.splice(0, 1);
    }
    if((numb[numb.length -1]=='-')){
        numb.splice(numb.length-1, 1);
    }
    return numb.join("");

}
