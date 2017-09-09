successFunction = function(data) {
  var allRows = data.split('\"\n');
  const aai = 9999

  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  var n  = unescape(temp[1]);
  var row = allRows[n].split("\",\"")

  document.getElementById("title").innerHTML = row[4]
  document.getElementById("aai").innerHTML = "ICEF-"+(aai-(2*n))
  document.getElementById("abstract").innerHTML = row[5]
  document.getElementById("JEL").innerHTML = row[7]
  document.getElementById("keywords").innerHTML = row[6]
}

form = $('.body'),
$.ajax({
  url: './Abstract Submission..csv',
  dataType: 'text',
}).done(successFunction);

//create pdf
