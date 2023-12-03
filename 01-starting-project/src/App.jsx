import reactImg from './assets/react-core-concepts.png';
import componentsImg from "./assets/components.png"
const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomDescription(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescription[genRandomDescription(2)]} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  )
}
function CoreConcept(props) {
  return (
    <li>
      <img src={props.img} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              description="The core UI building blocks."
              img={componentsImg} />
            <CoreConcept
              title="Props"
              description="The core UI building blocks."
              img={componentsImg} />
            <CoreConcept
              title="Components"
              description="The core UI building blocks."
              img={componentsImg} />
            <CoreConcept
              title="Components"
              description="The core UI building blocks."
              img={componentsImg} />
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
