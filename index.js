const fs = require('fs')
const coverage = require('./bootstrapcoverage.json');

const {ranges,text} = coverage.find(o => o.url.endsWith('bootstrap.min.css')) ;

let newCss =  ranges.reduce((total, range) => total +  text.substring(range.start, range.end), '');
fs.writeFileSync('new.css', newCss);

console.log(text.length,'=>',newCss.length);
