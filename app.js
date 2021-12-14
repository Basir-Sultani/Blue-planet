/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")){
      x.classList.remove("responsive");
    } else {
      x.classList.add("responsive");
    }
  }

/* change navbar color on scroll. */
function changeNv(){
    var navbar = document.getElementById('myTopnav');
    var scrollValue = window.scrollY;
    if(scrollValue < 250){
      navbar.classList.remove('nvColor');
    } else{
      navbar.classList.add('nvColor');
    }
    
}
window.addEventListener('scroll', changeNv);