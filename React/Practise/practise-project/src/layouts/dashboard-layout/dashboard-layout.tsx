import { Outlet } from "react-router";
import AppHeader from "../../components/common-components/app-header/app-header";
// import Div from "../../components/common-components/div/div";

function DashboardLayout() {
  return (
    <>
      <AppHeader />
      <h2>Dashboard Layout Starts here</h2>
      {/* 
            ****************************************************************
            Just for testing purposes, you can remove this later
            <Div></Div>
            ****************************************************************
        */}

      <div className="outlet-wrapper">
        <Outlet />
      </div>
    </>
  );
}

export default DashboardLayout;
