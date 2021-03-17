//参考：https://learnku.com/nodejs/t/44845

const puppeteer = require('puppeteer');

async function getPic() {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.setViewport({width: 1000, height: 500})
  await page.screenshot({path: 'google.png'});

  await browser.close();
}

// getPic();

let scrape = async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
    const result = await page.evaluate(() => {
        let data = []; // 创建一个空数组, 用来存储数据
        let elements = document.querySelectorAll('.product_pod'); // 选择所有产品

        for (var element of elements){ // 遍历每个产品
            console.log(element.childNodes[5])
            let title = element.childNodes[5].children[0].getAttribute('title'); // 选择标题
            let price = element.childNodes[7].children[0].innerText; // 选择价格

            data.push({title, price}); // 将对象放进数组 data 
        }

        return data; // 返回数组 data
    });

    browser.close();
    return result;

};

  
// scrape().then((value) => {
//     console.log(value); // 成功!
// });


// (async () => {
//     const browser = await puppeteer.launch();
//     const page = await browser.newPage();
//     await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
//     await page.pdf({path: 'hn.pdf', format: 'A4'});

//     await browser.close();
// })();

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.baidu.com');

    // Get the "viewport" of the page, as reported by the page.
    const dimensions = await page.evaluate(() => {
        return {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        deviceScaleFactor: window.devicePixelRatio
        };
    });

    console.log('Dimensions:', dimensions);

    await browser.close();
})();