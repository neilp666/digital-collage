const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg"
]

let i = 0

function placeImage(x, y) {

    const nextImage = images[1]

    const img = document.createElement("img")
    img.setAttribute('src', nextImage)

}

placeImage(500, 400)
placeImage(400, 500)
placeImage(600, 300)