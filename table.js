const companies = document.getElementById("companies");
 const table  = document.getElementById("companies-table");

const getCompaniesData = [
       {
        name: "Saab AB",
        city: "Stockholm",
        year: 1937
    },
    {
        name: "Volvo Group",
        city: "Göteborg",
        year: 1927
    },
    {
        name: "Sandvik AB",
        city: "Stockholm",
        year: 1862
    },
    {
        name: "Atlas Copco Group",
        city: "Nacka",
        year: 1873
    },
    {
        name: "Electrolux AB",
        city: "Stockholm",
        year: 1919
    },
    {
        name: "Skanska AB",
        city: "Stockholm",
        year: 1887
    }
];

   
const getTable = (companyList) => {
    const newTable = document.createElement("table");
    const rowToAdd = document.createElement("tr");
    const rowHeader1 = document.createElement("td");
    rowHeader1.innerText ="Company Name";
    rowToAdd.appendChild(rowHeader1);

    const rowHeader2 = document.createElement("td");
    rowHeader2.innerText ="City";
    rowToAdd.appendChild(rowHeader2);

    const rowHeader3 = document.createElement("td");
    rowHeader3.innerText ="Year";
    rowToAdd.appendChild(rowHeader3);


    newTable.append(rowToAdd);
    
    getCompaniesData.map((company) => { 
        const newRow = getRow(company);
        newTable.appendChild(newRow);
    });
    table.append(newTable);
    return newTable;


}
const getRow = (rowData) => {
    const rowToAdd = document.createElement("tr");
    

    const companyName = document.createElement("td");
    companyName.innerText= rowData.name;
    rowToAdd.appendChild(companyName);

    const cityName = document.createElement("td");
    cityName.innerText =rowData.city ;
    rowToAdd.appendChild(cityName);

    const startingYear = document.createElement("td");
     startingYear.innerText =  rowData.year;
    rowToAdd.appendChild(startingYear);

 return rowToAdd;

}
//Starting with button id
const showCompanies = document.getElementById("show-companies");
showCompanies.addEventListener("click", getTable);


