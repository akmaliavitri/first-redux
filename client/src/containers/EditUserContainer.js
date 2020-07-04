import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { getUsersDetail, putUserUpdate } from "../actions/userAction";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};
class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }

  handleSubmit(data) {
    console.log(data);
    this.props.dispatch(putUserUpdate(data, this.props.match.params.id));
  }

  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.getResponDataUser) {
        swal(
          "User Updated!",
          "Username:" +
            this.props.getResponDataUser.username +
            ", Email :" +
            this.props.getResponDataUser.email,
          "success"
        );
      } else {
        swal("Failed!", this.props.errorResponDataUser, "error");
      }
    }

    return (
      <Container>
        <BackComponent />
        <h2>Edit User</h2>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);
