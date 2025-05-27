const hiddenElements = document.querySelectorAll('.hide');
hiddenElements.forEach(element => {
    element.setAttribute("hidden", true);
});
const weekly = document.getElementById('2');
const monthly = document.getElementById('3');

weekly.addEventListener("click", showHidden)
monthly.addEventListener("click", showHidden)

function showHidden(){
    if (weekly.checked || monthly.checked) {
        hiddenElements.forEach(element => {
            element.removeAttribute("hidden");
        });
    }
    else{
        hiddenElements.forEach(element => {
            element.setAttribute("hidden", true);
        });
    }
}