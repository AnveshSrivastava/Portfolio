const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  const viewports = [
    { width: 320, height: 800 },
    { width: 360, height: 800 },
    { width: 375, height: 812 },
    { width: 390, height: 844 },
    { width: 414, height: 896 },
    { width: 430, height: 932 },
    { width: 768, height: 1024 },
    { width: 1024, height: 768 },
    { width: 1440, height: 900 }
  ];

  const routes = ['/', '/about', '/work', '/skills', '/blog'];
  let totalIssues = 0;

  for (const route of routes) {
    console.log(`\nTesting route: ${route}`);
    await page.goto(`http://localhost:3001${route}`, { waitUntil: 'networkidle2' });
    // wait a bit for animations
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));

    for (const vp of viewports) {
      await page.setViewport(vp);
      // Wait for layout
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));

      const overflow = await page.evaluate(() => {
        return {
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          hasOverflow: document.documentElement.scrollWidth > document.documentElement.clientWidth
        };
      });

      if (overflow.hasOverflow) {
        console.log(`❌ ${vp.width}x${vp.height} | Overflow! scrollWidth: ${overflow.scrollWidth}, clientWidth: ${overflow.clientWidth}`);
        totalIssues++;
        // find the overflowing elements
        const elements = await page.evaluate(() => {
           let bad = [];
           document.querySelectorAll('*').forEach(el => {
              if (el.getBoundingClientRect().right > document.documentElement.clientWidth) {
                 bad.push(el.tagName + '.' + el.className);
              }
           });
           return bad;
        });
        console.log(`   Overflowing elements:`, elements.slice(0, 5));
      } else {
        console.log(`✅ ${vp.width}x${vp.height} | OK`);
      }
    }
  }

  await browser.close();
  if (totalIssues > 0) process.exit(1);
})();
