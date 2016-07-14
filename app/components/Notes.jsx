import React from 'react';
import Note from './Note';


export default ({notes}) => (
  <ul>{notes.map(note =>
    <li key={note.id}><Note task={note.task} /></li>
  )}</ul>
)

/*
// props
export default ({notes}) => (

  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
  )}</ul>
);
*/