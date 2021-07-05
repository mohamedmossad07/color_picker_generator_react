import { useState } from "react";
import values from "values.js";
import SingleColor from './SingleColor'
function App() {
  // set color to state
  const [color, setColor] = useState("");
  const [list, setList] = useState(new values('#f15025').all(10));
  const [error, setError] = useState(false);

  // handel submit
  function handelSubmit(e) {
    e.preventDefault();
    try {
      // try to find if this color can be valid
      const colors = new values(color).all(10);
      // set list to valid colors
      setList(colors)
     } catch (error) {
      // set error to true 
      setError(true);
    }
  }
  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handelSubmit}>
          <input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="e.g #222 or #fff"
            className={error?'error':''}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color,i)=><SingleColor key={i} index={i} {...color} />)}
      </section>
    </>
  );
}

export default App;
