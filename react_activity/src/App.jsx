import Cars from './Car.jsx'

function Car(){
    const myfunc = () => {
    alert('Hello World');
  };
  return (
    <button onClick={myfunc}>Click me</button>
  );
}

function App() {
  const x = "class";
  const brand = "BMW";
  const model = "Nissin Wafers"
  const hp = 218 * 1.16;
  const Car2 = {
    name : "Miata",
    model : "Oniichan",
    color : "Red"
  };
  return(
  <>
  <title>Fran Daffyl IT3-3</title>
  <h1 className={x}>Hello World!</h1>
  <h2>car vroom vroom</h2>
  <p>its a {brand} {model} and it has {hp} horsepower</p>
  <h2>This is my another car {Car2.name} {Car2.model} and its colored {Car2.color} </h2> 

  <div>
    <Car/>
    <Cars/>
  </div>
  </>
);

}
export default App