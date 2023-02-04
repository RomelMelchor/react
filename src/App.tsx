import { Navegacional } from "./components/navegacional/nav"

function App() {
  return (
    <>
      <Navegacional titulo="John Wick"
        nav1="Start"
        nav2="Store"
        nav3="Hello"
      ></Navegacional>
      <Navegacional
        nav1="Start"
        nav2="Store"
        nav3="Hello"
      ></Navegacional>
    </>
  )
}

export {App}