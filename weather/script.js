let cardContainer = document.createElement('div');
var modalWrap=null;
window.onload = () => {
fetch('https://restcountries.com/v3/all')
.then(function(data){
    return data.json();  
})
.then(function(jsonData){
   console.log(jsonData);
   universalData=jsonData;
   createTaskCard(jsonData);
})
 .catch(console.error())
};

 function createTaskCard(data2){
    document.body.style.backgroundColor='#132747';
    cardContainer.className='container-fluid';
    let cardRow=document.createElement('div');
    cardRow.className='row d-flex flex-row flex-wrap gy-5';
    for(var i=0;i<data2.length;i++){
        let columns=document.createElement('div');
        columns.className='col-lg-4 col-sm-12';

        let cards=document.createElement('div');
        cards.className='card h-100 mt-3 p-3';
        cards.style.backgroundImage='rgb(34,193,195)';
        cards.style.backgroundImage = "linear-gradient(to right, "+ "rgba(113,80,7,0.5270483193277311)" +", "+ "#506c78" +")";
     

        let cardBody=document.createElement('div');
        cardBody.className='card-body text-center';

        let header = document.createElement('div');
        header.className='card-header mb-3 col-lg-12 col-sm-12';
        header.innerHTML=data2[i].name.common
        header.style.backgroundColor='black';
        header.style.color='white';
        let image = document.createElement('img');
        image.className='card-img';
        image.style.width = '100%';
        image.style.height = 'auto';
        image.src=data2[i].flags[0];

        let para= document.createElement('p');
        para.className='card-text mt-3';
        para.innerHTML=`Capital : ${data2[i].capital}`;
        para.style.color='white';

        let para2= document.createElement('p');
        para2.className='card-text';
        para2.innerHTML=`Region : ${data2[i].region}`;
        para2.style.color='white';

        let para3= document.createElement('p');
        para3.className='card-text';
        para3.innerHTML=`Country Code : ${data2[i].cca3}`;
        para3.style.color='white';

        let para4= document.createElement('p');
        para4.className='card-text';
        para4.innerHTML=`LatLang : ${data2[i].latlng}`;
        para4.style.color='white';

        let button =document.createElement('button');
        button.className='btn btn-primary';
        button.innerHTML='Click for Weather';
        let countryCode=data2[i].cca3;
        console.log(countryCode);
        button.addEventListener("click",function(){

            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countryCode},${countryCode},${countryCode}&appid=bcb787b53fc671ac3591069cbabcc3d5`)
            .then(function(data){
                return data.json();  
            })
            .then(function(jsonData){
            console.log(jsonData);

            if(modalWrap !== null){
                modalWrap.remove();
            }
            var fToCel = jsonData.main.temp / 10;
            modalWrap=document.createElement('div');
            modalWrap.innerHTML=`
            <div class="modal fade" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Weather Report</h5>
                  <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <p>Description : ${jsonData.weather[0].description}</p>
                  <p>Temperature : ${fToCel}</p>
                  <p>Humidity : ${jsonData.main.humidity}%</p>
                </div>
                <div class="modal-footer">
                  
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
            `;
        
            document.body.append(modalWrap);
            var modal= new bootstrap.Modal(modalWrap.querySelector('.modal'));
            modal.show();
            
            })
            .catch(console.error())




          

        });

        cardBody.appendChild(header);
        cardBody.appendChild(image);
        cardBody.appendChild(para);
        cardBody.appendChild(para2);
        cardBody.appendChild(para3);
        cardBody.appendChild(para4);
        cardBody.appendChild(button);

        cards.appendChild(cardBody);
        columns.appendChild(cards);
        cardRow.appendChild(columns);
           
    }
    cardContainer.appendChild(cardRow);
    document.body.appendChild(cardContainer);
}