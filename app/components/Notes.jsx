import React from 'react';

// props
export default ({notes}) => (

  <ul>{notes.map(note =>
    <li key={note.id}>{note.task}</li>
  )}</ul>
);
