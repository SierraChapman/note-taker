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
    // initialize maxId to -1
    // for loop through notes
        // if note's id is greater than maxId...
            // set maxId to note's id
    // add an id of maxId + 1 to newNote
    // push newNote to notes
}

// remove note matching id, editing notes in place
function deleteNote(notes, id) {
    // for loop through notes
        // if id matches the note...
            // remove note with splice and return
}

// writes notes array to db.json
function saveNotes(notes) {
    // save stringified notes to file with fs
}

// Handle API requests

module.exports = function(app) {
    // return JSON with all notes
    app.get("/api/notes", function(req, res) {
        // response with getNotes() output as JSON
    });

    // add note to notes array and return new note object
    app.post("/api/notes", function(req, res) {
        // get newNote data from request
        // read notes file with getNotes()
        // pass notes and newNote to addNote()
        // save updated notes array with saveNotes()
        // response with newNote as JSON
    });

    // delete note with matching id
    app.delete("/api/notes/:id", function(req, res) {
        // store id variable
        // read notes file with getNotes()
        // delete note with deleteNote()
        // save updated notes array with saveNotes()
        // end the request
    });
};