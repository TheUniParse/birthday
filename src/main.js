// ★▶►▬•»›▲♥⚠️💡±×÷²√π⁰≠≈≤≥Ø∞✓✗✖ € ← → ↑ ↓ ⇆♪©Ⓓ†₱…
import './sass/main.scss'
import './mediaIcons'
import showMedias from './mediaIcons'
import audioBirthday from './assets/birthday.mp3'
import audioClick from './assets/click.wav'
import audioFalse from './assets/false.wav'
import audioTrue from './assets/true.wav'
import audioSuccess from './assets/success.wav'
import audioFireworks from './assets/fireworks.wav'
import audioIntro from './assets/intro.mp3'
import audioBoom from './assets/boom.wav'


const birthday = document.querySelector('#birthday')
birthday.innerHTML = `
  <h1></h1>
  <h1>${spanLetters('loading…')}</h1>
  <audio src=${audioClick} preload=auto></audio>
  <audio src=${audioTrue} preload=auto></audio>
  <audio src=${audioFalse} preload=auto></audio>
  <audio src=${audioSuccess} preload=auto></audio>
  <audio src=${audioFireworks} preload=auto></audio>
  <audio src=${audioBirthday} preload=auto loop></audio>
  <audio src=${audioIntro} preload=auto loop></audio>
  <audio src=${audioBoom} preload=auto></audio>
`
const h1 = document.querySelectorAll('h1'),
  audio = document.querySelectorAll('audio'),
  stars = document.querySelectorAll('#stars1,#stars2,#stars3'),
  dialog = document.querySelector('dialog'),
  select = document.querySelector('select'),
  date = document.querySelector('input[type=date]'),
  output = document.querySelectorAll('output'),
  btn = document.querySelector('button')


function spanLetters(str) {
  let span = ''
  for (let i = 0; str.length > i; i++) {
    if (str[i] !== ' ') {
      span += `<span>${str[i]}</span>`
    } else {
      span += ' '
    }
  }
  return span
}

function fun() {
  h1[1].innerHTML = spanLetters('›_~')
  h1[0].style.animation = 'hb 1.5s infinite alternate cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  h1[1].style.animation = 'hb 1.5s infinite alternate cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  birthday.addEventListener('click', e => {
    e.stopPropagation()
    audio[6].pause()
    audio[6].currentTime = 0
    audio[7].play()
    audio[5].play()
    party.confetti(h1[1], { count: party.variation.range(34, 35) })
    h1[0].innerHTML = spanLetters('Happy Birthday')
    h1[0].setAttribute('data-content', '🎊')
    h1[1].innerHTML = spanLetters('Mechid')
    h1[1].setAttribute('data-contentBefore', '🎉')
    h1[1].setAttribute('data-contentAfter', '🥳')
    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        stars[i].style.animation = `stars${i + 1} 60s ease-in-out infinite alternate`
      }
    }, 1000)
    setTimeout(() => showMedias(audio), 10000)
  }, { once: true })
  document.addEventListener('click', e => {
    audio[4].play()
    party.sparkles(e, {
      count: party.variation.range(3, 7),
      size: party.variation.range(0.8, 1.2),
    })
  })
}

if (typeof dialog.showModal === "function") {
  window.addEventListener('load', () => {
    console.log('loaded')
    dialog.showModal()
    dialog.addEventListener('click', () => audio[0].play())
    dialog.addEventListener('click', () => audio[6].play(), { once: true })
    select.addEventListener('change', () => {
      if (date.value == '2000-01-15' && select.value == 2014) {
        audio[3].play()
        select.disabled = true
        btn.disabled = false
        btn.innerText = 'Unlocked'
        btn.setAttribute('data-lock', '🔑')
        output[0].style.color = 'greenyellow'
        output[0].innerHTML = `Yes😁 <b>2014 ✓</b><br>it\'s was awesome ${(new Date().getFullYear()) - 2014} years of <b>friendship</b>!!`
      } else if (select.value == 2014) {
        audio[1].play()
        select.disabled = true
        output[0].style.color = 'greenyellow'
        output[0].innerHTML = `Yes😁 <b>2014 ✓</b><br>it\'s was awesome ${(new Date().getFullYear()) - 2014} years of <b>friendship</b>!!`
      } else {
        audio[2].play()
        output[0].style.color = 'darkorange'
        output[0].innerHTML = `Nooo😅 we meet on <span>2014 ✓</span><br>not <span>${select.value}✗</span> !!`
      }
    })
    date.addEventListener('change', () => {
      if (date.value == '2000-01-15' && select.value == 2014) {
        audio[3].play()
        date.disabled = true
        btn.disabled = false
        btn.innerText = 'Unlocked'
        btn.setAttribute('data-lock', '🔑')
        output[1].style.color = 'greenyellow'
        output[1].innerHTML = 'Yes😁 <b>15<sup><small>th</small></sup> january ✓</b> !!<br>you\'re younger than me by <b>135</b> day!!'
      } else if (date.value == '2000-01-15') {
        audio[1].play()
        date.disabled = true
        output[1].style.color = 'greenyellow'
        output[1].innerHTML = 'Yes😁 <b>15<sup><small>th</small></sup> january ✓</b> !!<br>you\'re younger than me by <b>135</b> day!!'
      } else {
        audio[2].play()
        output[1].style.color = 'darkorange'
        output[1].innerHTML = `Nooo😅 my birthday on <span>15<sup><small>th</small></sup> january ✓</span> <br>not <span>${date.value}✗</span> !!`
        date.value = '2000-01-29'
      }
    })
    dialog.addEventListener('close', () => fun(), { once: true })
  })
} else {
  dialog.hidden = true;
  let access = prompt('😎Hi mechid✨, We\'ve create for u a Gift🎁\nbut first, u need to answer the question:\nwich year our first meeting?', '')
  if (access == '2014') {
    alert('Yes😁 2014!!\nit\'s was awesome 8 years of friendship!!')
  } else if (access.startsWith('201')) {
    alert(`Nooo😅 we meet on 2014 not "${access}"!!\nit\'s was awesome 8 years of friendship!!`)
  } else if (!(access.startsWith('201'))) {
    while (!(access.startsWith('201'))) {
      access = prompt(`⚠️warning "${access}" not a number!!\n💡 our first meeting year was:    201#`, '')
    } if (access == '2014') {
      alert('Yes😁 2014!!\nit\'s was awesome 8 years of friendship!!')
    } else if (access.startsWith('201')) {
      alert(`Nooo😅 we meet on 2014 not "${access}"!!\nit\'s was awesome 8 years of friendship!!`)
    }
  }
  fun()
}
//alert('done')
