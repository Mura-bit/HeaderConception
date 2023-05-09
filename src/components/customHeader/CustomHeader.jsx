import "./customHeader.style.css";

const CustomHeader = ({ text, type }) => {
    const onClickHandler = () => {
        alert("Do not give up!")
    }
    return (
        <a className={`${type}`} onClick={onClickHandler}>{text}</a>
    )
}

export default CustomHeader;