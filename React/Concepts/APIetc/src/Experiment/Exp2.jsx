//using axios

import axios from "axios";

const Exp2 = () => {
  const getData =async () => {
    const response =await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response);
    console.log(response.data);
  };
  return (
    <div>
      <h1>using axios</h1>
      <button onClick={getData}>Click me</button>
    </div>
  );
};

export default Exp2;
