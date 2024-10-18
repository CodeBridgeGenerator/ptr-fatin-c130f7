import React from "react";
import ProjectLayout from "../../Layouts/ProjectLayout";
import { connect } from "react-redux";
import Dashboard2Page from "./Dashboard2Page";

const Dashboard2ProjectLayoutPage = (props) => {
  return (
    <ProjectLayout>
      <Dashboard2Page />
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

export default connect(mapState, mapDispatch)(Dashboard2ProjectLayoutPage);