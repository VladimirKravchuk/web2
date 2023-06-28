function gen () {
    const a = (Math.round(Math.random() * (10 - 1)) + 1)
    const b = (Math.round(Math.random() * (10 - 1)) + 1)
    return [a + ' x ' + b + ' = ', a * b]
  }
  
  let current = gen()
  document.getElementById('task').innerHTML = current[0]
  
  function check () {
    if (+document.getElementById('correct').innerHTML + +document.getElementById('incorrect').innerHTML === 9) {
      document.body.innerHTML = `Результат:${document.getElementById('correct').innerHTML * 10} %`
      document.body.style.fontSize = '20px'
    }
    ++document.getElementById(+document.getElementById('answer').value === current[1] ? 'correct' : 'incorrect').innerHTML
    current = gen()
    document.getElementById('task').innerHTML = current[0]
  }