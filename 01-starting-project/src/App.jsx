import { useState } from 'react';
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [staticValue, updateDynamic] = useState("components");
  function clickHandler(selectedButton) {
    console.log(selectedButton);
    updateDynamic(selectedButton)
  }
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptData) => <CoreConcept {...conceptData} />)}
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={staticValue === "components"} onSelect={() => clickHandler("components")}>Components</TabButton>
            <TabButton isSelected={staticValue === "props"} onSelect={() => clickHandler("props")}>Props</TabButton>
            <TabButton isSelected={staticValue === "jsx"} onSelect={() => clickHandler("jsx")}>JSX</TabButton>
            <TabButton isSelected={staticValue === "state"} onSelect={() => clickHandler("state")}>State</TabButton>
          </menu>
          <div id='tab-content'>
            <h3>{EXAMPLES[staticValue].title}</h3>
            <p>{EXAMPLES[staticValue].description}</p>
            <pre>
              <code>
                {EXAMPLES[staticValue].code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
