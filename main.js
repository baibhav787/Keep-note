// selector
showNotes();
let addBtn = document.getElementById("addBtn");

//Events
addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let mytitle = document.getElementById("ip-title");
    let mynote = document.getElementById("ip-note");

    let storeNote = localStorage.getItem("storeNote");
    if (storeNote == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(storeNote);
    }
    let myObj = {
        title: mytitle.value,
        note: mynote.value
    }
    noteObj.push(myObj);
    localStorage.setItem("storeNote", JSON.stringify(noteObj));
    // console.log(mytitle);
    // console.log(mynote);


    mytitle.value = " ";
    mynote.value = " ";

    showNotes();
});

function showNotes() {
    let storeNote = localStorage.getItem("storeNote");
    if (storeNote == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(storeNote);
    }

    let html = "";
    noteObj.forEach(function (element, index) {
        html += `<div class="my-2 card noteCard" style="width: 15rem;">
        <div class="card-body">
            <h5 class="card-title">${element.title}</h5>
            <p class="card-text">${element.note}</p>
            <button class="btn" id="${index}" onClick="deleteNote(this.id)" style="background-color: #FBBC04; color: #eeeeee;" >Delete</button>
        </div>
    </div>`
    });
    let notesElement = document.getElementById("all-notes");
    if (noteObj.lenght != 0) {
        notesElement.innerHTML = html;
    } else {
        notesElement.innerHTML = "ADD A NOTE";
    }

}

function deleteNote(index) {
    let storeNote = localStorage.getItem("storeNote");
    if (storeNote == null) {
        noteObj = [];
    } else {
        noteObj = JSON.parse(storeNote);
    }

    noteObj.splice(index, 1);
    localStorage.setItem("storeNote", JSON.stringify(noteObj));
    showNotes();
}


let search = document.getElementById('search');
search.addEventListener("input", function () {

    let inputVal = search.value.toLowerCase();


    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})