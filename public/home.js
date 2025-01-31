import { fetchData, elementColors } from "./utils.js";

// Search by Name
const [...resultSlots] = document.querySelectorAll("#results > div");
const inputName = document.querySelector("#search > div:nth-child(4) > input[type=text]");
inputName.addEventListener("input", async () => {
    // Empty searches
    var value = inputName.value.trim().toLowerCase();
    if (!value) {
        resultSlots.forEach((card) => {
            card.dataset.profile_id = "";
            card.children[0].setAttribute("src", "assets/skel-profile.png");
            card.children[1].innerHTML = "";
            card.children[2].innerHTML = "";
            card.children[3].innerHTML = "";
        });
        return;
    }

    // Data handle
    var results = await fetchData(`/search?name=${value}`);
    resultSlots.forEach((card, i) => {
        if (!results[i]) {
            if (card.dataset.profile_id) {
                card.dataset.profile_id = "";
                card.children[0].setAttribute("src", "assets/skel-profile.png");
                card.children[1].innerHTML = "";
                card.children[2].innerHTML = "";
                card.children[3].innerHTML = "";
            }
            return;
        }

        card.dataset.profile_id = results[i].student_id;
        card.children[0].setAttribute("src", `profiles/${results[i].student_id}.jfif`);
        card.children[1].innerHTML = results[i].name;
        card.children[2].innerHTML = results[i].student_id;
        card.children[3].innerHTML = "Character sheet";
        card.classList.toggle("anmtrg1");
        card.classList.toggle("anmtrg2");
    });
});

// Search by ID
const inputID = document.querySelector("#search > div:nth-child(2) > input[type=text]");
const notification = document.getElementById("notification");
document.querySelector("#search > div:nth-child(2) > button").addEventListener("click", async () => {
    var result = await fetchData(`/profile?id=${inputID.value}`);
    if (!result[0]) {
        notification.classList.add("show");
        setTimeout(() => {
            notification.classList.remove("show");
            inputID.value = "";
        }, 3000);
    } else {
        sendToDataTab(result[0].student_id);
    }
});

resultSlots.forEach((rs) => {
    rs.addEventListener("click", function () {
        sendToDataTab(this.dataset.profile_id);
    });
});

// Details Tab
const mainElement = document.getElementById("main");
const detFields = document.getElementsByClassName("det-fld");
// const detailsTab = document.querySelector("#details > div");
async function sendToDataTab(id) {
    if (!id) {
        console.error("[-] Details: No ID given");
        return;
    }

    var data = (await fetchData(`/profile?id=${id}&brief=true`))[0];

    detFields[0].setAttribute("src", `profiles/${id}.jfif`);
    detFields[1].innerText = data.name;
    detFields[2].innerText = data.age;
    detFields[3].innerText = data.gender;
    detFields[4].innerText = data.class;
    detFields[5].innerText = data.element;
    detFields[6].innerText = new Date(data.birthday).toDateString();
    detFields[7].innerText = data.contact_number;
    detFields[8].innerText = data.constellation;
    detFields[9].setAttribute("href", `./character.html?id=${id}`);

    mainElement.style.backgroundColor = elementColors[data.element];
}

function clearDataTab() {
    detFields[0].setAttribute("src", `assets/skel-profile.png`);
    detFields[1].innerText = "";
    detFields[2].innerText = "";
    detFields[3].innerText = "";
    detFields[4].innerText = "";
    detFields[5].innerText = "";
    detFields[6].innerText = "";
    detFields[7].innerText = "";
    detFields[8].innerText = "";
    detFields[9].setAttribute("href", "");

    mainElement.style.backgroundColor = "#cdcdcd";
}

document.querySelector("#details > section > button").addEventListener("click", clearDataTab);
