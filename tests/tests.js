const data = require('../data/testData')
module.exports = {
    beforeEach : browser => {
        browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    },
    after : browser => {
        browser.end()
        
    },
    'Testing All Fields' : browser => {
        browser
        //Header, MKE, Originating Agency Identifier
            .setValue('input[name="hdrInput"]' , data.hdr)     
            .setValue('input[name="mkeInput"]' , data.mke)
            .setValue('input[name="oriInput"]' , data.ori)
        //Name, Sex, Race
            .setValue('input[name="namInput"]' , data.nam)
            .setValue('input[name="sexInput"]' , data.sex)
            .setValue('input[name="racInput"]' , data.rac)
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