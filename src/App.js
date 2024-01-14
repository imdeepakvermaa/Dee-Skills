import './App.css';
import Header from './components/Header';
import HeroPage from './components/HeroPage';

function App() {
  return (
    <div className='bg-gradient-to-b from-indigo-900 to-indigo-950 h-screen'>
      <Header />
      <div className="md:pt-32 lg:pt-20 xl:pt-24">
        <HeroPage />
      </div>
    </div>
  );
}

export default App;
