import './App.css';
import Header from './components/Header';
import HeroPage from './components/HeroPage';

function App() {
  return (
    <div className='bg-gradient-to-t from-black to-indigo-950 h-screen'>
      <Header />
        <HeroPage />
    </div>
  );
};

export default App;
