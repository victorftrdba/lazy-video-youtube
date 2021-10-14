<script>
let youtube = document.querySelector('.youtube')

let image = new Image()

image.src = '/assets/img/2021/assistanossovideo.jpg'

image.addEventListener('load', function() {
    image.width = '770'
    image.style.cursor = 'pointer'
    image.height = '460'
    youtube.appendChild(image)
})

youtube.addEventListener('click', function() {
    let iframe = document.createElement('iframe')

    iframe.setAttribute('frameborder', '0')
    iframe.setAttribute('allowfullscreen', '')
    iframe.setAttribute('height', '460')
    iframe.setAttribute('width', '770')
    iframe.setAttribute('src', "https://www.youtube.com/embed/" + this.getAttribute('data-embed') +
        "?rel=0&showinfo=0&autoplay=1")
    iframe.setAttribute('allow', 'autoplay')

    this.innerHTML = ''
    this.appendChild(iframe)
})
</script>
