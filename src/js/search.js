function butotnClick(){
  url = 'https://www.google.co.jp/search?q="+' + nameText.value + ' site:machijunblog.netlify.app+"';
window.open(url, '_blank')
}

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', butotnClick);