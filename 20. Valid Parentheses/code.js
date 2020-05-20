/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s ==""){return true;}
let currentans = [];
    let ans = false;
    if(s.length%2 != 0){return false;}
for(var i = 0; i < s.length; i++){
    if(s[i]=="("){
        currentans.push("(");
    }else if(s[i]=="{"){
        currentans.push("{");
    }else if(s[i]=="["){
        currentans.push("[");
    }else if(s[i]==")"){
        if(currentans[currentans.length-1]=="("){
            currentans.pop();
        }else{return false;}
    }else if(s[i]=="}"){
        if(currentans[currentans.length-1]=="{"){
            currentans.pop();
        }else{return false;}
    }else if(s[i]=="]"){
        if(currentans[currentans.length-1]=="["){
            currentans.pop();
        }else{return false;}
    }
    
}
    if(currentans.length == 0){return true;}
    else{return false;}
};
//best code
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s === null || s.length <= 0) return true;
    var cArr = s.split('');
    var stack = [];
    for (var c of cArr) {
        if (c === '[') stack.push(']');
        else if (c === '{') stack.push('}');
        else if (c === '(') stack.push(')');
        else if (stack.length === 0 || c !== stack.pop()) return false;
    }
    if (stack.length === 0) return true;
    return false;
};