function changedate()
{
    var xhr = new XMLHttpRequest();

    xhr.onload = function(){
        document.getElementById("textshow").innerText = this.responseText;
    }

    xhr.open("GET", "../src/data.txt", true);

    xhr.send();
}