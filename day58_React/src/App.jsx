import Hero from "./components/Hero";

const App = () => {

  const name = "superman"
  let obj = {
    course1:'React',
    course2:'Angular',
    course3:'Vue',
  }
  const hero = ["superman","spiderman","batman"]

  return (
    <>
      <div>
        <h1>We are learning React {name} </h1>
        <ul>
          <li>{obj.course1}</li>
          <li>{obj.course2}</li>
          <li>{obj.course3}</li>
        </ul>
        <ol>
          <li>{hero[0]}</li>
          <li>{hero[1]}</li>
          <li>{hero[2]}</li>
        </ol>
      </div>
      <Hero />
      <div>
        <h1>This is another h1</h1>
      </div>
    </>
  );
};

export default App;
