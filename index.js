//? Console Log 
const cl=(...text)=>console.log(...text)
var areAlmostEqual = function(s1, s2) {
    if(s1===s2)return true
    s1obj={}
    s2obj={}
    for (let i = 0; i < s1.length; i++) {
        if(s1obj[s1[i]]){
            s1obj[s1[i]]+=1
        }else{
            s1obj[s1[i]]=1
        }
        if(s2obj[s2[i]]){
            s2obj[s2[i]]+=1
        }else{
            s2obj[s2[i]]=1
        }
    }
    for (const item of s1) {
        if(s1obj[item]!==s2obj[item])return false

    }
    diff=0
    for (let i = 0; i < s1.length; i++) {
        if(s1[i]!==s2[i])diff++

    }
    cl(diff)
    if(diff<=2 && s1.length>2){
        return true
    }
    else return false

    // return true
};

cl(areAlmostEqual('bank','knab'))