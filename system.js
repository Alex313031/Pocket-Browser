/*
 The Official Pocket Browser Code,
 Created and Written by the Pocket, Inc.
 © 2020 Pocket Inc.
 github.com/PocketInc/Pocket-Browser
 */

log.info("Loading system")
function isSystemPage(url) {
    //identify if url is system page by checking if from chars 0 to 9 are "pocket://"
    if (url.slice(0, 9).toLowerCase() === "pocket://") {
        log.info("System page is detected by function")
        return true;
        
    }

}
//open system page.

function openSystemPage(page,close) {

    log.info("Loading system page: " + page);
    const systemPage = new electron.BrowserWindow({
        //default width and height of electron window
        width: 600,
        height: 400,
        webPreferences: {
          //allow node integration
          //allows node to work in HTML and JS files.
          nodeIntegration: true,
          
        }
      })
    //load page html.
    systemPage.loadFile("system/" + page + ".html");
    //if no page provided, load about.
    if (!page || page === "") {
        systemPage.loadFile("system/about.html");
        page = "about";
    }
    //remove default menu.
    systemPage.setMenu(null);
    //set title, will be changed when html title is loaded.
    systemPage.setTitle(page + " - Pocket Browser")


}
//function for loading system pages in a tab instead of in a window.
function loadSystemPage(page, window = 0,target) {
    if (window === 0) {
        document.getElementById("address").value = "pocket://" + page;
        loadURL();
    } else if (window === 1) {
        loadingSystemPage = true;
        target.webview.src = "system/" + page + ".html";
    }

}

