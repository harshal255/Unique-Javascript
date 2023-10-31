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
    }

    addNewNote() {
        const noteText = document.querySelector(".notes__title").value
        const noteContent = document.querySelector(".notes__body").value

        if(noteText !== "" && noteContent !== "") {
            const newNote = new Notes(noteText, noteContent)
            this.notes.push(newNote)
            this.displayNotes()
            alert("new note added")
            this.saveNotesToLocalStorage()
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
        const selectedNote = this.notes[index]
        document.querySelector(".notes__title").value = selectedNote.text
        document.querySelector(".notes__body").value = selectedNote.content

        const saveButton = document.querySelector(".notes__save")

        // Remove any existing event listeners on the "Save" button.
        saveButton.removeEventListener("click", this.saveEditedNote)

        saveButton.addEventListener("click", () => {
            const editedTitle = document.querySelector(".notes__title").value
            const editedContent = document.querySelector(".notes__body").value
            this.saveEditedNote(index, editedTitle, editedContent)
        })
    }

    displayNotes() {
        const notesList = document.querySelector(".notes__list")
        notesList.innerHTML = ""
        this.notes.forEach(note => {
            let subString =  note.content.length > 20 ? `${note.content.substring(0, 21)}...` : note.content
            const article = document.createElement("article")
            article.classList.add("notes__list-item", "notes__list-item--selected")
            article.innerHTML = `
            <h2 class="notes__small-title">${note.text}</h2>
            <p class="notes__small-body">${subString}</p>
            `
            notesList.appendChild(article)
        })
    }

    loadApp() {
        const main = document.querySelector(".notes")
        main.innerHTML = `
            <section class="notes__sidebar">
            <button class="notes__add" type="button">Add To Notes</button>
            <button class="notes__create" type="button">Create  Note</button>
            <button class="notes__save" type="button">Save Edit</button>
            <section class="notes__list"></section>
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

    attachEventListenerToArticles() {
        const notesList = document.querySelector(".notes__list")

        notesList.addEventListener("click", (event) => {
                const noteItem = event.target.closest(".notes__list-item")
                if (noteItem) {
                    const index = Array.from(noteItem.parentElement.children).indexOf(noteItem)
                    this.previewNote(index)
                }
            })
        }
}

//initialize app
const notesApp = new NotesApp()