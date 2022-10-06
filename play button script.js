
        var playConfirm = 'play'
        var playBtn = document.getElementById('play');

        playBtn.addEventListener('keyup', function(){
            if(playBtn.value.length >= 4){
                if(playBtn.value == 'play'){
                    playBtn.setAttribute('disabled','')
                    window.location.href = 'google.com'
                }
                else {
                    document.getElementById('play').value = ''
                }
            }
        });

