// drop down list for projects

let section_four = document.getElementById("section_four");
let project_select = document.createElement("select");
let projects = ["Select Project","To-do List", "Weather Check"];

project_select.setAttribute("id", "ProjectSelect");
project_select.setAttribute("onchange", "describe_determine()")
project_select.classList.add("drop_down");
for(let i=0; i<projects.length; i++){
    let project = document.createElement("option");
    project.value = projects[i];
    project.innerHTML = projects[i];
    project_select.appendChild(project);
}
section_four.appendChild(project_select);

// project description

const dataSet = {
    "To-do List": "It is a simple website that allows users to create and remove tasks to be done. It aims to facilitate working environment of users.",
    "Weather App": "It is a website running on local host that reports Hong Kong's weather. It uses Django framework and WeatherAPI. The data is recorded in 15min interval."
}

function describe_determine(){
    if(project_select.value === "To-do List"){
        description.innerText = dataSet["To-do List"];
    }
    else if(project_select.value === "Weather Check"){
        description.innerText = dataSet["Weather App"];
    }
    else{
        description.innerText = "";
    }
    
}

const descriptionArray = []
let description = document.createElement("p");

description.classList.add("description");
description.innerHTML = "";
section_four.appendChild(description);