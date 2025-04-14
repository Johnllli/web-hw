var editindex = null;
var arrayh = [];
var dbid = 0;
function onFormSubmit()
{
    var formData = formreader();
    if(editindex !== null)
    {
        editdata(formData);
    }else
    {
        addrecord(formData);
    }
    cleanform();
}
function formreader()
{
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["age"] = document.getElementById("age").value;
    formData["sex"] = document.getElementById("sex").value;
    formData["gender"] = document.getElementById("gender").value;
    return formData;
}
function addrecord(A)
{   
    switch (A.sex)
    {
        case "1":
            var sex = 'Female';
            break;
        case "2":
            var sex = 'Male';
            break;
    }
    ++dbid;
    arrayh[dbid]=
    {
        id: dbid,
        name: A.name,
        age: A.age,
        sex: sex,
        gender: A.gender,
    }
    printtable();
}
function printtable()
{
    var table = document.getElementById("datatable").getElementsByTagName('tbody')[0];
    table.innerHTML="";
    var newRow;
    for (i = 1; i < arrayh.length; i++)
    {
        newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
        cell1.innerHTML = arrayh[i].id;
        cell2 = newRow.insertCell(1);
        cell2.innerHTML = arrayh[i].name;
        cell3 = newRow.insertCell(2);
        cell3.innerHTML = arrayh[i].age;
        cell4 = newRow.insertCell(3);
        cell4.innerHTML = arrayh[i].sex;
        cell5 = newRow.insertCell(4);
        cell5.innerHTML = arrayh[i].gender;
        cell6 = newRow.insertCell(5);
        cell6.innerHTML = '<button onClick="onEdit('+i+')">Edit</button>' + '<button onClick="onDelete('+i+')">Delete</button>';
    }
}
function onEdit(index)
{   
    document.getElementById("name").value = arrayh[index].name;
    document.getElementById("age").value = arrayh[index].age;
    switch (arrayh[index].sex)
    {
        case "Female":
            var sex = '1';
            break;
        case "Male":
            var sex = '2';
            break;
    }
    document.getElementById("sex").value = sex;
    document.getElementById("gender").value = arrayh[index].gender;
    editindex = index;
}
function editdata(A)
{   
    switch (A.sex) {
        case "1":
            var sex = "Female";
            break;
        case "2":
            var sex = "Male";
            break;
    }
    arrayh[editindex]={
        "id": arrayh[editindex].id,
        "name":A.name,
        "age": A.age,
        "sex": sex,
        "gender": A.gender
    };
    editindex = null;
    printtable();
}
function cleanform()
{
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("sex").value = "1";
    document.getElementById("gender").value = "";
}
function onDelete(indexToDelete) {
    if (confirm('Really want to delete this?')) {
        // Adjust the index because arrayh is 1-based (skipping index 0)
        const actualIndexToDelete = indexToDelete;

        // Remove the element from the array
        arrayh.splice(actualIndexToDelete, 1);

        // Re-index the remaining elements and update their IDs
        let newId = 1;
        const newArrayH = [];
        for (let i = 1; i < arrayh.length; i++) {
            if (arrayh[i] !== undefined) { // Ensure we don't process undefined elements
                newArrayH[newId] = { ...arrayh[i], id: newId };
                newId++;
            }
        }
        arrayh = newArrayH;
        dbid = newId - 1; // Update the dbid counter

        cleanform();
        printtable();
    }
}