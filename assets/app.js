

// function toggleButton(){
//     const input = document.querySelector('.input').value;
//     const btn = document.querySelector('.button');
    
//     if (input.value=="start") {
//         btn.disable = true;
//     } else {
//         btn.disable = false;
//     }
    
// }



function toggleButton()
{
    var username = document.getElementById('username').value.toLowerCase();
  

    if (username=="start") {
        document.getElementById('submitButton').disabled = false;
    } else {
        document.getElementById('submitButton').disabled = true;
    }
}


