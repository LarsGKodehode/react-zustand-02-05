import { useBearStore, useShoppingCart } from "./stores/bearStore";

import { useState } from "react";

// Zustand examples
function Display() {
  const bears = useBearStore((state) => state.bears);

  return <h1>{bears}</h1>;
}

function Controls() {
  const incremeantPopulation = useBearStore(
    (state) => state.increasePopulation
  );

  const killPopulation = useBearStore((state) => state.removeAllBears);

  return (
    <>
      <button onClick={incremeantPopulation}>Increase Population</button>
      <button onClick={killPopulation}>Increase Population</button>
    </>
  );
}

// Use state example
function UseStateDisplay(props) {
  const { state } = props;

  return <h1>{state}</h1>;
}

function UseStateControls(props) {
  const { handleClick } = props;

  return <button onClick={handleClick}>Increment</button>;
}

// Simple shopping cart example
function AddProduct() {
  const addProduct = useShoppingCart((state) => state.addProduct);

  function handleClick() {
    addProduct({
      id: (Math.random() * 2 ** 32).toFixed(),
      productName: "Computer",
      price: "Priceless",
    });
  }

  return <button onClick={handleClick}>Add Product</button>;
}

function ShoppingCart() {
  const cart = useShoppingCart((state) => state.cart);

  return (
    <ul>
      {cart.map((item) => {
        return <li key={item.id}>{item.productName}</li>;
      })}
    </ul>
  );
}

// Application component
function App() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState((prevState) => prevState + 1);
  }

  return (
    <div>
      <header>
        <h1>Hello World</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur amet
          vitae saepe!
        </p>
      </header>

      <Display />
      <Controls />

      <UseStateDisplay state={state} />
      <UseStateControls handleClick={handleClick} />

      <div>
        <AddProduct />
        <ShoppingCart />
      </div>
    </div>
  );
}

export default App;
