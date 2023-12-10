
import { CORE_CONCEPTS } from './data';
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx'

function App() {
  function clickHandler(selectedButton) {
    console.log(selectedButton);
  }

  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clickHandler("Conmponents")}>Components</TabButton>
            <TabButton onSelect={() => clickHandler("Props")}>Props</TabButton>
            <TabButton onSelect={() => clickHandler("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => clickHandler("State")}>State</TabButton>
          </menu>
        </section>

      </main>
    </div>
  );
}

export default App;
