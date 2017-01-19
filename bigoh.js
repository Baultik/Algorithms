/**
 * Created by baultik on 1/17/17.
 */
var array = [4,8,12,4,2,9,1,0,12,17,8,10];
var total = 0;
for (var i = 0; i < array.length; i++) {
    total += array[i];
}

var avg = total/array.length;

function dup(str) {
    var output = [];

    for (var i = 0; i < str.length; i++){
        if (output.indexOf(str[i]) < 0) {
            var count = 0;
            for (var j = 0; j < str.length; j++){
                if (str[i] === str[j]){
                    count++;
                }
            }
            if (count > 1) {
                output.push(str[i]);
            }
        }
    }

    return output;
}

console.log(dup("mississippi"));