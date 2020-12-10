function menuToggle(){
	var nav = document.getElementById('nav-links');
	nav.classList.toggle('active');
}

function togglePopup1(){
	document.getElementById('popup-1').classList.toggle('active');
}

function togglePopup2(){
	document.getElementById('popup-2').classList.toggle('active');
}

window.scrollTo(0, 0);

/*

      var prevScrollpos = window.pageYOffset;
      window.onscroll = function() {

      var currentScrollpos = window.pageYOffset;
      if(prevScrollpos > currentScrollpos) {
            document.getElementById("navbar").style.top = "0";
      } else {
            document.getElementById("navbar").style.top = "-100px";
      }

      prevScrollpos = currentScrollpos;

      }

      */
