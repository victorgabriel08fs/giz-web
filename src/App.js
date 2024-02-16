import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import Login from "./pages/private/public/Auth/Login";
import PrivateRoutes from "./routes/index.routes";
import Loading from "./pages/private/public/Loading";

function App() {
  const { auth, loading } = useAuth();
  return loading ? (
    <Loading/>
  ) : auth ? (
    <PrivateRoutes />
  ) : (
    <Login />
  );
}

export default App;
