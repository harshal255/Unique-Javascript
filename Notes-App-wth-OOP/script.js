class Notes {
    constructor(text, content) {
        this.text = text
        this.content = content
    }
}

class NotesApp {
    constructor() {
        this.notes = []
        this.loadNotesFromLocalStorage()
        this.attachEventListenerToAddButton()
    }

    addNewNote() {
        const noteText = document.querySelector(".notes__title").value
        const noteContent = document.querySelector(".notes__body").value
        if(noteText !== "" && noteContent !== "") {
            const newNote = new Notes(noteText, noteContent)
            this.notes.push(newNote)
            this.displayNotes()
            this.saveNotesToLocalStorage()
        }else {
            alert("Note title or Content is empty")
        }

        document.querySelector(".notes__title").value = ""
        document.querySelector(".notes__body").value = ""
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
}

//initialize app
const notesApp = new NotesApp()