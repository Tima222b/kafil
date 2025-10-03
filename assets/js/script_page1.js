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