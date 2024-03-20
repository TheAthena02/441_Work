const blank = './images/Square_gray.png';
const blankArr = new Array(12).fill(blank);
const picAmmount = 6;
let imgArrSrc = imgArrayCreate();
let imgArr = [];
var playerInfo = {};
// = {'firstname':'asdf','lastname':'123','age':0};
var score = 0;
var firstIndex = -1;
var secondIndex = -1;
var matchCount = 0;
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


 // Retrieve the user information from localStorage
 
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
        //console.log(localStorage.getItem("playerInfo"));
        if (firstIndex == -1) {
            firstIndex = index;
            imgElement.src = imgArr[index];
        }
        else if(secondIndex == -1 && index != firstIndex) {
            secondIndex = index;
            imgElement.src = imgArr[index];

            var matching = checkMatching();
        }
        if (!matching) {
            setTimeout(() => {
                const imgs = document.querySelectorAll('.grid img');
                if (imgs[firstIndex]) {
                    imgs[firstIndex].src = blank;
                }
                if (imgs[secondIndex]) {
                    imgs[secondIndex].src = blank;
                }
                firstIndex = -1; // Reset indices for next attempt
                secondIndex = -1;
            }, 1500); // Adjust delay as needed
            
            
        }
        else {
            firstIndex = -1;
            secondIndex = -1;
            matchCount += 1;
            if(matchCount >= picAmmount) {
                localStorage.setItem("playerInfo" , JSON.stringify(playerInfo));
                localStorage.setItem("score" , JSON.stringify(score));
                window.location = "end.html";
            }

        }
        
    });
    grid.appendChild(imgElement);
});
function clearImages(imgElement) {
    document.querySelectorAll('.grid img')[firstIndex].src = blank;
    document.querySelectorAll('.grid img')[secondIndex].src = blank;
    firstIndex = -1; 
    secondIndex = -1;
}
function checkMatching() {
    
    if (imgArr[secondIndex] != imgArr[firstIndex]) {
        score += 1;
        console.log(localStorage.getItem("playerInfo"));
        return (false);
    }
    else if (imgArr[secondIndex] == imgArr[firstIndex]) {
        score += 1;
        return (true);
    }
}

function getInfo() {
    playerInfo.firstname = document.getElementById('textFirstName').value;
    playerInfo.lastname = document.getElementById('textLastName').value;
    playerInfo.age = document.getElementById('textAge').value;
    localStorage.setItem("playerInfo" , JSON.stringify(playerInfo));
    
    console.log(localStorage.getItem("playerInfo"));
    window.location = "index.html";
    
}

function pleaseWork() {
    playerInfo = JSON.parse(localStorage.getItem("playerInfo"));
    console.log(playerInfo.firstname);
}