var playConfirm = 'play'
var playBtn = document.getElementById('playBtn');

document.getElementById('playBtn').value = ''
playBtn.addEventListener('keyup', function(){
    if(playBtn.value.length >= 4){
        if(playBtn.value == 'play'){
            playBtn.setAttribute('disabled','')
            window.location.href = 'game.html'
        }
        else {
            document.getElementById('playBtn').value = ''
            console.log('honaka lamsat yad')
        }
    }
});
