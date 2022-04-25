function toggleLeftNav(event) {
    const leftNav = document.getElementById('leftNav')
    leftNav.classList.toggle("closed");
    event.target.classList.toggle("ri-menu-unfold-line");
}

function addFolder() {
    var arr = [];
    for (var i = 0; i < 10; i++)
        arr.push(prompt("Enter the folder name? "));
    console.log(arr)

}