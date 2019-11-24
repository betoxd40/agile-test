import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./SuggestionsPanel.css";
import { getSynonyms } from "../../api";

const SuggestionsPanel = ({ textSelected }) => {
    const [synonyms, setSynonyms] = useState([]);

    useEffect(() => {
        fetchApi();
    }, []);
    /**
     * This function should search all the suggestions and render it
     */
    const fetchApi = async () => {
        const apiResult = await getSynonyms();
        setSynonyms(apiResult);
    };
    return <div id="suggestions-panel"></div>;
};

SuggestionsPanel.propTypes = {
    textSelected: PropTypes.string
};

SuggestionsPanel.defaultProps = {
    textSelected: null
};

export default SuggestionsPanel;
