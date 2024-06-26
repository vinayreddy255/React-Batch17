import logo from './logo.svg';
import './App.css';
// import HelloWorld from './Components/19-06-2024/HelloWorld';
import StatesEvents from './Components/19-06-2024/StatesEvents';
import Counter from './Components/19-06-2024/Counter'
import ListItems from './Components/20-06-2024/ListItems';
import InputHandler from './Components/20-06-2024/InputHandler';
import AddToList from './Components/20-06-2024/AddToList';
import ComponentA from './Components/24-06-2024/ComponentA';
import CondationAlRendering from './Components/24-06-2024/CondationAlRendering';
import RectForgment from './Components/26-06-2024/RectForgment';
function App() {
  return (
    < >
      {/* 19-06-2024 */}
      {/* <HelloWorld /> */}
      {/* <StatesEvents /> */}
      {/* <Counter /> */}
      {/* <HelloWorld>
      </HelloWorld> */}

      {/* 20-06-2024 */}
      {/* <ListItems />
      <InputHandler />
      <AddToList /> */}

      {/* 24-06-2024 */}
      {/* <ComponentA />
      <CondationAlRendering /> */}
      {/* 26-06-2024 */}
      <RectForgment name="Hello">
        <div>
          <h3>Hello React js world, html, css, js, hyderbad</h3>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </RectForgment>

    </>
  );
}

export default App;
