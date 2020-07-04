import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};
class CreateUserContainer extends Component {
  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if(this.props.getResponDataUser) {
        swal(
          "User Created!",
          "Username:" + this.props.getResponDataUser.username + ", Email :" + this.props.getResponDataUser.email,
          "success"
        );
      } else {
        swal(
          "Failed!",
          this.props.errorResponDataUser,
          "error"
        );
      }
    }
    
    return (
      <Container>
        <BackComponent />
        <h2>Create User</h2>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
