document.getElementById("button-search").addEventListener("click", () => {
    let search = document.getElementsByClassName("search");
    let close = document.getElementsByClassName("close");
    if(close[0].style.display == "block") {
        close[0].style.display = "none";
        search[0].style.display = "block";
    }

    else {
        close[0].style.display = "block";
        search[0].style.display = "none";
    }
});

function indicators() {
    document.getElementsByClassName("circle")[2].style.backgroundColor = "rgb(134, 0, 0)";
}