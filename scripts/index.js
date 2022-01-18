function load()
{
    var time = window.document.querySelector('.time')
    var image = window.document.querySelector('.image')
    var verse = window.document.querySelector('.verse')
    var text = window.document.querySelector('.text')
    
    var date = new Date()
    var hours = date.getHours()

    if (hours >= 6 && hours < 12)
    {
        document.body.style.backgroundColor = '#FEEAB8'
        image.src = "images/dawn.png"
        verse.innerHTML = `Salmo 143:8`
        text.innerHTML = `Faze-me ouvir do teu amor leal pela manhã, pois em ti confio. Mostra-me o caminho que devo seguir, pois a ti elevo a minha alma`
    }
    else if (hours >= 12 && hours < 18)
    {
        document.body.style.backgroundColor = '#B9846F'
        image.src = "images/cross.png"
        verse.innerHTML = `Filipenses 2:8`
        text.innerHTML = `E, sendo encontrado em forma humana, humilhou-se a si mesmo e foi obediente até à morte, e morte de cruz!`
    }
    else
    {
        document.body.style.backgroundColor = '#2F3549'
        image.src = "images/lamp.png"
        verse.innerHTML = `Salmos 119:105`
        text.innerHTML = `A tua palavra é lâmpada que ilumina os meus passos e luz que clareia o meu caminho.`
    }

    if (hours >= 2)
    {
        time.innerHTML = `Agora são ${hours} horas`
    }
    else 
    {
        time.innerHTML = `Agora é ${hours} hora`
    }
}
