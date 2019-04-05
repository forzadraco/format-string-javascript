const strF = {}

/**
 * AFormat string with object / array / Map
 * @param {string} str Your string
 * @param {string} obj Object with property as the key 
 * @return {number} String after replace with property name in obj
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
module.exports = strF;