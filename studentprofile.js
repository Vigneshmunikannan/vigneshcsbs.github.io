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
    console.log(ii+"IIIIIIIIIIIIIII")
    color={
        0:["#e7a2a2","red","image/house logo/red.png"],
        5:["#c2faf7","skyblue","image/house logo/blue.png"],
        3:["#c2faf7","green","image/house logo/green.png"],
        2:["#e7a2a2","red","image/house logo/red.png"],
        4:["#faf8c2","#E8AF17","image/house logo/yellow.png"],
        1:["#e7a2a2","red","image/house logo/red.png"]
    }
   // document.getelementById("body").style.backgroundColor=color[i];
   console.log(color[ii]+"__________")
    document.body.style.backgroundColor =color[ii][0];
    console.log(color[ii][1]+"cccc")
    var boxes = document.getElementsByClassName("box")
      boxes[0].style.backgroundColor = color[ii][1];
      console.log(color[ii][2])
      document.getElementById('logo').src=color[ii][2]
    
}

function dis(){
    var ii=localStorage.getItem('i');
    var link=`https://hp-api.onrender.com/api/characters/students`
    console.log(ii+"____")
        fetch(link)
        .then(res => res.json())
        .then(data => {
            console.log("________________________________")
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
            console.log("________________________________")
        })
        .catch(error => console.log(error))
}
