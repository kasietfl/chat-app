import { Auth, Home } from './pages';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className='wrapper'>
      <Route exact path={["/","/signin", "/signup"]} component={Auth} />
      <Route exact path="/home" component={Home} />
    </div>
  );
}

export default App;