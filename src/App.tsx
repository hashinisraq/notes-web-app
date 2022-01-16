import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import CreateNotes from './components/CreateNotes';
import Header from './components/Header';
import NotesList from './components/NotesList';
import { Note } from './Models/NoteModel';


function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: "Meetings",
    text: " Schedule meeting with Software Team",
    color: "#dfdfdf",
    date: "2022-01-07"
  }]);


  return (
    <>
      <Header />
      <div style={{backgroundColor: "#246666"}}>
        <Container className="mt-5">
          <Row>
            <Col>
              <NotesList notes={notes} setNotes={setNotes} />
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <CreateNotes notes={notes} setNotes={setNotes} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
