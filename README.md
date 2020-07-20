# Note Taker

## Description

This full-stack application allows the user to create, view, and delete notes. I implemented the backend code, which uses runs on Node.js and uses Express.js to listen and respond to http requests for the frontend code as well as API requests for creating, retrieving, and deleting notes. Notes are stored in a JSON file. The frontend was provided by Trinity Education Services.

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [Demonstration](#demonstration)

* [Code Snippets](#code-snippets)

* [Built With](#built-with)

* [Deployed Link](#deployed-link)

* [Acknowledgements](#acknowledgements)

* [Questions](#questions)

## Installation

After downloading this repository, run the following command inside the repository to install the necessary dependencies:

```
npm install
```
## Usage

To view the live website, visit the [deployed link](https://note-taker-sc.herokuapp.com/). To run a local version of the website, download the repository, run `npm install` to install the required packages, and run `npm start` to start the server on your computer.

## Demonstration

![Demonstration of application](demo.gif)

## Code Snippets

The Express.js library was used to program the server to respond to various http requests. For example, the following code tells the server to listen for a request to delete a note and delete it by calling the `getNotes`, `deleteNote`, and `saveNotes` functions that I defined.

```javascript
app.delete("/api/notes/:id", function(req, res) {
    const id = parseInt(req.params.id); // get the id as an integer from the url
    const notes = getNotes(); // read the notes array from the db.json file
    deleteNote(notes, id); // delete the note in the array that matches the id
    saveNotes(notes); // save the edited notes array to the db.json file
    res.end(); // close the request
});
```

## Built With

* Backend
    * [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    * [Node.js](https://nodejs.org/en/)
    * [Express.js](https://expressjs.com/)
* Frontend
    * [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    * [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    * [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    * [jQuery](https://jquery.com/)
    * [Bootstrap](https://getbootstrap.com/)
    * [Font Awesome](https://fontawesome.com/)

## Deployed Link

* [See Live Site](https://note-taker-sc.herokuapp.com/)

## Acknowledgments

* The frontend for this application was provided by Trinity Education Services, a 2U, Inc.

## Questions

If you have any questions about the repo, open an issue or contact me directly at siechap@gmail.com. You can find more of my work at [SierraChapman](https://github.com/SierraChapman/).