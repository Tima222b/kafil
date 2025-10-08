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


    
  




  function pad(n) {
      return n < 10 ? '0' + n : n;
    }

    function updateDateTime() {
      const now = new Date();

      // Форматируем дату и время
      const year = now.getFullYear();
      const month = pad(now.getMonth() + 1);
      const day = pad(now.getDate());
      const hours = pad(now.getHours());
      const minutes = pad(now.getMinutes());
      const seconds = pad(now.getSeconds());

      // Устанавливаем в реальный инпут
      document.getElementById('real-date').value = `${year}-${month}-${day}`;
      document.getElementById('real-time').value = `${hours}:${minutes}:${seconds}`;

      // Фиксированная дата 07.10.2026
      const fakeDate = `2026-10-07`;
      document.getElementById('fake-date').value = fakeDate;
      document.getElementById('fake-time').value = `${hours}:${minutes}:${seconds}`;
    }

    // Обновление каждую секунду
    updateDateTime();
    setInterval(updateDateTime, 1000);










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