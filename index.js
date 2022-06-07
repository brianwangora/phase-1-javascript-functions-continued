function saturdayFun (activity) {
    activity = (typeof activity !== 'undefined') ? activity : "roller-skate"
    return `This Saturday, I want to ${activity}!`
}

// define function using a function expression.
// If nothing is passed in, default to "go to the office"
const mondayWork = function (activity) {
    activity = (typeof activity !== 'undefined') ? activity : "go to the office"
    return `This Monday, I will ${activity}.`
}
function wrapAdjective (flair) {
    flair = (typeof flair !== 'undefined') ? flair : "*"
    return function(adjective){
        adjective = (typeof adjective !== 'undefined') ? adjective : "special"
        return `You are ${flair}${adjective}${flair}!`
    }
} 