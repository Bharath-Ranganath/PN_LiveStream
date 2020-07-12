describe('login to with pubninja account', () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 2000;
        browser
              .manage()
              .window()
              .maximize();
        var EC = protractor.ExpectedConditions;
        browser.waitForAngularEnabled(false);
        browser.driver.get('https://bharathblr55.pubninja.com/live/bharath-live-455209');
        browser.driver.sleep(6000);
        browser.ignoreSynchronization = true; 


        it("Verify login and start streaming", async () => {
        

                // Set cookies
                browser.manage().addCookie({name: "session_id", value:"030c3398-ef6c-4d08-94f5-ba16d9561758"});
                browser.manage().addCookie({name: "jToken", value: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJoYXJhdGhyLnRlc3QyQGdtYWlsLmNvbSIsInVzZXJfaWQiOjg1NTA4OTE5LCJkb21haW5faWQiOiI4MzYwIiwiaWF0IjoxNTk0NTU0Nzg3LCJleHAiOjE1OTcxNDY3ODd9.C3it7XZYrKNkJVXk2IBYO9i5g7WtpkMpTYDUKxgTF_I"});
                browser.manage().addCookie({name: "use_id", value: "214c0ebb-7a1b-4e0b-a82b-0b2399d8cbda"});
                browser.refresh();
                // Click on Watch Now 
                element(by.className('watch-now')).click();
                browser.driver.sleep(9000);
        
                
        })    

})