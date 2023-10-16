const {nanoid} = require('nanoid');
const {notes} = require('./notes');

const isExist = (id)=>notes.filter((val)=>id==val.id).length>0;


const addNoteHandler = (request, h) => {
  const {title, tags, body} = request.payload;
  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updateAt = createdAt;

  const note = {
    title, tags, body, id, createdAt, updateAt,
  };

  console.log(notes);
  notes.push(note);
  if (isExist(id)) {
    const response = h.response({
      status: 'Success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteId: id,
      },
    }).code(200);

    return response;
  } else {
    const response = h.response({
      status: 'Failed',
      message: 'Catatan tidak berhasil ditambahkan',
      data: {
        noteId: id,
      },
    }).code(500);

    return response;
  }
};

const getNoteHandler = () => ({
  status: 'success',
  data: {
    notes: notes,
  },

});

const getSpecificNoteHandler = (request, h) => {
  const {id} = request.params;
  FoundNotes = notes.filter((val)=>id==val.id);

  if (FoundNotes.length != 0) {
    const response = h.response({
      status: 'Success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        note: FoundNotes[0],
      },
    }).code(200);

    return response;
  } else {
    console.log('ERROR FAIL SPECIFIC NOTE HANDLER');
    const response = h.response({
      status: 'fail',
      message: 'Catatan Tidak Ditemukan',
    }).code(404);

    return response;
  }
};

const editSpecificNoteHandler = (request, h) => {
  const {id} = request.params;
  const {title, tags, body} = request.payload;
  const updateAt = new Date().toISOString();

  const FoundNoteId = notes.findIndex((val)=>id == val.id);


  if (FoundNoteId != -1) {
    notes[FoundNoteId] = {...notes[FoundNoteId], title, tags, body, updateAt};
    console.log(notes);
    const response = h.response({
      status: 'Success',
      message: 'Catatan di ubah',

    }).code(200);

    return response;
  } else {
    const response = h.response({
      status: 'fail',
      message: 'Catatan Tidak Ditemukan',
    }).code(404);

    return response;
  }
};

const deleteSpecificNoteHandler = (request, h) => {
  const {id} = request.params;


  const FoundNoteId = notes.findIndex((val)=>id == val.id);


  if (FoundNoteId != -1) {
    notes.splice(FoundNoteId, 1);

    const response = h.response({
      status: 'Success',
      message: `Catatan ${id} di delete`,

    }).code(200);

    return response;
  } else {
    const response = h.response({
      status: 'fail',
      message: 'Catatan Tidak Ditemukan',
    }).code(404);

    return response;
  }
};


module.exports = {getNoteHandler, addNoteHandler,
  getSpecificNoteHandler,
  editSpecificNoteHandler,
  deleteSpecificNoteHandler};
