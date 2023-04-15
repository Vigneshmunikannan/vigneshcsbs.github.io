var i;
function getImageId(){
    const image = event.target;
    const imageId = image.getAttribute('id'); 
    console.log('Image id:', imageId);
    i = parseInt(imageId);
    console.log('Parsed index:', i)
    localStorage.setItem('i',i);
}
function c(){
    var ii=localStorage.getItem('i');
    color={
        8:["#e7a2a2","red","image/house logo/red.png"],
        2:["#e7a2a2","red","image/house logo/red.png"],
        3:["e7a2a2","red","image/house logo/red.png"],
        0:["#e7a2a2","red","image/house logo/red.png"],
        5:["#adeee4","green","image/house logo/green.png"],
        1:["#adeee4","green","image/house logo/green.png"]
    }
    document.body.style.backgroundColor =color[ii][0];
    console.log(color[ii][1]+"cccc")
    var boxes = document.getElementsByClassName("box")
      boxes[0].style.backgroundColor = color[ii][1];
      console.log(color[ii][2])
      document.getElementById('logo').src=color[ii][2]
    
}

function dis(){
    var ii=localStorage.getItem('i');
    var link=`https://hp-api.onrender.com/api/characters/staff`
    console.log(ii+"____")
        fetch(link)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            console.log(data[ii])
            results.innerHTML=`
            <h1 class="header">${data[ii].name}</h1>
            <div class="pro">
            <img src="${data[ii].image}" alt="${data[ii].image}" class="pro">
            </div>
            <pre class="txt">                Species                <span>${data[ii].species}</span>

                Gender                 <span>${data[ii].gender}</span>

                House                  <span>${data[ii].house}</span>

                DOB                    <span>${data[ii].dateOfBirth}</span>

                Ancestry               <span>${data[ii].ancestry}</span>

                Eye colour             <span>${data[ii].eyeColour}</span>

                Hair colour            <span>${data[ii].hairColour}</span>

                Patronus               <span>${data[ii].patronus}</span>
                </pre>
        </div>`
        })
        .catch(error => console.log(error))
}