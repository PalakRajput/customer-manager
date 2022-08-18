import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header'
import { AppRoutes } from './routes';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <ToastContainer autoClose={1000}/>
    </BrowserRouter>
  );
}

export default App;
