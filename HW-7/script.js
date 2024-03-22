var imageObjects = [];
var imageSrc = ["./images/img_1.png", "./images/img_2.png", "./images/img_3.png"];
var lastImage = -1;
function createObjects() {
    imageObjects.push(new ImageObject("Catafro.died, T.", imageSrc[0], "A woman sitting on a floor with her body angled to our left nearly fills this stylized, vertical painting.", "Rozeal (formerly known as iona rozeal brown)", "2011"));
    imageObjects.push(new ImageObject("¡Cesen Deportación!", imageSrc[1], "Black Silhouette of barbed wire over a red background.", "Rupert García", "1973"));
    imageObjects.push(new ImageObject("Magnolia", imageSrc[2], "A person in a dress holding a mirror that shows their side profile.", "Graciela Iturbide", "1990"));
}
function btnClick() {
    var selectedImage;
    while (true) {
        selectedImage = Math.floor(Math.random() * (imageObjects.length));
        if (selectedImage != lastImage){
            console.log(selectedImage);
            var imgObj = imageObjects[selectedImage];
            imgObj.updateImage();
            lastImage = selectedImage;
            break
        }
        else {

        }
        
    }
    
        
}
class ImageObject {
    constructor(title, image, description, author, imageYear) {
        this.title = title;
        this.image = image;
        this.description = description;
        this.author = author;
        this.imageYear = imageYear;
    }
    updateImage() {
        document.getElementById("Title").innerHTML = this.title;
        document.getElementById("Image").src = this.image;
        document.getElementById("Description").innerHTML = this.description;
        document.getElementById("Author").innerHTML = this.author;
        document.getElementById("ImageYear").innerHTML = this.imageYear;
        console.log("image updated");
}}