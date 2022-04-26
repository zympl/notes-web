function toggleLeftNav(event) {
    const leftNav = document.getElementById('leftNav')
    leftNav.classList.toggle("closed");
    event.target.classList.toggle("ri-menu-unfold-line");
}

let folderList = [];
const folderString = localStorage.getItem('folderList');
folderList = JSON.parse(folderString);

function addFolder() {
    let folderName = prompt("Enter the folder name? ");
    if (folderName !== null && folderName.length !== 0) {
        folderList.push(folderName);
        localStorage.setItem('folderList', JSON.stringify(folderList));
    }
    console.log(folderList)
}