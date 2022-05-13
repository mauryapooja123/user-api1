import React from "react";
import { Button } from "react-bootstrap";

export default function FormData(props) {
  return (
    <>
      <form action="/action_page.php" onSubmit={props.handleSubmit}>
        <label for="fname"> Name</label>
        <input
          type="text"
          id="fname"
          name="name"
          value={props.user && props.user.name}
          onChange={props.handleChange}
          placeholder="Your name.."
        />

        <label for="lname">email</label>
        <input
          type="text"
          id="lname"
          name="email"
          //value={props.user.email}
          value={props.user && props.user.email}
          onChange={props.handleChange}
          placeholder="Your last name.."
        />
        <Button variant="primary" type="submit">
          submit
        </Button>
      </form>
    </>
  );
}
