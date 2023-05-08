function buttonClick(){
  url = 'https://www.google.co.jp/search?q="+' + nameText.value + ' site:https://www.machijunblog.netlify.app+"';
window.open(url, '_blank')
}

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);