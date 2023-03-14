import './App.css';
import Topics from './components/Topics';
import Introduction from './components/Introduction';
import AppNavbar from './components/Navbar';
import data from './data.json';
import EffectiveDecisionMaking from './components/EffectiveDecisionMaking';
import Paragraph from './components/Paragraphs';

function App() {
  return (
    <>
    <AppNavbar />
    <Introduction />
    <EffectiveDecisionMaking data={data} />
    <Paragraph props={data.data} />
    <Topics data={data} />
    </>
  )
}

export default App;
