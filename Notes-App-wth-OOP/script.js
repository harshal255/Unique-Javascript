class Notes {
    constructor(text, content) {
        this.text = text
        this.content = content
    }
}

class NotesApp {
    constructor() {
        this.notes = []
        this.loadApp()
        this.loadNotesFromLocalStorage()
        
        this.attachEventListenerToAddButton()
        this.attachEventListenerToArticles()
        this.attachEventListenerToCreateButton()
        this.attachEventListenerToDeleteButton()

    }

    addNewNote() {
        const noteText = document.querySelector(".notes__title").value
        const noteContent = document.querySelector(".notes__body").value

        if(noteText !== "" && noteContent !== "") {
            const newNote = new Notes(noteText, noteContent)
            this.notes.push(newNote)
            this.displayNotes()
            this.saveNotesToLocalStorage()
            alert("New note added")
        }else {
            alert("Note title or Content is empty")
        }
    }

    createNote() {
        document.querySelector(".notes__title").value = ""
        document.querySelector(".notes__body").value = ""
    }

    saveEditedNote(index, editedTitle, editedContent) {
            if (editedTitle.trim() === "" || editedContent.trim() === "") {
                alert("Title or Content cannot be empty")
                return;
            }
            this.notes[index].text = editedTitle
            this.notes[index].content = editedContent
            this.displayNotes()
            this.saveNotesToLocalStorage()
            alert("edit saved")
        
    }

    previewNote(index) {
        if (index >= 0 && index < this.notes.length) {
            const selectedNote = this.notes[index];
            document.querySelector(".notes__title").value = selectedNote.text;
            document.querySelector(".notes__body").value = selectedNote.content;
    
            const saveButton = document.querySelector(".notes__save");
    
            // Remove any existing event listeners on the "Save" button.
            saveButton.removeEventListener("click", () => this.saveEditedNote(index));
    
            saveButton.addEventListener("click", () => {
                const editedTitle = document.querySelector(".notes__title").value;
                const editedContent = document.querySelector(".notes__body").value;
                this.saveEditedNote(index, editedTitle, editedContent);
            });
        }
    }

    deleteNote(index) {
            if (confirm("Are you sure you want to delete this note?")) {
                this.notes.splice(index, 1);
                this.displayNotes();
                this.saveNotesToLocalStorage();
                alert("Note deleted");
            }
        
    }

    displayNotes() {
        const notesList = document.getElementById("notes-list")
        notesList.innerHTML = ""
        this.notes.forEach((note, index) => {
            let subString =  note.content.length > 20 ? `${note.content.substring(0, 21)}...` : note.content
            const articleContainer = document.createElement("div")
            articleContainer.classList.add("article-container")
            articleContainer.innerHTML = `
            <article class="notes__list-item notes__list-item--selected" data-index=${index}>
            <h2 class="notes__small-title">${note.text}</h2>
            <p class="notes__small-body">${subString}</p>
            </article>
            <span class="delete" data-index=${index}>Delete</span>
            `

            notesList.appendChild(articleContainer)
        })
    }

    loadApp() {
        const main = document.querySelector(".notes")
        main.innerHTML = `
        <section class="notes__sidebar">
            <button class="notes__add" type="button">Add To Notes</button>
            <button class="notes__create" type="button">Create  Note</button>
            <button class="notes__save" type="button">Save Edit</button>
            <section class="notes__list" id="notes-list"></section>
        </section>

        <section class="notes__preview">
            <input class="notes__title" type="text" placeholder="Enter a title...">
            <textarea class="notes__body">I am the notes body...</textarea>
        </section>
        `
    }

    saveNotesToLocalStorage() {
        localStorage.setItem('notes', JSON.stringify(this.notes))
    }

    loadNotesFromLocalStorage() {
        const storedNotes = localStorage.getItem('notes')
        if (storedNotes) {
            this.notes = JSON.parse(storedNotes)
            this.displayNotes()
        }
    }

    attachEventListenerToAddButton() {
        const addButton = document.querySelector(".notes__add")
        addButton.addEventListener("click", () => {
            this.addNewNote()
        })
    }

    attachEventListenerToCreateButton() {
        const createButton = document.querySelector(".notes__create")
        createButton.addEventListener("click", () => {
            this.createNote()
        })
    }

    attachEventListenerToDeleteButton() {
        const notesList = document.getElementById("notes-list")

        notesList.addEventListener("click", (event) => {
            if (event.target.classList.contains("delete")){
                //find the index of the note to delete using the data-index
                const index = event.target.getAttribute("data-index")
                if(index !== null) {
                    this.deleteNote(parseInt(index, 10))
                }
            }
        })

    }

    attachEventListenerToArticles() {
        const notesList = document.getElementById("notes-list");

        notesList.addEventListener("click", (event) => {
            console.log(event.target)
            if (event.target.classList.contains("notes__list-item")){
                //find the index of the note to delete using the data-index
                const index = event.target.getAttribute("data-index")
                if(index !== null) {
                    this.previewNote(parseInt(index, 10))
                }
            }
        });

    }
}

//initialize app
const notesApp = new NotesApp()
