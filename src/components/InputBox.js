import React from "react"
import "../scss/components/InputBox.scss";

const InputBox = (props) =>  {
    return <input className="custom-input" {...props} />
};

export default InputBox;