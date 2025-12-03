import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import Layout from "./components/ui/Layout"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { StoreContextProvider } from "./context/StoreContext"
import ProductDetails from "./components/pages/ProductDetails"



function App() {

  const paths : Array<string> = [
    "holiday",

  ]

  return (
    <>
      <BrowserRouter>
        <StoreContextProvider>
          <Layout>
            <Routes>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />}>
                <Route path=":category" element = {<Home/>} />

              </Route>
              <Route path="product/:id" element = {<ProductDetails/>} />

            </Routes>
          </Layout>
        </StoreContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
