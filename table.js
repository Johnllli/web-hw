var indexnum = null;
var arrayh = [];
var dbid = 0;
//test vil
function validate() {
    let isValid = true;

    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        document.getElementById("fullNameValidationError").classList.add("hide");
    }

    if (document.getElementById("email").value == "") {
        isValid = false;
        document.getElementById("emailValidationError").classList.remove("hide");
    } else {
        document.getElementById("emailValidationError").classList.add("hide");
    }

    return isValid;
}
function datareader()
{
    var formdata = {};
    formdata["name"] = document.getElementById("name").value;
    formdata["age"] = document.getElementById("age").value;
    formdata["sex"] = document.getElementById("sex").value;
    formdata["gender"] = document.getElementById("gender").value; 
    return formdata;
}
function onFormSubmit() {
    if (validate()) {
        var formData = datareader();
        if (selectedIndex==null)
            insertNewRecord(formData);
        else
            formData["id"] = ++dbid;
            updateRecord(formData);
        resetForm();
    }
}
function updateRecord(formData) {
    arrayh[selectedIndex].fullName=formData.fullName;
    arrayh[selectedIndex].email=formData.email;
    arrayh[selectedIndex].salary=formData.salary;
    arrayh[selectedIndex].city=formData.city;
    printArray();
}