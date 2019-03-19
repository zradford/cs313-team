let api = 'http://www.omdbapi.com/?apikey=byuidaho&'


function submitForm() {
   let term = document.getElementById("search").value
   let url = api
   url += 's=' + term

   let http = new XMLHttpRequest()
   http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("results").innerHTML = format(this.responseText)
      }
   }

   http.open("GET", url, true)
   http.send()

}


function format(j) {
   let jsonobject = JSON.parse(j)
   let myhtml = "<ul>"
   jsonobject.Search.forEach(el => {
      myhtml += `<li> <b>Title</b>: ${el.Title} <b>Year</b>: ${el.Year} 
      <button onclick="expand('${el.imdbID}')"> view details </button></li>`;
   })

   myhtml += "</ul>"

   return myhtml
}

function expand(id) {
   let http = new XMLHttpRequest()
   http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
         document.getElementById("more").innerHTML = formatDetails(this.responseText)
      }
   }
   let url = api
   url += 'i=' + id
   console.log(url);
   http.open("GET", url, true)
   http.send()
}


function formatDetails(rawjson){
   var obj = JSON.parse(rawjson)
   console.log(obj)
   var html ="<div style='display:flex;flex-flow:row;'>"
      html += `<div style="padding-right: 20px;"><img src="${obj.Poster}"></div>
      <div>title: ${obj.Title}</div>`

   return html

}