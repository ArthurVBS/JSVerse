const verse = {
  morning: {
    imageSRC: 'images/dawn.png',
    verse: 'Psalm 143:8',
    text: 'Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life.',
    color: '#FEEAB8'
  },
  afternoon: {
    imageSRC: 'images/cross.png',
    verse: 'Philippians 2:8',
    text: 'And being found in appearance as a man, he humbled himself by becoming obedient to death— even death on a cross!',
    color: '#B9846F'
  },
  night: {
    imageSRC: 'images/lamp.png',
    verse: 'Psalm 119:105',
    text: 'Your word is a lamp for my feet, a light on my path.',
    color: '#2F3549'
  }
}

const load = () => {
  const date = new Date()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  displayVerse(hours, minutes)
}

const displayVerse = (hours, minutes) => {
  const $time = window.document.querySelector('.time')
  const $image = window.document.querySelector('.image')
  const $verse = window.document.querySelector('.verse')
  const $text = window.document.querySelector('.text')

  $time.innerHTML = `It's ${hours}:${minutes}`

  if (hours >= 6 && hours < 12) {
    document.body.style.backgroundColor = verse.morning.color
    $image.src = verse.morning.imageSRC
    $verse.innerHTML = verse.morning.verse
    $text.innerHTML = verse.morning.text
  }
  else if (hours >= 12 && hours < 18) {
    document.body.style.backgroundColor = verse.afternoon.color
    $image.src = verse.afternoon.imageSRC
    $verse.innerHTML = verse.afternoon.verse
    $text.innerHTML = verse.afternoon.text
  }
  else {
    document.body.style.backgroundColor = verse.night.color
    $image.src = verse.night.imageSRC
    $verse.innerHTML = verse.night.verse
    $text.innerHTML = verse.night.text
  }
}
