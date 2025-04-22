

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

textHtmlFunc("about", "About Celine dion", "color:white;font-size:30px;font-weight:bold;padding:20px;");
textshow("Copyrights", "Copyright © 2025 Celine Dion. All Rights Reserved.")
textshow("network", '<li id="facebook"><a href="#">Facebook | </a></li> <li><a href="#" id="twitter">Twitter | </a></li> <li><a href="#" id="Instagram">Instagram </a></li>');
