 //const items = document.querySelectorAll('.item')

const items = document.getElementsByClassName('item')
console.log(items);

// for (let i = 0; i < items.length; i++) {
//   const item = items[i]

//   item.addEventListener('click', function () {
//     item.classList.toggle('done')
//   })
// }

//Уберём ранее написанный код, где мы добавляли множество обработчиков событий с помощью цикла for, и реализуем делегирование:
const list = document.querySelector('.list')

// Делегируем обработку кликов на уровне списка
list.addEventListener('click', function (event) {
  const targetElement = event.target

  // Проверяем, был ли клик совершен по элементу списка (li с классом 'item')
  if (targetElement.classList.contains('item')) { // или можно написать в условии target.tagName === "LI"
    targetElement.classList.toggle('done')
  }
})




const form = document.querySelector('.form')

form.addEventListener('submit', function (event) {
  event.preventDefault() // добавляем вызов метода preventDefault

  const input = document.querySelector('.input')
  const text = input.value
  input.value = ''
  const list = document.querySelector('.list')

  // list.innerHTML += `<li class="item">${text}</li>`

  // Создаем новый элемент списка через createElement
  const newItem = document.createElement('li')
  newItem.classList.add('item')
  newItem.textContent = text

  // Добавляем новый элемент в список
  list.append(newItem)

})


//ищем resetButton
const resetButton = document.querySelector('#reset-button')

// resetButton.addEventListener('click', function () {
//   setTimeout(function () {
//     const items = document.querySelectorAll('.item')

//     for (let i = 0; i < items.length; i++) {
//       const listItem = items[i]

//       listItem.classList.remove('done')
//     }
//   }, 3000)
// })

// Изменяем поведение кнопки так, чтобы она позволяла отменить запланированное действие сброса:

let timeoutId // Хранение идентификатора таймера
let isTimerStarted = false // Флаг, указывающий на то, запущен ли таймер

resetButton.addEventListener('click', function () {
  if (isTimerStarted) {
    clearTimeout(timeoutId) // Отменяем таймер по id, который хранится в переменной
    resetButton.textContent = 'Сброс ✖'
    isTimerStarted = false
  } else {
    resetButton.textContent = 'Отмена'
    isTimerStarted = true

    timeoutId = setTimeout(function () {
      const items = document.querySelectorAll('.item')

      for (let i = 0; i < items.length; i++) {
        const listItem = items[i]

        listItem.classList.remove('done')
      }

      resetButton.textContent = 'Сброс ✖'
      isTimerStarted = false
    }, 3000)
  }
})