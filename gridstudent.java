var i;
function getImageId() {
    const image = event.target;
    const imageId = image.getAttribute('id'); 
    console.log('Image id:', imageId);
    i = parseInt(imageId);
    console.log('Parsed index:', i)
    export{i};
}