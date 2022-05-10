const body = document.querySelector('body')
const textarea = document.createElement('textarea')
const keysContainer = document.createElement('div')
let caps = false
body.appendChild(textarea)
body.appendChild(keysContainer)
body.insertAdjacentHTML('beforeend', '<p>Для переключения языка комбинация: левыe shift + alt. Клавиатура создана в операционной системе Windows</p>')
keysContainer.className = 'keys-container'
const en = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9652', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],
]
const enUp = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9652', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl',
]
const ru = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9652', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl',
]
const ruUp = [
  'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', 'Del',
  'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', '/', 'Enter',
  'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#9652', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', 'Ctrl',
]
const keysList = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Backslash', 'Enter',
  'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight','ControlRight',
]

const valueList = []

for (let j = 0; j < en.length; j += 1) {
  const row = document.createElement('div')
  row.classList.add('keybord-row')
  keysContainer.append(row)

  for (let i = 0; i < en[j].length; i += 1) {
    const key = document.createElement('li')
    key.classList.add('key')
    row.append(key)
    valueList.push(en[j][i])
  }
}

const allKeys = document.querySelectorAll('li')

function valuesKeys(value) {
  for (let i = 0; i < allKeys.length; i += 1) {
    allKeys[i].innerHTML = value[i]
  }
}
const backspace = allKeys[13]
const tab = allKeys[14]
const del = allKeys[27]
const capsLock = allKeys[28]
const enter = allKeys[41]
const shiftLeft = allKeys[42]
const arrUp = allKeys[53]
const shiftRight = allKeys[54]
const ctrlLeft = allKeys[55]
const win = allKeys[56]
const altLeft = allKeys[57]
const space = allKeys[58]
const altRight = allKeys[59]
const ctrlRight = allKeys[63]
const arrLeft = allKeys[60]
const arrRight = allKeys[62]
const arrDown = allKeys[61]

let lang
let languageStorage
let language = JSON.parse(localStorage.getItem(lang))
if (!language) { 
    valuesKeys(valueList) 
} else {
    valuesKeys(language) 
}

backspace.classList.add('backspace')
tab.classList.add('tab')
del.classList.add('delete')
capsLock.classList.add('capsLock')
enter.classList.add('enter')
shiftLeft.classList.add('shiftLeft')
arrUp.classList.add('arrow')
arrUp.classList.add('arrowUp')
shiftRight.classList.add('shiftRight')
ctrlLeft.classList.add('ctrlLeft')
win.classList.add('metaLeft')
altLeft.classList.add('altLeft')
space.classList.add('space')
altRight.classList.add('altRight')
ctrlRight.classList.add('ctrlRight')
arrLeft.classList.add('arrow')
arrLeft.classList.add('arrowLeft')
arrRight.classList.add('arrow')
arrRight.classList.add('arrowRight')
arrDown.classList.add('arrow')
arrDown.classList.add('arrowDown')
backspace.classList.add('functional')
tab.classList.add('functional')
del.classList.add('functional')
capsLock.classList.add('functional')
enter.classList.add('functional')
shiftLeft.classList.add('functional')
arrUp.classList.add('functional')
shiftRight.classList.add('functional')
ctrlLeft.classList.add('functional')
win.classList.add('functional')
altLeft.classList.add('functional')
ctrlRight.classList.add('functional')
altRight.classList.add('functional')
arrLeft.classList.add('functional')
arrRight.classList.add('functional')
arrDown.classList.add('functional')

