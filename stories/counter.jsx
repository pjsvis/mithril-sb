const Counter = ({ attrs: { count = 0 } }) => {
    const decrement = () => count--;
    const increment = () => count++;
  
    return {
      view: () =>
        <div>
          <h1>{count}</h1>
          <button onclick={decrement} disabled={count <= 0}>-</button>
          <button onclick={increment}>+</button>
        </div>
    };
  };