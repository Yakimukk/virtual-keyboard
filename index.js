const body = document.querySelector('body')
const textarea = document.createElement('textarea')
const keysContainer = document.createElement('div')
textarea.setAttribute('autofocus', 'autofocus')
keysContainer.className = 'keys-container'


body.appendChild(textarea)
body.appendChild(keysContainer)
body.insertAdjacentHTML('beforeend', '<p class="instruction">Переключение языка - левые Shift и Alt на физической клавиатуре. Клавиатура сделана в системе Windows</p>')

function disable() { document.onkeydown = () => false } disable()

const enList = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter'],
  ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#9652', 'Shift'],
  ['Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl'],
]
const enListUp = [
  '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
  'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', 'Del',
  'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', '|', 'Enter',
  'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#9652', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl',
]
const ruList = [
  'ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
  'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Del',
  'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter',
  'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#9652', 'Shift',
  'Ctrl', 'Win', 'Alt', ' ', 'Alt', '&#9666', '&#9662', '&#9656', 'Ctrl',
]
const ruListUp = [
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

const oneDimensionalList = []

for (let j = 0; j < enList.length; j += 1) {
  const row = document.createElement('div')
  row.classList.add('keybord-row')
  keysContainer.append(row)

  for (let i = 0; i < enList[j].length; i += 1) {
    const key = document.createElement('li')
    key.classList.add('key')
    row.append(key)
    oneDimensionalList.push(enList[j][i])
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
    valuesKeys(oneDimensionalList) 
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

backspace.classList.add('functional');
tab.classList.add('functional');
del.classList.add('functional');
capsLock.classList.add('functional');
enter.classList.add('functional');
shiftLeft.classList.add('functional');
arrUp.classList.add('functional');
shiftRight.classList.add('functional');
ctrlLeft.classList.add('functional');
win.classList.add('functional');
altLeft.classList.add('functional');
ctrlRight.classList.add('functional');
altRight.classList.add('functional');
arrLeft.classList.add('functional');
arrRight.classList.add('functional');
arrDown.classList.add('functional');