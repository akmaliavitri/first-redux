import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Username</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.username}</td>
        </tr>
        <tr>
          <td width="200">Email</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.email}</td>
        </tr>
        <tr>
          <td width="200">Password</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.password}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
