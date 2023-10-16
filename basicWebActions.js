const {expect} = require("chai");
it('Run basic web actions', async () =>{
    //1. Launch https://www.amazon.com/ 
    await browser.url('https://www.amazon.com/');

    //2. Verify page title contains "Spend less. Smile more."
    let pageTitle = await browser.getTitle();
    expect (pageTitle.includes("Spend less. Smile more."), "Page title does not include 'Spend less. Smile more.'").to.be.true;

    //3. Launch https://www.hotels.com/  
    await browser.url("https://www.hotels.com/");

    //4. Verify current url contains "hotels.com"
    let pageUrl = await browser.getUrl();
    expect (pageUrl.includes('hotels.com'), 'Page URL does not contain "hotels.com"').to.be.true;

    //5. Go back
    await browser.back();

    //6. Verify current url contains "amazon.com"
    pageUrl = await browser.getUrl();
    expect (pageUrl.includes('amazon.com'), 'Page Url does not contain "amazon.com"').to.be.true;

    //7. Go Forward
    await browser.forward();

    //8. Verify page title contains "Deals & Discounts for Hotel Reservations"
    pageTitle = await browser.getTitle();
    expect(pageTitle.includes("Deals & Discounts for Hotel Reservations"), "Page title does not include 'Deals & Discounts for Hotel Reservations'").to.be.true;

})