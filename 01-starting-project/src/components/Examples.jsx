import TabButton from './TabButton.jsx';
import { EXAMPLES } from '../data.js';
import { useState } from 'react';
import Section from './Section.jsx';

export default function Examples() {
    const [staticValue, updateDynamic] = useState("components");

    function clickHandler(selectedButton) {
        console.log(selectedButton);
        updateDynamic(selectedButton);
    }
    console.log('APP COMPONENT EXECUTING')
    let tabContent = <p>Please select a topic.</p>
    if (selectedButton) {
        tabContent = (
            <div id='tab-content'>
                <h3>
                    {EXAMPLES[staticValue].title}
                </h3>
                <p>
                    {EXAMPLES[staticValue].description}
                </p>
                <pre><code>{EXAMPLES[staticValue].code}</code></pre>
            </div>
        );
    }
    return (
        <Section id='examples'>
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={staticValue === "components"} onSelect={() => clickHandler("components")}>Components</TabButton>
                <TabButton isSelected={staticValue === "props"} onSelect={() => clickHandler("props")}>Props</TabButton>
                <TabButton isSelected={staticValue === "jsx"} onSelect={() => clickHandler("jsx")}>JSX</TabButton>
                <TabButton isSelected={staticValue === "state"} onSelect={() => clickHandler("state")}>State</TabButton>
            </menu>
            {tabContent}
        </Section>
    );
}