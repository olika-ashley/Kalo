import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainArea from './components/MainArea';


// App component
function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <MainArea />
      </div>
    </Router>
  );
}

export default App;
