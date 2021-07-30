import { Posts } from "./components/posts";
import { Usuario } from "./components/user";
import { Addons } from "./components/addons";

import '../src/styles/app.scss'

function App() {
  return (
    <div className="app">
      <Usuario />
      <Posts />
      <Addons />
    </div>
    );
}

export default App;
