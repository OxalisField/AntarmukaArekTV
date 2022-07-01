const featuredVideo = document.querySelector('#featured');
const closeFeatured = document.querySelector('#close-button');
let pipIsClosed = false;

// window.onscroll = function () {
//     if (window.matchMedia("(min-width: 992px)").matches) {
//         if ((document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) && pipIsClosed == false) {
//             // featuredVideo.classList.remove('featured');
//             // featuredVideo.classList.add('pip');
//             closeFeatured.classList.add('d-inline-block');
//             closeFeatured.classList.remove('d-none');
//             }
//         else{
//             // featuredVideo.classList.remove('pip');
//             // featuredVideo.classList.add('featured');
//             closeFeatured.classList.add('d-none');
//             closeFeatured.classList.remove('d-inline-block');
//         }
        
//         closeFeatured.addEventListener("click", () => {
//             // featuredVideo.classList.remove('pip');
//             // featuredVideo.classList.add('featured');
//             // featuredVideo.pause();
//             closeFeatured.classList.add('d-none');
//             closeFeatured.classList.remove('d-inline-block');
//             pipIsClosed = true;
//         } );
//       } else {
//         closeFeatured.classList.add('d-none');
//         closeFeatured.classList.remove('d-inline-block');
//       }
    
// }

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
    
// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
    // slidesPerGroup: 3,
    loop: true,
    freeMode: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// Streaming
fluidPlayer(
  'featured',
  {
    layoutControls: {
      "controlBar": {
        "autoHideTimeout": 3,
        "animated": true,
        "autoHide": true
      },
      "htmlOnPauseBlock": {
        "html": null,
        "height": null,
        "width": null
      },
      // "autoPlay": true,
      "mute": false,
      "allowTheatre": false,
      "playPauseAnimation": true,
      "playbackRateEnabled": true,
      "allowDownload": false,
      "playButtonShowing": false,
      "fillToContainer": true,
      "posterImage": ""
    },
    "vastOptions": {
      "adList": [],
      "adCTAText": false,
      "adCTATextPosition": ""
    }
  });