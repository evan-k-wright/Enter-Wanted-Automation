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
            .setValue('input[name="hdrInput"]' , 'Evan Wanted')     
            .setValue('input[name="mkeInput"]' , 'E@W#')
            .setValue('input[name="oriInput"]' , '123456789')
        //Name, Sex, Race
            .setValue('input[name="namInput"]' , 'Evan Wright')
            .setValue('input[name="sexInput"]' , 'M')
            .setValue('input[name="racInput"]' , 'W')
        //Height, Weight, Hair
            .setValue('input[name="hgtInput"]' , '511')
            .setValue('input[name="wgtInput"]' , '195')
            .setValue('input[name="haiInput"]' , 'BLN')
        //Offense, Date of Warrant/Violation
            .setValue('input[name="offInput"]' , 'Unpaid Tickets')
            .setValue('input[name="dowInput"]' , '02042017')
        //Drivers License, DL State, DL Expiration Date
            .setValue('input[name="olnInput"]' , 'EW123456')
            .setValue('input[name="olsInput"]' , 'UT')
            .setValue('input[name="olyInput"]' , '03232017')
        //License Plate, License State, License Year
            .setValue('input[name="licInput"]' , 'WW000W')
            .setValue('input[name="lisInput"]' , 'UT')
            .setValue('input[name="liyInput"]' , '2017')
        //Submit button and Query
            .click('button[id="saveBtn"]')
            .expect.element('span[name="queryBody"]').text.to.equals('Evan Wanted.E@W#.123456789.Evan Wright.M.W.511.195.BLN.Unpaid Tickets.02042017.EW123456.UT.03232017.WW000W.UT.2017')
    },
}
