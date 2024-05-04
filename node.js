const fs = require('fs');

let dir = fs.readdirSync('../content/drafts/.')

for (let i = 0; i < dir.length; i++) {
    const ele = dir[i];
    let c = fs.readFileSync('../content/drafts/' + ele, 'utf8')

    let data = c.replaceAll('![](@attachment/', '![](/images/attachments/').replaceAll("modified: '", "lastmod: '").replaceAll("created: '", "date: '")
    // let updated = new Date(c.match(/modified: '(.*)'/)[1]).toLocaleString()
    // let date = new Date(c.match(/created: '(.*)'/)[1]).toLocaleString()
    let cate = data.match(/tags: \[.*]/)[0].replaceAll('tags: [', 'categories: [');
    let arr = data.split('---')
    // let data = '---\n' + "date: '" + date + "'\n" + "updated: '" + updated + "'\n" + "academia: true" + "\n" + arr[1] + '---' + arr[2]
    data = '---\n' + cate + arr[1] + '---' + arr[2]
    fs.writeFileSync('../content/posts/' + ele, data)
    fs.rmSync('../content/drafts/' + ele)
}