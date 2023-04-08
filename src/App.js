import Template from "./components/Template";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./features/UserSlice";
import { ConfigProvider } from 'antd';
import "@fontsource/montserrat";
import LoginSignInRoutes from "./routes/LoginSignInRoutes";

function App() {
  const user = useSelector(selectUser);

  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Montserrat"
          }
        }}>
        <BrowserRouter>
          {user.user > 0 ? <Template /> : <LoginSignInRoutes />}
        </BrowserRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
