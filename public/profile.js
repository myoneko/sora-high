import { fetchData, elementColors } from "./utils.js";

const dataFields = document.getElementsByClassName("dtfld");
const profileID = new URL(window.location.href).searchParams.get("id");
fetchData(`/profile?id=${profileID}`, (res) => {
    var data = res[0];
    document.title = `${data.student_id} - ${data.name}`;
    dataFields[0].innerHTML = "#" + data.student_id;
    dataFields[1].setAttribute("src", `profiles/${data.student_id}.jfif`);
    dataFields[2].innerText = data.name;
    dataFields[3].innerText = data.age;
    dataFields[4].innerText = data.gender;
    dataFields[5].innerText = data.class;
    dataFields[6].innerText = data.element;
    dataFields[7].innerText = data.companion;
    dataFields[8].innerText = data.contact_number;
    dataFields[9].innerText = new Date(data.admission_date).toDateString();
    dataFields[10].innerText = new Date(data.birthday).toDateString();
    dataFields[11].innerText = data.constellation;

    document.body.style.setProperty("--element-color", elementColors[data.element] || "#cdcdcd");
});

// Skill web
const svg = document.querySelector("svg");
const radius = 100;
const angle = (Math.PI * 2) / 5;

function drawWeb(...p) {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("fill", "#ffffff18");
    path.setAttribute("stroke", "#fff");
    var points = "";
    for (let i = 0; i < 5; i++) {
        const x = radius + p[i] * Math.cos(angle * i);
        const y = radius + p[i] * Math.sin(angle * i);
        points += `${Math.round(x * 10) / 10},${Math.round(y * 10) / 10} `;
        // points += `${x},${y} `;
    }

    path.setAttribute("d", `M ${points}Z`);
    svg.appendChild(path);
}

drawWeb(45, 35, 60, 55, 93);
