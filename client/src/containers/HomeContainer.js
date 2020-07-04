import React, { Component } from "react";
import TableComponent from "../components/TableComponent";
import { connect } from "react-redux";
import { getUsersList, deleteUserDetail } from '../actions/userAction'

class HomeContainer extends Component {

  componentDidMount() {
    this.props.dispatch(deleteUserDetail())
    this.props.dispatch(getUsersList())
  }

  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}

export default connect()(HomeContainer);
