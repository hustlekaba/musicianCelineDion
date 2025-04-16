

function textHtmlFunc(ids, texts, Matext)
{
    var vars = document.getElementById(ids);
    vars.innerHTML = texts;
    vars.style = Matext;

}

function textshow(vars1, vars2)
{
    document.getElementById(vars1).innerHTML = vars2;
}

// HEAD H1 
//textHtmlFunc("h1", "Celine Dion", "color:rgb(119, 119, 74);padding-right:30px");
// ABOUT 
textHtmlFunc("about", "About Celine dion", "color:white;font-size:30px;font-weight:bold;padding:20px;");

//textHtmlFunc("Copyright", "cvhb", "color:white;font-size:30px;font-weight:bold;padding:20px;")
//listAlbum
//textHtmlFunc("listAlbum", "List Album", "background-color:white;padding:10px;");

textshow("Copyrights", "Copyright © 2025 Celine Dion. All Rights Reserved.")
textshow("network", '<li id="facebook"><a href="#">Facebook | </a></li> <li><a href="#" id="twitter">Twitter | </a></li> <li><a href="#" id="Instagram">Instagram </a></li>');

// function footerBlock()
// {
//     var footer = document.getElementById("footer");
//     //footer.innerHTML = "<div>gghhhh</div>"
//     footer.innerHTML = "<div>ddddddddd</div>"
//    // footer.innerHTML = "salut"
//    // footer.innerHTML = "</div>"
    
// }

// footerBlock();