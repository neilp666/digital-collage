const images = [
    "images/image1.jpg", "images/image2.jpg", "images/image3.jpg",
    "images/image4.jpg", "images/image5.jpg", "images/image6.jpg",
    "images/image7.jpg"
]

let i = 0

function placeImage(x, y) {

    const nextImage = images[i]

    const img = document.createElement("img")
    img.setAttribute("src", nextImage)
    img.style.left = x + "px"
    img.style.top = y + "px"

    document.body.appendChild(img)

    i = i + 1

    if (i >= images.length) {
        i = 0
    }

}

document.addEventListener("click", function (event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})

document.addEventListener("touchend", function(event) {
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})