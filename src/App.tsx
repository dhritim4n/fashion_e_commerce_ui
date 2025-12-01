import Home from "./components/pages/Home"
import Layout from "./components/ui/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { StoreContextProvider } from "./context/StoreContext"


function App() {

  return (
    <>
      <BrowserRouter>
        <StoreContextProvider>
          <Layout>
            <Routes>
              <Route index element={<Home />} />

            </Routes>
          </Layout>
        </StoreContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App
