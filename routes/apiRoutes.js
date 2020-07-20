// Import dependencies
const path = require("path");
const fs = require("fs");

// Helper functions

// read notes from db.json file and returns notes array
function getNotes() {
    // read notes file with fs
    const notesStr = fs.readFileSync(path.join(__dirname, "../db/db.json"), "utf8");
    // parse JSON and return array
    return JSON.parse(notesStr);
}

// add id to newNote and add newNote to notes, editing both in place
function addNote(notes, newNote) {
    if (notes) {
        // the last note always has the highest id, so adding one guarantees a unique id
        newNote.id = notes[notes.length - 1].id + 1;
    } else {
        // start with id of 1 if there are no notes so that ids are always truthy
        newNote.id = 1;
    }
    // push newNote to notes
    notes.push(newNote);
}

// remove note matching id, editing notes in place
function deleteNote(notes, id) {
    // for loop through notes
    for (let i = 0; i < notes.length; i++) {
        // if id matches the note...
        if (notes[i].id === id) {
            // remove note with splice and return
            notes.splice(i, 1);
            return;
        }
    }
}

// writes notes array to db.json
function saveNotes(notes) {
    // save stringified notes to file with fs
    fs.writeFileSync(path.join(__dirname, "../db/db.json"), JSON.stringify(notes), "utf8");
}

// Handle API requests

module.exports = function(app) {
    // return JSON with all notes
    app.get("/api/notes", function(req, res) {
        // response with getNotes() output as JSON
        res.json(getNotes());
    });

    // add note to notes array and return new note object
    app.post("/api/notes", function(req, res) {
        // get newNote data from request
        const newNote = req.body;
        // read notes file with getNotes()
        const notes = getNotes();
        // pass notes and newNote to addNote()
        addNote(notes, newNote);
        // save updated notes array with saveNotes()
        saveNotes(notes);
        // response with newNote as JSON
        res.json(newNote);
    });

    // delete note with matching id
    app.delete("/api/notes/:id", function(req, res) {
        // store id variable
        const id = parseInt(req.params.id);
        // read notes file with getNotes()
        const notes = getNotes();
        // delete note with deleteNote()
        deleteNote(notes, id);
        // save updated notes array with saveNotes()
        saveNotes(notes);
        // end the request
        res.end();
    });
};