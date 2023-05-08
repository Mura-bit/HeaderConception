import CustomHeader from './components/customHeader/CustomHeader.jsx';
import './App.css';

function App() {
  const showPrompt = () => {
    return alert("Good job!")
  }
  return (
    <section className="header">
      <div className="navbar">
        <CustomHeader text="Home" type="head" onClickHandler={showPrompt} />
        <CustomHeader text="About" type="head" onClickHandler={showPrompt} />
        <CustomHeader text="Contacts" type="head" onClickHandler={showPrompt} />
      </div>
    </section>
  );
}

export default App;
