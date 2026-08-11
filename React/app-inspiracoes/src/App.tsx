import Copy from "./components/Copy"
import { FancyText } from "./components/FancyText"
import { Inspiration } from "./components/Inspiration"

function App() {

  return (
    <>
      <FancyText title text="App Inspiracional"/>
      <Inspiration>
        Me inspire mais
      </Inspiration> <br />
      <Copy />
    </>
  )
}

export default App
