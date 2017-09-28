successFunction = function(data) {
  var allRows = data.split('\"\n');
  const aai = 9999

  var parameters = location.search.substring(1).split("&");
  var temp = parameters[0].split("=");
  var n  = unescape(temp[1]);
  var row = allRows[n].split("\",\"")

  document.getElementById("title").innerHTML = row[3]
  document.getElementById("authors").innerHTML = row[1]
  document.getElementById("aai").innerHTML = "ICEF-"+(aai-(2*n))
  document.getElementById("abstract").innerHTML = row[5]
  document.getElementById("JEL").innerHTML = row[7]
  document.getElementById("keywords").innerHTML = row[6]

  authors = row[1].split(';')
  affl = row[10].split(';')
  email = row[8].split(';')
  var s = ""
  for(i=0;i<authors.length;i++) {
    s = s+ authors[i];
    if (email[i]!=null && email != undefined )
    {
      s = (i+1)+") "+ s+ " : "+email[i]
    }
    if (affl[i]!=null && affl != undefined )
    {
      s = s+ " : "+affl[i]
    }
    s= s+ "\n"
  }
  document.getElementById("affiliations").innerHTML = s
//});
}

form = $('.body'),
$.ajax({
  url: './Abstract Submission..csv',
  dataType: 'text',
}).done(successFunction);

//create pdf
