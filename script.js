function toggleLeftNav(event) {
    const leftNav = document.getElementById('leftNav')
    leftNav.classList.toggle("closed");
    event.target.classList.toggle("ri-menu-unfold-line");
}

function FolderAdding() {
    var folder = prompt("Enter the folder name?");
    console.log(folder)

}