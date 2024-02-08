import { todoSlice } from "./feature/todoFeatures/todoSlice"
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"

function App() {

  return (
    <>
      <div>reduxToolkit</div>
      <AddTodo />
      <Todos/>
    </>
  )
}

export default App
