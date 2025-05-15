import { Fragment } from 'react/jsx-runtime';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import '../src/components/Cardloader/Loader.scss';
import './assets/css/soft-ui-dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Route from "./Routes/Index";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <Fragment>
      <Toaster position="top-center" reverseOrder={false} />
      <Route />
    </Fragment>
  );
}

export default App;
