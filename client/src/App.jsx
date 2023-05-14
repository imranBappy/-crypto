import { useEffect, useState } from "react"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import List from "./components/List/List"
import Price from "./components/Price/Price"

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000").then(res => res.json())
      .then(data => {
        setData(data)
      })
  }, [])
  console.log(data);
  return (
    <>
      <Header data={data} />
      <Price />
      <List data={data} />
      <Footer />
    </>
  )
}

export default App
