document.querySelector(`#submit-button`).addEventListener(`click`, () => {
  const userInput = document.querySelector(`#emagi-input`).value
  const userOutput = document.querySelector(`#results`)
  const radioButton = document.querySelectorAll(`.radio-button`)
  let checkedValue = ``
  for (const item of radioButton) {
    if (item.checked === true) {
      checkedValue += item.value
    }
  }
  switch (checkedValue) {

    case `encode`:
      userOutput.innerText = encode(userInput)
      break;

    case `translate`:
      userOutput.innerText = translate(userInput)
      break;

    case `madlib`:
      userOutput.innerText = madlib(userInput)
      break;

    case `search`:
      const newArr = search(userInput)
      userOutput.innerHTML = ''
      for (const item of newArr) {
        const newPara = document.createElement(`P`)
        newPara.innerText = item.symbol
        userOutput.appendChild(newPara)
      }
      break;

    case `random`:
      if (userInput.length === 0) {
        userOutput.innerText = randomElement(emojis).symbol
      } else if (userInput.length > 0) {
        userOutput.innerText = randomElement(getCategory(userInput)).symbol
      } else {
        window.alert(`Invalid input. Please try again.`)
      }
      
    default:
      console.alert( `Welcome. Please select an option to get started!`)
      // window.alert(`Welcome. Please select an option to get started!`)

  }
})
