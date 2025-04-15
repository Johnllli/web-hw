class mountain{
    constructor(height, name, country)
    {
        this.height = height;
        this.name = name;
        this.country = country;
    }
};
var arraym = [];
arraym[1] = new mountain(8849, 'Mountain Everest', 'Nepal, China');
arraym[2] = new mountain(8611, 'K2', 'Pakistan, China');
arraym[3] = new mountain(8586, 'Kangchenjunga', 'Nepal, India');
var table = document.getElementById("tmountain").getElementsByTagName('tbody')[0];
table.innerHTML = "";
var newrow;
for (i = 1; i < arraym.length; i++)
{
    newrow = table.insertRow(table.length);
    cell1 = newrow.insertCell(0);
    cell2 = newrow.insertCell(1);
    cell3 = newrow.insertCell(2);
    
    cell1.innerHTML = arraym[i].height;
    cell2.innerHTML = arraym[i].name;
    cell3.innerHTML = arraym[i].country;
}