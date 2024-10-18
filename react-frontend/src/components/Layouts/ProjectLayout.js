import AppSideBar from "./appSideBar/AppSideBar.js";

/*

import ProductsPage from "../ProductsPage/ProductsPage";
import Dashboard1Page from "../Dashboard1Page/Dashboard1Page";
import Dashboard2Page from "../Dashboard2Page/Dashboard2Page";
~cb-add-import~

~cb-add-services-card~

case "products":
                return <ProductsPage />;
case "dashboard1":
                return <Dashboard1Page />;
case "dashboard2":
                return <Dashboard2Page />;
~cb-add-thurthy~

*/

const AppLayout = (props) => {
  const { children, activeKey, activeDropdown } = props;

  return (
    <div className="flex min-h-[calc(100vh-5rem)] mt-20 bg-white">
      <AppSideBar activeKey={activeKey} activeDropdown={activeDropdown} />
      <div className="flex-1 ml-2">{children}</div>
    </div>
  );
};

export default AppLayout;
