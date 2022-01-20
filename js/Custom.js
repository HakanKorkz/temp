function Custom() {

    const pushMenu = document.getElementById('push-menu');
    const mobilMenu = document.getElementById('mobil-menu');
    const close = document.getElementById('close');

    pushMenu.addEventListener('click', () => {
        const className = pushMenu.classList[0]
        pushMenu.className = `${className} active`
        mobilMenu.classList.remove('hidden')
    })
    close.addEventListener('click', () => {
        const className = pushMenu.classList[0]
        pushMenu.className = `${className}`
        mobilMenu.classList.add('hidden')
    })

}

export default Custom
