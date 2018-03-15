/**
 * inputs this function is resused to input data. 
 * @param {object} browser the Nightwatch object 
 * @param {string} selector for the field in question
 * @param {string} value to set the field too 
 */
let inputs = (browser, selector, value) => {
    browser
        .clearValue(selector)
        .setValue(selector , value)
        .verify.value(selector , value)
}


module.exports = { 
    inputs : inputs
}