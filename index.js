const strF = {}

/**
 * A Format string with object / array / Map
 * @param {string} str Your string
 * @param {object} obj Object with property as the key 
 * @return {string} String after replace with property name in obj
 */
strF.format = (str, obj) => {
    let regex = /\{([^}]+)\}/g;
    let match = str.match(regex);
    let newstr = str;
    if(match){
        match.forEach(element => {
            let idx = element.replace("{","").replace("}","");
            idx = idx.split('.');
            if(idx.length > 1){
                let index = "obj";
                for(let i in idx){
                    index += `[idx[${i}]]`;
                }
                newstr = newstr.replace(element, eval(index));
            }
            if(idx in obj){
                newstr = newstr.replace(element, obj[idx]);
            } 
        });
    }  
    return newstr;
}

/**
 * A Python 3 equivalent str.format() to Format string with array 
 * @param {string} str Your string
 * @param {array} obj Object with property as the key 
 * @return {string} String after replace with property name in obj
 */
strF.pformat = (str, arr) => {
    let regex = /\{\}+/g;
    let match = str.match(regex);
    let newstr = str;
    if(match){
        var i = 0;
        match.forEach(element => {
            console.log(element);
            if(i in arr){
                newstr = newstr.replace("{}",arr[i]);
                i++;
            }
        });
    }  
    return newstr;
}
module.exports = strF;