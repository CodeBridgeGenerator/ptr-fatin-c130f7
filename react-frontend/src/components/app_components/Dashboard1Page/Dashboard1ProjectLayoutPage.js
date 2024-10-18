import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import Dashboard1Page from "./Dashboard1Page";

const Dashboard1ProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <Dashboard1Page />
    </ProjectLayout>
  );
};

const mapState = (state) => {
  const { user, isLoggedIn } = state.auth;
  return { user, isLoggedIn };
};

const mapDispatch = (dispatch) => ({
  alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(Dashboard1ProjectLayoutPage);