
var csvData  = []
const counterFile = './counter.txt'
var fs = require('fs');
var csv = fs.open('AbstractSubmission.csv','r')
csvData = csv.read().split('\"\n');
var page = require('webpage').create();

page.paperSize = {
format: 'A4',
 margin: { top: 10, right: 15, bottom: 10, left: 15 },
 padding: { top: 10, right: 15, bottom: 10, left: 15}
}

page.viewportSize = { width: 595, height: 842 };   //**A4**
console.log("Get ....... Set........... Go............");

console.log("Initialized :");
console.log("Starting conversion : With name and email ids :: ");
console.log("==================================================================");

savePDFNamed(1)

function savePDFNamed(i) {

  if(i>=csvData.length) {
    console.log("=======================Completed=======================");
    console.log("Starting conversion : Without name and email ids :: ");
    console.log("==================================================================");

    savePDFAnon(1)
  }

  var row = csvData[i].split("\",\"")
  console.log("Converting abstract titled :"+row[4]);

  page.open('file:///home/f390/115400802059ac04d0b3219/user-detail-named.html?num='+i, function() {
  page.render('./Named abstracts/'+row[3].replace("/"," and ")+'/'+row[4].replace("/"," and ")+'.pdf',{format: 'pdf', quality: '100'});
  console.log("Saved at :"+'./Named abstracts/'+row[3].replace("/"," and ")+'/'+row[4].replace("/"," and ")+'.pdf');
  console.log("===============================================================");
  savePDFNamed(i+1)
  });
}
function savePDFAnon(i) {

  if(i>=csvData.length) {
    console.log("Completed conversion");
    phantom.exit()
  }

  var row = csvData[i].split("\",\"")
  console.log("Converting abstract titled :"+row[4]);

  page.open('file:///home/f390/115400802059ac04d0b3219/user-detail-anon.html?num='+i, function() {
  page.render('./Anonymous abstracts/'+row[3].replace("/"," and ")+'/'+row[4].replace("/"," and ")+'.pdf',{format: 'pdf', quality: '100'});
  console.log("Saved at :"+'./Anonymous abstracts/'+row[3].replace("/"," and ")+'/'+row[4].replace("/"," and ")+'.pdf');
  console.log("==================================================================");
  savePDFAnon(i+1)
  });
}
