    <script>
        var playConfirm = 'play'
        var playBtn = document.getElementById('play');

        playBtn.addEventListener('keyup', function(){
            if(playBtn.value.length >= 4){
                if(playBtn.value == 'play'){
                    console.log('m9awed')
                    playBtn.setAttribute('disabled','')
                }
                else {
                    document.getElementById('play').value = ''
                    console.log('honaka lamsat yad')
                }
            }
        });
    </script>
