import React from 'react';
import Hola, * as Greetings from './Hola';

function App() {
    console.log(Hola());
    return Greetings.sayHi('Hola Muchaches');
}

export default App;
