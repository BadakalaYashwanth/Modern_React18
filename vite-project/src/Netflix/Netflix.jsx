import "./Netflix.css"
import Header from "./Header"
import Hero from "./Hero"

function Netflix() {
  return (
    <div className="netflix-bg">
      <div className="overlay">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default Netflix
