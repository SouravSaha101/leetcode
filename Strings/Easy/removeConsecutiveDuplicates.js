// https://www.geeksforgeeks.org/remove-consecutive-duplicates-string/

// Check next char is the same as current char, if not, add it to the result.

function removeConsecutive(str){
    let len = str.length;
    let s = ""
    for(let i = 0; i<len -1; i++){
        if(str[i]!== str[i+1]){
            s += str[i]
        }
    }

    s += str[len-1]

    return s
}

console.log(removeConsecutive("geeksforgeeks"))
// 