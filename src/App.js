import logo from './logo.svg';
import './App.css';
import NewsContext from './context/NewsContext';
import NewsList from './components/newslist/NewsList';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <NewsContext>
        <Navbar />
        <Header />
        <NewsList />
      </NewsContext>
    </div>
  );
}

export default App;
