const playwright = require('playwright');


(async () => {
    // Setup
    const browser = await playwright.chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
  
    // The actual interesting bit
    await context.route('**.jpg', route => route.abort());
    await page.goto('https://daluozha.cn');
    
    // assert(await page.title() === 'Example'); // 👎 not a Web First assertion
  
    // Teardown
    await context.close();
    await browser.close();
  })()