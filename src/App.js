import "./App.css";
import { Button, Badge } from "./lib";

function App() {
  return (
    <div className="App">
      <h1>NPM Package by Talha Abbas</h1>
      <Badge value="Talha" />
      <Button
        id="Talha"
        type="submit"
        value="Talha"
        name="Talha"
        disabled={false}
        label="Talha"
      />
    </div>
  );
}

export default App;
