const code = "EXVVC8dxt465";
const url = "http://gamf.nhely.hu/ajax2/";

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
  let str = "<h1>Read</h1>";
  str += "<p>Number of records: " + data.rowCount + "</p>";
  str += "<p>Last max " + data.maxNum + " records:</p>";
  str += "<table class='table'><tr><th>id</th><th>name</th><th>age</th><th>favfruit</th><th>code</th></tr>";
  for (let i = 0; i < list.length; i++) {
    str += "<tr><td>" + list[i].id + "</td><td>" + list[i].name + "</td><td>" + list[i].height + "</td><td>" + list[i].weight + "</td><td>" + list[i].code + "</td></tr>";
  }
  str += "</table>";
  document.getElementById("readDiv").innerHTML = str;
}

async function create() {
  let nameStr = document.getElementById("name1").value;
  let age = document.getElementById("age1").value;
  let favfruit = document.getElementById("favfruit1").value;
  if (
    nameStr.length > 0 && nameStr.length <= 30 &&
    age.length > 0 && age.length <= 30 &&
    favfruit.length > 0 && favfruit.length <= 30 &&
    code.length <= 30
  ) {
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code=" + code + "&op=create&name=" + nameStr + "&height=" + age + "&weight=" + favfruit
    });
    let data = await response.text();
    let str = (parseInt(data) > 0) ? "Create successful!" : "Create NOT successful!";
    document.getElementById("createResult").innerHTML = str;
    document.getElementById("name1").value = "";
    document.getElementById("age1").value = "";
    document.getElementById("favfruit1").value = "";
    read();
  } else {
    document.getElementById("createResult").innerHTML = "Validation error!!";
  }
}

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
      document.getElementById("age2").value = list[i].height;
      document.getElementById("favfruit2").value = list[i].weight;
    }
  }
}

async function update() {
  let id = document.getElementById("idUpd").value;
  let nameStr = document.getElementById("name2").value;
  let age = document.getElementById("age2").value;
  let favfruit = document.getElementById("favfruit2").value;
  if (
    id.length > 0 && id.length <= 30 &&
    nameStr.length > 0 && nameStr.length <= 30 &&
    age.length > 0 && age.length <= 30 &&
    favfruit.length > 0 && favfruit.length <= 30 &&
    code.length <= 30
  ) {
    let response = await fetch(url, {
      method: 'post',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: "code=" + code + "&op=update&id=" + id + "&name=" + nameStr + "&height=" + age + "&weight=" + favfruit
    });
    let data = await response.text();
    let str = (parseInt(data) > 0) ? "Update successful!" : "Update NOT successful!";
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
    let str = (parseInt(data) > 0) ? "Delete successful!" : "Delete NOT successful!";
    document.getElementById("deleteResult").innerHTML = str;
    document.getElementById("idDel").value = "";
    read();
  } else {
    document.getElementById("deleteResult").innerHTML = "Validation error!!";
  }
}

window.onload = function () {
  read();
};
