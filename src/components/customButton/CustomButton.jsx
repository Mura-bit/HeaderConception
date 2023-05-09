import "./customButton.style.css";

const CustomButton = ({ text, type }) => {
    const onClickHandler = () => {
        alert("Good job!");
    }
    return (
        <button className={`${type}`} onClick={onClickHandler}>{text}</button>
    )
}

export default CustomButton;