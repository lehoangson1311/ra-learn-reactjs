import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  // useEffect(function () {
  //   document.title = `You clicked ${count} times`;
  // });
  const handleIncrease = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1> You clicked {count} times</h1>
      <button onClick={handleIncrease}>Click me</button>
    </div>
  );
}

export default App;
