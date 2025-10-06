document.getElementById("button-search").addEventListener("click", () => {
    let search = document.getElementsByClassName("search");
    let close = document.getElementsByClassName("close");
    let section_insured_open_close = document.getElementById("section-insured-open-close");
    if(close[0].style.display == "block") {
        close[0].style.display = "none";
        search[0].style.display = "block";

        if(section_insured_open_close.style.display == "flex") {
            section_insured_open_close.style.display = "none";
        }

        else {
            section_insured_open_close.style.display = "flex";
        }
    }

    else {
        close[0].style.display = "block";
        search[0].style.display = "none";

        if(section_insured_open_close.style.display == "flex") {
            section_insured_open_close.style.display = "none";
        }

        else {
            section_insured_open_close.style.display = "flex";
        }
    }
});


function indicators() {
    document.getElementsByClassName("circle")[0].style.backgroundColor = "rgb(134, 0, 0)";
}








const slider = document.getElementById("slider");
    const currentValue = document.getElementById("currentValue");

    function formatNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    slider.addEventListener("input", () => {
      currentValue.textContent = formatNumber(slider.value);
    });




  function updateSliderFill() {
    const min = Number(slider.min);
    const max = Number(slider.max);
    const val = Number(slider.value);
    const percent = ((val - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, red ${percent}%, #ddd ${percent}%)`;
  }

  slider.addEventListener("input", updateSliderFill);
  updateSliderFill(); // при загрузке страницы


    const todayInput = document.getElementById('today');
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    todayInput.value = `${yyyy}-${mm}-${dd}`;


    document.getElementById("search-result").addEventListener("click", () => {
        const result = document.getElementById("result");
        const link_next = document.getElementById("link-next");
        if(result.style.display == "flex") {
            result.style.display = "none";
            link_next.style.display = "none";
        }

        else {
            result.style.display = "flex";
            link_next.style.display = "block";
        }
    });

    document.getElementById("button-next").addEventListener("click", () => {
        const kad = document.getElementById("kad");
        if(kad.style.display == "flex") {
            kad.style.display = "none";
        }

        else {
            kad.style.display = "flex";
        }
    });