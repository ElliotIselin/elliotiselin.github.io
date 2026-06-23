// Overlays
let show_header = true;
let show_filter = true;
// Header
let headercollapse = document.getElementById("header-collapse");
let headercontainer = document.getElementById("header-container");
let home = document.getElementById("home");
let sell = document.getElementById("sell");
let contact = document.getElementById("contact");
let search = document.getElementById("search");
let divider = document.getElementById("divider");
let account = document.getElementById("account");
let heading = document.getElementById("heading");
let heading2 = document.getElementById("heading2");
// Filter
let filtercollapse = document.getElementById("filter-collapse");
let filtercontainer = document.getElementById("filter-container")
let title = document.getElementById("title");

function view(header,filter) {
    console.log(`header: ${header} | filter: ${filter}`);
    /*if (header === true, filter === true) {
        headercontainer.style.height = "189px";
        headercollapse.style.top = "161px";
        headercollapse.textContent = "↑";
        home.style.top = "155px";
        sell.style.top = "155px";
        contact.style.top = "155px";
        search.style.top = "155px";
        divider.style.height = "189px";
        account.style.top = "25px";
        account.style.width = "60px";
        account.style.left = "1226px";
        heading.style.fontSize = "90px";
        heading2.style.fontSize = "90px";
        filtercollapse.textContent="←"
        filtercontainer.style.width = "300px";
        filtercollapse.style.left = "246px";
        filtercollapse.style.borderBottomLeftRadius = "16px";
        filtercollapse.style.borderBottomRightRadius = "0px";
        filtercollapse.style.borderLeft = "2px dashed black";
        filtercollapse.style.borderRight = "2px solid black";
        title.style.fontSize = "45px";
    }
    if (header === false & filter === true) {
        headercontainer.style.height = "34px";
        headercollapse.style.top = "6px";
        headercollapse.textContent = "↓";
        home.style.top = "0px";
        sell.style.top = "0px";
        contact.style.top = "0px";
        search.style.top = "0px";
        divider.style.height = "34px";
        account.style.top = "4px";
        account.style.width = "80px";
        account.style.left = "1215px";
        heading.style.fontSize = "0px";
        heading2.style.fontSize = "0px";
        filtercollapse.textContent="→"
        filtercontainer.style.width = "0px";
        filtercollapse.style.left = "0px";
        filtercollapse.style.borderBottomLeftRadius = "0px";
        filtercollapse.style.borderBottomRightRadius = "16px";
        filtercollapse.style.borderLeft = "2px solid black";
        filtercollapse.style.borderRight = "2px dashed black";
        title.style.fontSize = "0px";
    }
};*/
    if(header === true) {
        headercontainer.style.height = "189px";
        headercollapse.style.top = "161px";
        headercollapse.textContent = "↑";
        home.style.top = "155px";
        sell.style.top = "155px";
        contact.style.top = "155px";
        search.style.top = "155px";
        divider.style.height = "189px";
        account.style.top = "25px";
        account.style.width = "60px";
        account.style.left = "1226px";
        heading.style.fontSize = "90px";
        heading2.style.fontSize = "90px";
    }
    else if (header === false) {
        headercontainer.style.height = "34px";
        headercollapse.style.top = "6px";
        headercollapse.textContent = "↓";
        home.style.top = "0px";
        sell.style.top = "0px";
        contact.style.top = "0px";
        search.style.top = "0px";
        divider.style.height = "34px";
        account.style.top = "4px";
        account.style.width = "80px";
        account.style.left = "1215px";
        heading.style.fontSize = "0px";
        heading2.style.fontSize = "0px";
    }
    if (filter === false & header === true) {
        console.log(1)
        filtercollapse.textContent="→"
        filtercontainer.style.width = "0px";
        filtercontainer.style.top = "189px";
        filtercontainer.style.height= "450px";
        filtercollapse.style.left = "0px";
        filtercollapse.style.borderBottomLeftRadius = "0px";
        filtercollapse.style.borderBottomRightRadius = "16px";
        filtercollapse.style.borderLeft = "2px solid black";
        filtercollapse.style.borderRight = "2px dashed black";
        filtercollapse.style.top = "189px";
        title.style.fontSize = "0px";
    }
    else if (filter === false & header == false) {
        filtercollapse.textContent="→"
        filtercontainer.style.width = "0px";
        filtercontainer.style.top = "32px";
        filtercontainer.style.height= "607px";
        filtercollapse.style.left = "0px";
        filtercollapse.style.borderBottomLeftRadius = "0px";
        filtercollapse.style.borderBottomRightRadius = "16px";
        filtercollapse.style.borderLeft = "2px solid black";
        filtercollapse.style.borderRight = "2px dashed black";
        filtercollapse.style.top = "32px";
        title.style.fontSize = "0px";
    }
     else if (filter === true & header === true) {
        console.log(2)
        filtercollapse.textContent="←"
        filtercontainer.style.width = "300px";
        filtercontainer.style.top = "189px";
        filtercontainer.style.height= "450px";
        filtercollapse.style.left = "246px";
        filtercollapse.style.borderBottomLeftRadius = "16px";
        filtercollapse.style.borderBottomRightRadius = "0px";
        filtercollapse.style.borderLeft = "2px dashed black";
        filtercollapse.style.borderRight = "2px solid black";
        filtercollapse.style.top = "189px";
        title.style.fontSize = "45px";
        title.style.top = "220px";
    }
    else if (filter === true & header === false) {
        console.log(2)
        filtercollapse.textContent="←"
        filtercontainer.style.width = "300px";
        filtercontainer.style.top = "32px";
        filtercontainer.style.height= "607px";
        filtercollapse.style.left = "246px";
        filtercollapse.style.borderBottomLeftRadius = "16px";
        filtercollapse.style.borderBottomRightRadius = "0px";
        filtercollapse.style.borderLeft = "2px dashed black";
        filtercollapse.style.borderRight = "2px solid black";
        filtercollapse.style.top = "32px";
        title.style.fontSize = "45px";
        title.style.top = "63px";
    }
}

headercollapse.addEventListener("click", () => {
    if (headercollapse.textContent === "↓") {
        show_header = true;
    } else if (headercollapse.textContent === "↑"){
        show_header = false;
    }
    console.log(show_header,show_filter)
    view(show_header,show_filter)
});
filtercollapse.addEventListener("click", () => {
    if (filtercollapse.textContent === "←") {
        show_filter = false;
    }
    else if (filtercollapse.textContent === "→") {
        show_filter = true;
    }
    console.log(show_header,show_filter)
    view(show_header,show_filter)
});