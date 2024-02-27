import "./App.css";
import { useAuth } from "./contexts/AuthContext";
import Loading from "./pages/public/Loading";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Routes from "./routes/index.routes";
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
      {loading ? <Loading /> : <Routes/>}
    </>
  );
}

export default App;
