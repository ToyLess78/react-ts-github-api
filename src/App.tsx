import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import FavouritesPage from "./pages/FavouritesPage.tsx";
import {Navigation} from "./components/Navigation.tsx";

function App() {

  return (
      <>
          <Navigation />
          <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/favourites" element={ <FavouritesPage /> } />
          </Routes>
      </>

  )
}

export default App
