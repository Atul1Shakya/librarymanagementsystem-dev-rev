trendingBooks()
function trendingBooks()
{
  document.querySelector(".books").innerHTML = "";
  console.log(document.getElementById("input").value) 
  fetch("https://openlibrary.org/search.json?q=random")
  .then(a=>a.json())
  .then(response => {
     for(var i=0; i<response.docs.length;i++)
     {
      document.querySelector(".books").innerHTML += "<div><img src ='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><h5>"+response.docs[i].title+"</h5> </div>"
     }
  });
}


function getBooks(){
  document.querySelector(".books").innerHTML = "";
  console.log(document.getElementById("input").value) 
  fetch("https://openlibrary.org/search.json?q="+document.getElementById("input").value)
  .then(a=>a.json())
  .then(response => {
     for(var i=0; i<response.docs.length;i++)
     {
      document.querySelector(".books").innerHTML += "<div><img src ='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><h5>"+response.docs[i].title+"</h5> </div>"
     }
  });
}
function comsci(){
  document.querySelector(".books").innerHTML = "";
  console.log(document.getElementById("input").value) 
  fetch("https://openlibrary.org/search.json?q=computer+science")
  .then(a=>a.json())
  .then(response => {
     for(var i=0; i<response.docs.length;i++)
     {
      document.querySelector(".books").innerHTML += "<div><img src ='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><h5>"+response.docs[i].title+"</h5> </div>"
     }
  });
}


function pandp(){
  document.querySelector(".books").innerHTML = "";
  console.log(document.getElementById("input").value) 
  fetch("https://openlibrary.org/search.json?q=PHILOSOPHY & PSYCHOLOGY")
  .then(a=>a.json())
  .then(response => {
     for(var i=0; i<response.docs.length;i++)
     {
      document.querySelector(".books").innerHTML += "<div><img src ='http://covers.openlibrary.org/b/isbn/"+response.docs[i].isbn[0]+"-M.jpg'><h5>"+response.docs[i].title+"</h5> </div>"
     }
  });
}