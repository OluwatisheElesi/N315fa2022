import * as MODEL from "./models/model.js"
// import { ChangePage } from "./models/model.js"
// routes pages
function route() {
    let hashtag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    console.log("hash" + pageID);
    MODEL.changePage(pageID);
}


function initListeners () {
//     $("nav a").click((e) {
//         let btnID = e.currentTarget.Id;
//     console.log("click" + btnID);
// });
}


function iniApp () {
    $(window).on("hashchange", route);

}

$(document).ready(function () {
    initApp();
    initListeners();
});