document.addEventListener('keydown', (event) => {
    let cursorPosition = textarea.selectionStart
    let cursorPositionEnd = textarea.selectionEnd
    const beforeText = textarea.value.slice(0, cursorPosition)
    const afterText = textarea.value.slice(cursorPosition)
    for (let i = 0; i < allKeys.length; i += 1) {
      if (event.code === keysList[i]) {
        allKeys[i].classList.add('keystroke')
        if ((allKeys[i].classList.contains('functional') === false) && (allKeys[i].classList.contains('key'))) {
          textarea.value += allKeys[i].textContent
          cursorPosition += 1
        }
        if (allKeys[i].classList.contains('enter')) {
          textarea.value = `${beforeText}\n${afterText}`
          cursorPosition += 1
        }
        if (allKeys[i].classList.contains('tab')) {
          textarea.value = `${beforeText}\t${afterText}`
          cursorPosition += 1
        }
        if (allKeys[i].classList.contains('backspace')) {
          if (cursorPositionEnd > cursorPosition) {
            textarea.value = textarea.value.slice(0, cursorPosition)
              + textarea.value.slice(cursorPositionEnd)
          } else {
            textarea.value = beforeText.slice(0, -1) + afterText
            cursorPosition = cursorPosition > 0 ? cursorPosition - 1 : 0
          }
        }
        break
      }
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (caps === true) {
        if (allKeys[0].innerHTML === '`') {
          valuesKeys(enUp)
          for (let i = 0; i < allKeys.length; i += 1) {
            if (/^[a-zа-я]$/i.test(allKeys[i].innerHTML)) {
              allKeys[i].innerHTML = allKeys[i].innerHTML.toLowerCase()
            }
          }
        }
        if (allKeys[0].innerHTML === 'ё') {
          valuesKeys(ruUp)
          for (let i = 0; i < allKeys.length; i += 1) {
            if (/^[a-zа-я]$/i.test(allKeys[i].innerHTML)) {
              allKeys[i].innerHTML = allKeys[i].innerHTML.toLowerCase()
            }
          }
        }
      }
      if (caps === false) {
        if (allKeys[0].innerHTML === '`') {
          valuesKeys(enUp)
        }
        if (allKeys[0].innerHTML === 'ё') {
          valuesKeys(ruUp)
        }
      }
    }
})

document.addEventListener('keyup', (event) => {
    for (let i = 0; i < allKeys.length; i += 1) {
      if (event.code === keysList[i]) {
        allKeys[i].classList.remove('keystroke')
        break
      }
    }
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      if (caps === true) {
        if (allKeys[0].innerHTML === '~') {
          valuesKeys(valueList)
          for (let i = 0; i < allKeys.length; i += 1) {
            if (/^[a-zа-я]$/i.test(allKeys[i].innerHTML)) {
              allKeys[i].innerHTML = allKeys[i].innerHTML.toUpperCase()
            }
          }
        }
        if (allKeys[0].innerHTML === 'Ё') {
          valuesKeys(ru)
          for (let i = 0; i < allKeys.length; i += 1) {
            if (/^[a-zа-я]$/i.test(allKeys[i].innerHTML)) {
              allKeys[i].innerHTML = allKeys[i].innerHTML.toUpperCase()
            }
          }
        }
      }
      if (caps === false) {
        if (allKeys[0].innerHTML === '~') {
          valuesKeys(valueList)
        }
        if (allKeys[0].innerHTML === 'Ё') {
          valuesKeys(ru)
        }
      }
    }
})
  
document.addEventListener('keydown', (event) => {
    if (event.code === 'Tab') {
        event.preventDefault()
        textarea.setRangeText('  ', textarea.selectionStart, textarea.selectionStart, 'end')
    }
})
  
document.addEventListener('keydown', (e) => {
    if (e.altKey && e.shiftKey) {
      caps = false
      allKeys[28].classList.remove('keystroke')
      if (allKeys[0].innerHTML === '~') {
        localStorage.clear()
        languageStorage = ru
        localStorage.setItem(lang, JSON.stringify(languageStorage))
        language = JSON.parse(localStorage.getItem(lang))
        valuesKeys(ru)
      }
      if (allKeys[0].innerHTML === 'Ё') {
        localStorage.clear()
        languageStorage = valueList
        localStorage.setItem(lang, JSON.stringify(languageStorage))
        language = JSON.parse(localStorage.getItem(lang))
        valuesKeys(valueList)
      }
    }
})
  
document.addEventListener('keyup', (event) => {
    if (event.code === 'CapsLock') {
      if (caps === false) {
        allKeys[28].classList.add('keystroke')
        for (let i = 0; i < allKeys.length; i += 1) {
          if (/^[a-zа-я]$/i.test(allKeys[i].innerHTML)) {
            allKeys[i].innerHTML = allKeys[i].innerHTML.toUpperCase()
          }
        }
        caps = true
      } else {
        allKeys[28].classList.remove('keystroke')
        for (let i = 0; i < allKeys.length; i += 1) {
          if (/^[a-zа-я]$/i.test(allKeys[i].innerHTML)) {
            allKeys[i].innerHTML = allKeys[i].innerHTML.toLowerCase()
          }
        }
        caps = false
      }
    }
})
  

  

  

  

  