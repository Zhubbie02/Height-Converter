document.getElementById('value').addEventListener('input', function(e){
    let metre = e.target.value;
    document.getElementById('cm').innerHTML= metre*100
    document.getElementById('inch').innerHTML= metre*39.3701
    document.getElementById('ft').innerHTML= metre*3.28084
})