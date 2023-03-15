import './App.css';
import Topics from './components/Topics';
import Introduction from './components/Introduction';
import AppNavbar from './components/Navbar';
import data from './data.json';
import EffectiveDecisionMaking from './components/EffectiveDecisionMaking';
import Paragraph from './components/Paragraphs';
import Image from './components/Image';
import architecture from './images/architecture.webp';
import ImportantQuestion from './components/ImportantQuestion';
import decisionProcess from './images/decion_making_process.jpg';
import Footer from './components/Footer';
import Title from './components/Title';

function App() {
  return (
    <>
    <AppNavbar />
    <Introduction />
    <ImportantQuestion props={data.importantQuestion} />
    <Topics data={data} />
    <Title title="Business Intelligence: Effective and Timely Decisions" /> 
    <EffectiveDecisionMaking data={data} />
    <Paragraph props={data.data} />
    <Paragraph props={data.information} />
    <Paragraph props={data.knowledge} />
    <Paragraph props={data['mathematical-model']} />
    <Paragraph props={data['business-intelligence-architecture']} />
    <Image src={architecture} alt="Business Intelligence Architecture"  caption="Business Intelligence Architecture" />
    <Paragraph props= {data.ethics} />
    <Paragraph props={data.decision} />
    <Paragraph props={data.system} />
    <Paragraph props={data.dmp} />
    <Image src={decisionProcess} alt="Decision Making Process" caption="Decision Making Process" />
    <Paragraph props={data.evolution} />
    <Paragraph props={data.dssDefintion} />
    <Paragraph props={data.dssDevelopment} />
    <Footer />
    </>
  )
}

export default App;
