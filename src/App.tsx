import { Posts } from "./components/posts";
import { Usuario } from "./components/user";

import '../src/styles/app.scss'

function App() {
  return (
    <div className="app">
      <Usuario />
      <Posts />
    </div>
    );
}

export default App;
