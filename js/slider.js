(function(){

    const sliders = [...document.querySelectorAll(".news-body")];
    const buttonNext = document.querySelector("#next");
    const buttonBefore = document.querySelector("#before");
    let vaule;

    buttonNext.addEventListener("click",()=>{
        changePosition(1);
    });

   buttonBefore.addEventListener("click",()=>{
        changePosition(-1);
    });

   const changePosition = (add)=>{
    const currentNews = document.querySelector(".news-body-show").dataset.id;
    vaule = Number(currentNews);
    vaule+= add;


    sliders[Number(currentNews)-1].classList.remove("news-body-show");
    if (vaule == sliders.length+1 || vaule ===0 ){
        vaule = vaule === 0 ? sliders.length: 1;
    }
    sliders[vaule-1].classList.add("news-body-show");
   }
 })();