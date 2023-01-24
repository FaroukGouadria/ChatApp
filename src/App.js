import './App.css';
import Messenger from './components/Messenger';
import { GoogleOAuthProvider } from '@react-oauth/google';
function App() {
  const clientId='763859582408-0er1gko9jgs1rinqun8hch3dottq130r.apps.googleusercontent.com';
  return (
    <GoogleOAuthProvider clientId={clientId}>
       <Messenger/>
    </GoogleOAuthProvider>
  );
}

export default App;
