const code = "EXVVC8dxt465"; 
const url = "http://gamf.nhely.hu/ajax2/";

// READ
async function read() {
  document.getElementById("code").innerHTML = "code=" + code;

  let response = await fetch(url, {
    method: 'post',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: "code=" + code + "&op=read"
  });

  let data = await response.text();
  data = JSON.parse(data);
  let list = data.list;

  let str = "<h1></h1>";
  str += "<p>Number of records: " + data.rowCount + "</p>";
  str += "<p>Last max " + data.maxNum + " records:</p>";
  str += "<table><tr><th>id</th><th>name</th><th>age</th><th>favfruit</th><th>code</th></tr>";

  for (let i = 0; i < list.length; i++) {
    str += "<tr><td>" + list[i].id + "</td><td>" + list[i].name + "</td><td>" + list[i].age + "</td><td>" + list[i].favfruit + "</td><td>" + list[i].code + "</td></tr>";
  }

  str += "</table>";

  // Optional: summary for age
  let ages = list.map(item => Number(item.age));
  let sum = ages.reduce((a, b) => a + b, 0);
  let avg = (sum / ages.length).toFixed(2);
  let max = Math.max(...ages);

  str += "<p><strong>Sum of ages:</strong> " + sum + "</p>";
  str += "<p><strong>Average age:</strong> " + avg + "</p>";
  str += "<p><strong>Max age:</strong> " + max + "</p>";

  document.getElementById("readDiv").innerHTML = str;
}

// CREATE
async function create() {
  let name = document.getElementById("name1").value;
  let age = document.getElementById("age1").value;
  let favfruit = document.getElementById("favfruit1").value;

  if (name.length > 0 && name.length <= 30 &&
      age.length > 0 && age.length <= 30 &&
      favfruit.length > 0 && favfruit.length <= 30) {

    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code=" + code + "&op=create&name=" + name + "&age=" + age + "&favfruit=" + favfruit
    });

    let data = await response.text();
    let str = (data > 0) ? "Create successful!" : "Create NOT successful!";
    document.getElementById("createResult").innerHTML = str;

    document.getElementById("name1").value = "";
    document.getElementById("age1").value = "";
    document.getElementById("favfruit1").value = "";
    read();
  } else {
    document.getElementById("createResult").innerHTML = "Validation error!!";
  }
}

// GET DATA FOR ID
async function getDataForId() {
  let response = await fetch(url, {
    method: 'post',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: "code=" + code + "&op=read"
  });

  let data = await response.text();
  data = JSON.parse(data);
  let list = data.list;

  for (let i = 0; i < list.length; i++) {
    if (list[i].id == document.getElementById("idUpd").value) {
      document.getElementById("name2").value = list[i].name;
      document.getElementById("age2").value = list[i].age;
      document.getElementById("favfruit2").value = list[i].favfruit;
    }
  }
}

// UPDATE
async function update() {
  let id = document.getElementById("idUpd").value;
  let name = document.getElementById("name2").value;
  let age = document.getElementById("age2").value;
  let favfruit = document.getElementById("favfruit2").value;

  if (id.length > 0 && id.length <= 30 &&
      name.length > 0 && name.length <= 30 &&
      age.length > 0 && age.length <= 30 &&
      favfruit.length > 0 && favfruit.length <= 30) {

    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code=" + code + "&op=update&id=" + id + "&name=" + name + "&age=" + age + "&favfruit=" + favfruit
    });

    let data = await response.text();
    let str = (data > 0) ? "Update successful!" : "Update NOT successful!";
    document.getElementById("updateResult").innerHTML = str;

    document.getElementById("idUpd").value = "";
    document.getElementById("name2").value = "";
    document.getElementById("age2").value = "";
    document.getElementById("favfruit2").value = "";
    read();
  } else {
    document.getElementById("updateResult").innerHTML = "Validation error!!";
  }
}

// DELETE
async function deleteF() {
  let id = document.getElementById("idDel").value;

  if (id.length > 0 && id.length <= 30) {
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code=" + code + "&op=delete&id=" + id
    });

    let data = await response.text();
    let str = (data > 0) ? "Delete successful!" : "Delete NOT successful!";
    document.getElementById("deleteResult").innerHTML = str;

    document.getElementById("idDel").value = "";
    read();
  } else {
    document.getElementById("deleteResult").innerHTML = "Validation error!!";
  }
}

// Auto-load on page load
window.onload = function () {
  read();
};
