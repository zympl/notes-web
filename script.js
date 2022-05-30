function toggleLeftNav(event) {
    const leftNav = document.getElementById('leftNav')
    leftNav.classList.toggle("closed");
    event.target.classList.toggle("ri-menu-unfold-line");
}

let folderList = [];
const folderString = localStorage.getItem('folderList');
folderList = JSON.parse(folderString);
if (folderList == null) {
    folderList = ["Quick Notes"];
    localStorage.setItem('folderList', JSON.stringify(folderList));
}

function addFolder() {
    let folderName = prompt("Enter the folder name? ");
    if (folderName !== null && folderName.length !== 0) {
        folderList.push(folderName);
        renderFolder(folderName)
        localStorage.setItem('folderList', JSON.stringify(folderList));

    }
    console.log(folderList)
}

function renderFolder(name) {
    let liElement = document.createElement('li');
    liElement.innerHTML = name;
    liElement.classList.add("left-nav-item")
        //if liElement is selected apply selected class
        //liElement.classList.add("selected")
    const folderListView = document.getElementById('folderListView')
    folderListView.appendChild(liElement)

}
window.addEventListener('load', renderFolderList)

function renderFolderList() {

    for (i = 0; i < folderList.length; i++)

        renderFolder(folderList[i])
}
