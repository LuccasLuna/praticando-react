import { Outlet } from "react-router";
import { SessionProvider } from "./context/loginSession";


function App() {

  return (
    <main>
        app
        <Outlet />
      
    </main>
  )
}

export default App
