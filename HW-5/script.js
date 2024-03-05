const blank = './images/Square_gray.png';
const blankArr = new Array(12).fill(blank);
const picAmmount = 6;
let imgArrSrc = imgArrayCreate();
let imgArr = [];
function imgArrayCreate() {
    let tempArr = [];
    for (var i = 0; i < picAmmount; i++) {
        var x = './images/cat' + (i + 1) + '.png';
        tempArr.push(x);
    }
    return tempArr;
}
let tempImages = [...imgArrSrc, ...imgArrSrc];
//thank you to ChatGpt for teaching me about the spread operator
while (tempImages.length) {
    const randomIndex = Math.floor(Math.random() * tempImages.length);
    imgArr.push(tempImages.splice(randomIndex, 1)[0]);
}
//the above is the condensed code from ChatGPT. below is me trying to work out a way to do this in my own knowledge.
//it turns out splice is pretty much nessecary. 
/*
var length = [];
for (var i = 0; i < tempImages.length; i++) {
    length.push(i+1);
}
while(tempImages.length) {
    for( var i = 0; i < length.length; i++) {
        const randomIndex = Math.floor(Math.random() * length)
        length.splice(randomIndex);
        ImgArr.push(tempImages[randomIndex]);
}
}
Chat GPT's method is far less complicated and makes sense now that I write out the code like this */


//comparing to your example code, im a little confused on what yours is doing, even with the comments.
//i see, it has 4 images total

//chat GPT also told me about querySelector and why it is used here. it is more flexible and consistent than getElementById


//this part does both the printBlanks() and flipImage() functions at once.
//its very condensed and a little hard to read.

//after discussing with a friend, i undestand the code

//this grabs the grid tag and uses it as on object
const grid = document.querySelector('.grid');
//forEach is a simplified way to do a for loop
blankArr.forEach((imageSrc, index) => {
    //creates an <img> html element
    const imgElement = document.createElement('img');
    //defines the image source as the blank image
    imgElement.src = imageSrc;
    //sets the index of the element to be used for the final image
    imgElement.dataset.index = index;
    //listens for the element being clicked
    imgElement.addEventListener('click', () => {
        //changes the image source of the element based off the 
        imgElement.src = imgArr[index];
        //matching and attempts here
    });
    grid.appendChild(imgElement);
});