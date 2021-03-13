function godown ()
{ document.getElementById("down").scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to div "down".
}


//This function is to copy email address to clipboard
function myFunction() {
    var copyText = document.getElementById("myInput");

    copyText.select();
    copyText.setSelectionRange(0, 99999);

    document.execCommand("copy");

    alert("Copied email address: " + copyText.value);
}


var navbar = document.querySelector('nav')

window.onscroll = function() {

    // pageYOffset or scrollY
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled')
    } else {
        navbar.classList.remove('scrolled')
    }
}

