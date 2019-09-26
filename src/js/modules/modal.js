function modal() {
    
  const more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        descriptionBtn = document.querySelectorAll(".description-btn");

  function showModal() {
    overlay.style.display = "block";
    this.classList.add("more-splash");
    document.body.style.overflow = "hidden";
  }

  more.addEventListener("click", function() {
    let show = showModal.bind(this);
    show();
  });

  descriptionBtn.forEach(function(item) {
    item.addEventListener("click", function() {
      let show = showModal.bind(this);
      show();
    });
  });

  close.addEventListener("click", function() {
    overlay.style.display = "none";
    more.classList.remove("more-splash");
    document.body.style.overflow = "";
  });
}

module.exports =  modal;
