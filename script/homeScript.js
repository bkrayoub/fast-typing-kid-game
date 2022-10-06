var playConfirm = 'play'
var playBtn = document.getElementById('playBtn');

playBtn.addEventListener('keyup', function(){
    if(playBtn.value.length >= 4){
        if(playBtn.value == 'play'){
            console.log('m9awed')
            playBtn.setAttribute('disabled','')
        }
        else {
            document.getElementById('playBtn').value = ''
            console.log('honaka lamsat yad')
        }
    }
});