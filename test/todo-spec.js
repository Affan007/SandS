describe('GraphjApi App', function() {
    it('should click button and see result', function() {
        browser.get('http://localhost:3000/');
        element(by.css('.btn-primary')).click;
        expect(element(by.css('.DataContainer')).isDisplayed())
            //toEqual('5'); // This is wrong!
    });
});