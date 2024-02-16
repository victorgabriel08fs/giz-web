import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import Login from "./pages/private/public/Auth/Login";
import PrivateRoutes from "./routes/index.routes";
import Loading from "./pages/private/public/Loading";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export const notify = (text) =>
  toast(text, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
function App() {
  const { auth, loading } = useAuth();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {loading ? <Loading /> : auth ? <PrivateRoutes /> : <Login />}
    </>
  );
}

export default App;
