import Layout from "antd/es/layout/layout";
import { Outlet } from "react-router";
import { LayoutPrimary } from "./layout/layout-primary/layout-primary";

function App() {

  return (
    <main>
      <LayoutPrimary>
        {/* app */}
        <Outlet />
      </LayoutPrimary>
      
    </main>
  )
}

export default App
