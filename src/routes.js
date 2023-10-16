const {addNoteHandler, getNoteHandler,
  getSpecificNoteHandler,
  editSpecificNoteHandler,
  deleteSpecificNoteHandler} = require('./handler');


const notesRouter = [
  {
    method: 'POST',
    path: '/notes',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes',
    handler: getNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getSpecificNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editSpecificNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteSpecificNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },
];


module.exports = notesRouter;

