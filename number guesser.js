/*random number generator
author atlas
date 28/7/21
*/

function generateRandom(min, max)
{
    var d = new Date()
    var n = d.getTime()
    var dif = max - min
    var num = (n%dif) + min
    return num    
}
console.log(generateRandom(0,100))
