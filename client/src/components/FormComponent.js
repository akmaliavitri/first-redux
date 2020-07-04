import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";

class FormComponent extends Component {
  render() {
    return <div></div>;
  }
}

FormComponent = reduxForm({
  form: "formCreateUser",
  enableReinitialize: true, //bisa dipakai untuk create dan untuk update
})(FormComponent);
export default connect()(FormComponent);
