
import About from "./components/About"
import Blogs from "./components/Blogs"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Ministries from "./components/Ministries"
import NavBar from "./components/NavBar"
import Seremonies from "./components/Seremonies"
function App() {

  return (
   <div className="App bg-amber-100 h-fit w-full items-center justify-center m-auto flex flex-col text-6xl font-bold">
    <NavBar />
    <Home />
    <About />
    <Ministries />
    <Blogs />
    <Seremonies />
    <Contact />
    </div>
  )
}

export default App
