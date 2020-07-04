import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";

class CreateUserContainer extends Component {

  handleSubmit(data) {
    console.log(data)
    this.props.dispatch(postUserCreate())
  }

  render() {
    return (
      <Container>
        <BackComponent />
        <h2>Create User</h2>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
      </Container>
    );
  }
}

export default connect()(CreateUserContainer)