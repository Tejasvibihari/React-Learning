import React from "react";
import notes from "../note";
import Note from "./Note";

function createEntry(notesPoint) {
    return (<Note
        id={notesPoint.key}
        title={notesPoint.title}
        content={notesPoint.content} />);
}



function Notes() {
    return <div>
        {notes.map(createEntry)}
    </div>;
}
export default Notes;
/* <Note title={notes[0].title} content={notes[0].content} />
      <Note title={notes[1].title} content={notes[1].content} />
      <Note title={notes[2].title} content={notes[2].content} />
      <Note title={notes[3].title} content={notes[3].content} /> */