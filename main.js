let img = document.querySelector('#images')
let natural = document.querySelector('#natural')
let black = document.querySelector('#black')
let white = document.querySelector('#white')
let blue = document.querySelector('#blue')

natural.onclick = () => {

    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-naturaltitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846363993')
}
black.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846357018')


}
white.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-whitetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846367180')


}
blue.onclick = () => {
    img.setAttribute('src', 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-15-pro-finish-select-202309-6-1inch-bluetitanium?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1692846360609')


}

let openBtn = document.querySelector('.open')
let closeBtn = document.querySelector('.close')
let modul_w = document.querySelector('.dfdfe')
let img_apple = document.querySelector('#images')
openBtn.onclick = () => {
    modul_w.style.display = "flex"
    img_apple.style.display = "none"

}
closeBtn.onclick = () => {
    modul_w.style.display = "none"
    img_apple.style.display = "flex"
}

let select = document.querySelector('#select')

select.onclick = () => {
    select.style.border = "1px solid rgb(0, 113, 227)"
}
