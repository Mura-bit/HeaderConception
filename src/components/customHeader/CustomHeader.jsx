import "./customHeader.style.css";

const CustomHeader = ({text}) => {
    return (
        <a className="nav">{text}</a>
    )
}

export default CustomHeader;