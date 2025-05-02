
import './App.css';
import CardsContainer from './Components/CardsContainer';
import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Todo from './Components/Todo';
import LearningApi  from './Components/LearningApi';

function App() {
  return (
    <>
    <Header />
    <HomePage />
    <CardsContainer/>
    <Todo/>
    <LearningApi/>
    </>
  );
}

export default App;
