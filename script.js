const featuredVideo = document.querySelector('#featured');
const closeFeatured = document.querySelector('#close-button');
let pipIsClosed = false;

window.onscroll = function () {
    if (window.matchMedia("(min-width: 992px)").matches) {
        if ((document.documentElement.scrollTop > 635 || document.body.scrollTop > 635) && pipIsClosed == false) {
            featuredVideo.classList.remove('featured');
            featuredVideo.classList.add('pip');
            closeFeatured.classList.add('d-inline-block');
            closeFeatured.classList.remove('d-none');
            }
        else{
            featuredVideo.classList.remove('pip');
            featuredVideo.classList.add('featured');
            closeFeatured.classList.add('d-none');
            closeFeatured.classList.remove('d-inline-block');
        }
        
        closeFeatured.addEventListener("click", () => {
            featuredVideo.classList.remove('pip');
            featuredVideo.classList.add('featured');
            featuredVideo.pause();
            closeFeatured.classList.add('d-none');
            closeFeatured.classList.remove('d-inline-block');
            pipIsClosed = true;
        } );
      } else {
        closeFeatured.classList.add('d-none');
        closeFeatured.classList.remove('d-inline-block');
      }
    
}

// Modal Promo Acara
const promoAcara = document.getElementById('promoAcara');
const videoPromo = document.getElementById('promo');
promoAcara.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes
  const videoSource = button.getAttribute('data-bs-source');
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  videoPromo.setAttribute('src', videoSource)
})

promoAcara.addEventListener('shown.bs.modal', () => {
    videoPromo.play();
})

promoAcara.addEventListener('hide.bs.modal', () =>{
    videoPromo.pause();
})
    
    
    
