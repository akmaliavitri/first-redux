import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";

export default class CreateUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <h2>Create User</h2>
        <FormComponent />
      </Container>
    );
  }
}
