import { Route, Routes } from "react-router-dom"
import ItemListContainer from "../componentes/ItemListConteiner"
import NavBar from "../componentes/Navbar"
import { InitialPage } from "../componentes/InitialPage"
import { Contact } from "../componentes/Contact"
import { ProductDetail } from "../componentes/ProductDetail"

export const AppRouter = () => {
  return (
    <>
    <NavBar />
    <Routes>
        <Route path="/" element={<ItemListContainer greeting="Lista de productos"/>} />
        <Route path="initial" element={<InitialPage/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
    </>
  )
}
