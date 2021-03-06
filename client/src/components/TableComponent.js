import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from 'sweetalert'
import { deleteUser } from "../actions/userAction";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  console.log("user id", id)
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this data!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id))
      swal("Poof! Your data has been deleted!", {
        icon: "success",
      });
    } else {
      swal("cancel delete data");
    }
  });
}

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const mapStateToProps = (state) => {
  return {
    getUserList: state.users.getUserList,
    errorUserList: state.users.errorUserList,
  };
};

const TableComponent = (props) => {

  const columns = [
    {
      dataField: "id",
      text: "ID",
      sort: true,
      headerStyle: () => {
        return { width: "5%" };
      },
    },
    {
      dataField: "username",
      text: "Username",
      sort: true,
      headerStyle: () => {
        return { width: "15%" };
      },
    },
    {
      dataField: "email",
      text: "email",
      sort: true,
    },
    {
      dataField: "password",
      text: "password",
      sort: true,
    },
    {
      dataField: "link",
      text: "action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"/detail/" + row.id}>
              <Button color="info" className="mr2">
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>
  
            <Link to={"/edit/" + row.id}>
              <Button color="success" className="mr2">
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>
  
            <Button color="danger" className="mr2" onClick={() => handleClick(props.dispatch, row.id)}>
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Container>
      {props.getUserList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUserList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <Button color="primary" className="mr2">
                      <FontAwesomeIcon icon={faUserPlus} /> Create User
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="float-right">
                    <SearchBar {...props.searchProps} />
                  </div>
                </Col>
              </Row>

              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center">
          { props.errorUserList ? <h1>{props.errorUserList}</h1> : <Spinner  color="dark" />}
          
        </div>
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
