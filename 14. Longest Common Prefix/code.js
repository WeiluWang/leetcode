/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ans = strs[0];
    if(strs.length==0){ 
        return "";}
    for(var i = 1; i < strs.length ; i++){
        //console.log("k");
        for(var j = 0; j <ans.length; j++){
            //console.log(ans.length);
            //console.log("j");
            if(strs[i][j]==null){
                ans=ans.substring(0,j);
               //console.log("l");
                break;}
            else if(strs[i][j] != ans[j]){
                ans=ans.substring(0,j);
                //console.log("m");
                break;
            }
        }   
    }
    //console.log(ans);
    return ans;
    
};

//best solution
var longestCommonPrefix = function(strs) {
    
    if( !strs || !strs.length ) { return ''; }
    if( strs.length == 1 ) { return strs.find(() => true); }
    
    strs.sort(function(a,b) { return b.length - a.length });
    
    var longestString = strs[0];
    
    var lastPrefix = null;
    for( let currStr of strs ) {
            var prefix = '';
            for( let i = 0; i < longestString.length; i++ ) {
                if( currStr[i] == longestString[i] ) { prefix += (longestString[i]); }
                else if( i == 0 ) { break; }
            }
            if( prefix == '' ) {return '';}
            if( !lastPrefix ) { lastPrefix = prefix; }
            if( prefix.length < lastPrefix.length ) { lastPrefix = prefix; }
    }
    if( lastPrefix == null ) { lastPrefix = longestString; }
    return lastPrefix;
    
};