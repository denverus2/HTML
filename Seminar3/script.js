function askName() {
  var userName = prompt('Как вас зовут?')
  document.getElementById('userName').textContent = "Привет, " + userName
}