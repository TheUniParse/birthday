import './party.scss'
import audioParty from './assets/m.mp3'
import audioClick from './assets/click.wav'
import audioFalse from './assets/false.wav'
import audioTrue from './assets/true.wav'
import audioSuccess from './assets/success.wav'
import audioFireworks from './assets/fireworks1.wav'

const birthday = document.querySelector('#birthday')
birthday.innerHTML = `
  <h1></h1>
  <h1>›_~</h1>
  <audio src=${audioClick} preload=auto></audio>
  <audio src=${audioTrue} preload=auto></audio>
  <audio src=${audioFalse} preload=auto></audio>
  <audio src=${audioSuccess} preload=auto></audio>
  <audio src=${audioFireworks} preload=auto></audio>
  <audio src=${audioParty} preload=auto loop></audio>
`
const h1 = document.querySelectorAll('h1')
const audio = document.querySelectorAll('audio')
const stars = document.querySelectorAll('#stars,#stars2,#stars3')
const dialog = document.querySelector('dialog')
const select = document.querySelector('select')
const date = document.querySelector('input[type=date]')
const output = document.querySelectorAll('output')
const btn = document.querySelector('button')

function fun() {
  h1[0].style.animation = 'hb 1.5s infinite alternate cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  h1[1].style.animation = 'hb 1.5s infinite alternate cubic-bezier(0.25, 0.46, 0.45, 0.94)';
  birthday.addEventListener('click', e => {
    e.stopPropagation()
    audio[5].play()
    party.confetti(h1[1], { count: party.variation.range(9, 20) })
    h1[0].innerText = 'Happy Birthday'
    h1[0].setAttribute('data-content', '🎊')
    h1[1].innerText = 'Mechid'
    h1[1].setAttribute('data-contentBefore', '🎉')
    h1[1].setAttribute('data-contentAfter', '🥳')
    for (let i = 0; i < 3; i++) {
      stars[i].style.animation = `stars${i + 1} 60s 1s ease-in-out infinite alternate`
    }
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
  document.addEventListener('DOMContentLoaded', () => {
    dialog.showModal();
    dialog.addEventListener('click', () => audio[0].play())
    select.addEventListener('change', () => {
      if (date.value == '2000-01-15' && select.value == 2014) {
        audio[3].play()
        select.disabled = true
        btn.disabled = false
        output[0].style.color = 'greenyellow'
        output[0].innerHTML = 'Yes😁 <b>2014 ✓</b>\nit\'s was awesome 8 years of <b>friendship</b>!!'
      } else if (select.value == 2014) {
        audio[1].play()
        select.disabled = true
        output[0].style.color = 'greenyellow'
        output[0].innerHTML = 'Yes😁 <b>2014 ✓</b>\nit\'s was awesome 8 years of <b>friendship</b>!!'
      } else {
        audio[2].play()
        output[0].style.color = 'darkorange'
        output[0].innerHTML = `Nooo😅 we meet on <span>2014 ✓</span> not <span>${select.value}✗</span> !!`
      }
    })
    date.addEventListener('change', () => {
      if (date.value == '2000-01-15' && select.value == 2014) {
        audio[3].play()
        date.disabled = true
        btn.disabled = false
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
        output[1].innerHTML = `Nooo😅 my birthday on <span>15<sup><small>th</small></sup> january ✓</span> not <span>${date.value}✗</span> !!`
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
