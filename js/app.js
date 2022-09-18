// Your code should go here
window.addEventListener("load", () => {
    // (B1) DATA ARRAY
    CreateBody();
  });

  function CreateBody(){
    var data =USERS;
   
    // (B2) LOOP + ADD CELLS
    var container = document.getElementById("grid1");
    var Tbody=document.createElement('tbody');
    Tbody.id="GrdBody"
    container.appendChild(Tbody);
    var FTbody=document.getElementById('GrdBody');
    for(let i=0;i<data.length;i++){
    let FullName=data[i].name.title+", "+data[i].name.last+", "+data[i].name.first;
    let Finalname="";
    if(FullName.length>20)
      Finalname=FullName.substring(0,20);
    else
      Finalname=FullName;
    let myRow=document.createElement("tr");
    FTbody.appendChild(myRow);
    
    let row=document.getElementById("row"+i);
    let IDCell=document.createElement("td");
    IDCell.scope="row";
    IDCell.innerText=data[i].id;
    myRow.appendChild(IDCell);

    let NameCell=document.createElement("td");
    NameCell.width="100%";
    NameCell.title=FullName;
    NameCell.innerText=Finalname;
    myRow.appendChild(NameCell);

    let EmailCell=document.createElement("td");
    EmailCell.innerText=data[i].email;
    EmailCell.className="w-50";
    myRow.appendChild(EmailCell);

    let PhoneCell=document.createElement("td");
    PhoneCell.innerText=data[i].phone;
    myRow.appendChild(PhoneCell);

    let PictureCell=document.createElement("td");
    let img=document.createElement("img");
    img.src=data[i].pictureUrl;
    img.className="img-thumbnail";
    PictureCell.appendChild(img);
    myRow.appendChild(PictureCell);

    let balanceCell=document.createElement("td");
    balanceCell.innerText=data[i].accountBalance;
    myRow.appendChild(balanceCell);
    }

  }

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  
  function SuffleTable() {
     let table = document.getElementById("grid1");
    let rowsCollection = table.querySelectorAll("tr");
    let rows = Array.from(rowsCollection)
      .slice(1); //skip the header row
    //3. shuffle
    shuffleArray(rows);
    //4. add back to the DOM
    for (const row of rows) {
      table.appendChild(row);
    }
  }
  var MyInterval=null;
  function SufflewithRandom(){
    document.getElementById("sort").disabled=true;
    MyInterval= setInterval(SuffleTable,1000);
  }
  function clearIntervalTimeout(){
    //Clear Suffle
    if(MyInterval==null){
       alert("First click start Random Button");
       return;
    }
    document.getElementById("sort").disabled=false;
    clearInterval(MyInterval);
    CreateBody();
  }
//Sort table by balance and ID
  function sortTable(){
    console.log('Hi');
    var tableData = document.getElementById('grid1').getElementsByTagName('tbody').item(0);
    var rowData = tableData.getElementsByTagName('tr');            
    for(var i = 0; i < rowData.length - 1; i++){
        for(var j = 0; j < rowData.length - (i + 1); j++){
            if(Number(rowData.item(j).getElementsByTagName('td').item(5).innerHTML.replace(/[^0-9\.]+/g, "")) < Number(rowData.item(j+1).getElementsByTagName('td').item(5).innerHTML.replace(/[^0-9\.]+/g, ""))){
                tableData.insertBefore(rowData.item(j+1),rowData.item(j));
            }
        }
    }
    //If balance same then sort by ID
    for(var i = 0; i < rowData.length - 1; i++){
        for(var j = 0; j < rowData.length - (i + 1); j++){
            if(Number(rowData.item(j).getElementsByTagName('td').item(5).innerHTML.replace(/[^0-9\.]+/g, "")) == Number(rowData.item(j+1).getElementsByTagName('td').item(5).innerHTML.replace(/[^0-9\.]+/g, ""))){
              if(Number(rowData.item(j).getElementsByTagName('td').item(0).innerHTML.replace(/[^0-9\.]+/g, "")) > Number(rowData.item(j+1).getElementsByTagName('td').item(0).innerHTML.replace(/[^0-9\.]+/g, ""))){
                tableData.insertBefore(rowData.item(j+1),rowData.item(j));
            }
            }
        }
    }
}

  