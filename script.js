

function textHtmlFunc(ids, texts, Matext)
{
    var vars = document.getElementById(ids);
    vars.innerHTML = texts;
    vars.style = Matext;

}

// HEAD H1 
//textHtmlFunc("h1", "Celine Dion", "color:rgb(119, 119, 74);padding-right:30px");
// ABOUT 
textHtmlFunc("about", "About Celine dion", "color:white;font-size:30px;font-weight:bold;padding:20px;")
//listAlbum
textHtmlFunc("listAlbum", "List Album", "background-color:white;padding:10px;");