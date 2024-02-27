import { useAuth } from "../contexts/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import Private from "./Private.routes";
import Public from "./Public.routes";

const Routes = () => {
  const { auth } = useAuth();
  return <Router>{auth ? <Private /> : <Public />}</Router>;
};

export default Routes;
