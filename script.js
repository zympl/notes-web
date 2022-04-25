function toggleLeftNav(event) {
    const leftNav = document.getElementById('leftNav')
    leftNav.classList.toggle("closed");
    event.target.classList.toggle("ri-menu-unfold-line");
}

let folderList = [];
console.log(arr)

function addFolder() {
    let folderName = prompt("Enter the folder name? ");
    if (folderName !== null && folderName.length !== 0) {
        folderList.push(folderName);
    }
    console.log(folderList)
}