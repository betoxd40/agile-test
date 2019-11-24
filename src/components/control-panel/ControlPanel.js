import React from "react";
import Button from "../button";
import "./ControlPanel.css";

const ControlPanel = () => {
    const onClickBold = () => document.execCommand("bold");
    const onClickUnderline = () => document.execCommand("underline");
    const onClickItalic = () => document.execCommand("italic");
    return (
        <div id="control-panel">
            <div id="format-actions">
                <Button onClick={onClickBold}>
                    <b>B</b>
                </Button>
                <Button onClick={onClickItalic}>
                    <b>I</b>
                </Button>
                <Button onClick={onClickUnderline}>
                    <b>U</b>
                </Button>
            </div>
        </div>
    );
};

export default ControlPanel;
