import React, { useState, useEffect } from "react";
import SuggestionsPanel from "../suggestions-panel";
import getMockText from "../../text.service";
import "./FileZone.css";

const FileZone = () => {
    const [textSelected, setTextSelected] = useState("");
    const [value, setValue] = useState("");

    useEffect(() => {
        getText();
    }, []);

    const getText = async () => {
        const text = await getMockText();
        setValue(text);
    };

    /**
     * Every time a text is selected, store the info in the state
     */
    const onMouseUp = () => {
        const text = window.getSelection();
        const textSelected = text.toString();
        setTextSelected(textSelected);
    };

    return (
        <div id="file-zone">
            <div id="suggestions-zone">
                <SuggestionsPanel textSelected={textSelected} />
            </div>
            <div id="file">
                <div
                    id="text-area"
                    className="file-area"
                    contentEditable={true}
                    onMouseUp={onMouseUp}
                ></div>
            </div>
        </div>
    );
};

export default FileZone;
