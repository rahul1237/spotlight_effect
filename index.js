const main = document.querySelector('.main_box')

main.addEventListener('mousemove',(e)=>{
    const mouse = document.querySelector('.mouse')
    mouse.style.clipPath = `circle(4em at ${e.offsetX}px ${e.offsetY}px)`
})