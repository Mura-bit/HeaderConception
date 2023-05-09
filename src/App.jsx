import CustomHeader from './components/customHeader/CustomHeader.jsx';
import './App.css';
import CustomButton from './components/customButton/CustomButton.jsx';
import CustomImg from './components/customImg/CustomImg.jsx';

function App() {

  const showAlert = () => {
    return alert("Don't give up!")
  }
  return (
    <section className="header">
      <div className="navbar">
        <CustomHeader text="Home" type="head" />
        <CustomHeader text="About" type="head" />
        <CustomHeader text="Contacts" type="head" />

        <CustomImg />



        <CustomButton text="click Me!" type="btn" onClickHandler={showAlert} />
      </div>
    </section>
  );
}

export default App;
