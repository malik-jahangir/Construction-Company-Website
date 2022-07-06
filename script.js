const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
const workSlider = document.querySelector('.work-slider');
const expertiesList = document.querySelector('.experties-list');
const workItem = document.querySelectorAll('.work-item');
indexNo = document.querySelector('.index-change');
dot = document.querySelectorAll('.slide-dot');

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    speed: 500,
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.right',
      prevEl: '.left',
    },
    autoplay: {
        delay: 4500,
      },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },


    // slidesPerView: "auto",
    // spaceBetween: 40,
    centeredSlides:true,
    // slidesPerGroup:1,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      // when window width is >= 640px
      1100: {
        slidesPerView: 'auto',
        spaceBetween: 120
      }
    }

  });
  

  // rightArrow.addEventListener('click',()=>{
  //   console.log((swiper.realIndex))
  //   })

    swiper.on('slideChange', function () {
      indexNo.innerHTML = `0${swiper.realIndex+1}`;

    
      workItem.forEach((i,j)=>{
        
if (j!=swiper.realIndex){
  i.classList.remove('li-active')
}
else{
  i.classList.add('li-active')
}
      })

      dot.forEach((i,j)=>{
        
        if (j!=swiper.realIndex){
          i.classList.remove('dot-active')
        }
        else{
          i.classList.add('dot-active')
        }
              })

    });

