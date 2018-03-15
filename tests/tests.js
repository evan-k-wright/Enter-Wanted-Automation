const data = require('../data/testData')
const functions = require('../data/functions')
const selectors = require('../data/selectors')
module.exports = {
    beforeEach : browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    },
    after : browser => {
        browser.end()
        
    },
    'Testing All Fields' : browser => {
        //Header, MKE, Originating Agency Identifier
            functions.inputs(browser, selectors.hdr, data.hdr)
            functions.inputs(browser, selectors.mke, data.mke)
            functions.inputs(browser, selectors.ori, data.ori)
        //Name, Sex, Race
            functions.inputs(browser, selectors.nam, data.nam)
            functions.inputs(browser, selectors.sex, data.sex)
            functions.inputs(browser, selectors.rac, data.rac)
        browser
        //Height, Weight, Hair
            .setValue('input[name="hgtInput"]' , data.hgt)
            .setValue('input[name="wgtInput"]' , data.wgt)
            .setValue('input[name="haiInput"]' , data.hai)
        //Offense, Date of Warrant/Violation
            .setValue('input[name="offInput"]' , data.off)
            .setValue('input[name="dowInput"]' , data.dow)
        //Drivers License, DL State, DL Expiration Date
            .setValue('input[name="olnInput"]' , data.oln)
            .setValue('input[name="olsInput"]' , data.ols)
            .setValue('input[name="olyInput"]' , data.oly)
        //License Plate, License State, License Year
            .setValue('input[name="licInput"]' , data.lic)
            .setValue('input[name="lisInput"]' , data.lis)
            .setValue('input[name="liyInput"]' , data.liy)
        //Submit button and Query
            .click('button[id="saveBtn"]')
            .expect.element('span[name="queryBody"]').text.to.equals('Evan Wanted.E@W#.123456789.Evan Wright.M.W.511.195.BLN.Unpaid Tickets.02042017.EW123456.UT.03232017.WW000W.UT.2017')
    },
}