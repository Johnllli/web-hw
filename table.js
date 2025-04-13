var indexnum = null;
var arrayh = new Array();
function vaildate()
{
    isName = true;
    isAge = true;
    isSex = true;
    isVaild = true;
    if(document.getElementById("name").value == "")
    {
        isName = false;
        document.getElementById("NameValidationError").classList.remove("hide");
    }
    if(document.getElementById("age").value == "")
    {
        isName = false;
        document.getElementById("AgeValidationError").classList.remove("hide");
    }
    if(document.getElementById("sex").value == "")
    {
        isName = false;
        document.getElementById("SexValidationError").classList.remove("hide");
    }
    if(!(isName == true && isAge == true && isSex == true))
    {
        isVaild = false;
    }
    else isVaild = true;
    return isVaild;
}
function datareader()
{
    var formdata = {};
    formdata["Name"] = document.getElementById("name").value;
    formdata["Age"] = document.getElementById("age").value;
    formdata["Sex"] = document.getElementById("sex").value;
    formdata["Gender"] = document.getElementById("gender").value;
    return formdata;
}