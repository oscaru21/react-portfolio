import Navbar from './components/Navbar';
import Home from './pages/Home';
import { GithubProvider } from './context/github/GithubContext'
import './index.css'
import Github from './pages/Github';

function App() {
  return (
    <GithubProvider>
      <Navbar/>
      <Home/>
      <Github/>
    </GithubProvider>
  );
}

export default App;
