import { useState } from "react";
import {
  Container,
  Navbar,
  Row,
  Col,
} from "react-bootstrap";
import AddBook from "./components/AddBook";
import BooksList from "./components/BooksList";
import "./App.css";

function TeacherTask() {
  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log(
      "The ID of document to be edited: ",
      id
    );
    setBookId(id);
  };
  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        className="header"
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              className="Header-logo"
              src="/logo.png"
              alt="Logo"
            />
            Teacher | Create TaskX
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddBook
              id={bookId}
              setBookId={setBookId}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <BooksList
              getBookId={getBookIdHandler}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default TeacherTask;
