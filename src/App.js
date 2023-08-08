import { useAuthContext } from 'contexts/AuthContext';
import ScreenLoader from 'components/ScreenLoader';
import Routes from "pages/Routes";

import './App.scss';
import "bootstrap/dist/js/bootstrap.bundle"

function App() {
  const { isAppLoading } = useAuthContext()
  if (isAppLoading)
    return <ScreenLoader />

  return (
    <Routes />
  );
}

export default App;
