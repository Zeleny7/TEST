let txt

function nieuwsbriefFunction() {
    if (confirm) {
      txt = "U bent nu succesvol aangemeldt voor de nieuwsbrief! U kunt nu wekelijks email verwachten die u op de hoogte houdt van belangrijke veranderingen op camping de groene weide!";
    } 
    document.getElementById("nieuwsbriefpopup").innerHTML = txt;
  }



  
fetch('TEST.json')
  .then(response => response.json())
  .then(data => {
    let VarInfoContainers = {
    Informatie: document.getElementById('Informatie')
    };
     
let VarInfoTypes = Object.keys(data.MeerInfo);

VarInfoTypes.forEach(VarInfoType => {
     
      data.MeerInfo[VarInfoType].forEach(VarInfo => {
        let VarInfoElement = document.createElement('div');
        VarInfoElement.setAttribute('data-name', VarInfo.name);
        VarInfoElement.innerHTML = `
          
          <br>
          <h3>${VarInfo.title}</h3>
          <br>
          ${VarInfo.description}
          
        `;
        VarInfoContainers[VarInfoType].appendChild(VarInfoElement);
        setupEventListener(VarInfoElement);
      });
    });
  })
.catch(error => {
    console.error('Error fetching data:', error);
});

function setupEventListener(boxObject) {
    let extraTekst = boxObject.querySelector('.TEST');
    let box = boxObject.querySelector('.box');
  
    extraTekst.style.display = "none";
  }