// App.js

import React from 'react';
import NavBar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListConteiner';
import { AppRouter } from './router/AppRouter';

const App = () => {
  return (
    <div className="app">
      {/* <NavBar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" /> */}
      <AppRouter />
    </div>
  );
};

export default App;

