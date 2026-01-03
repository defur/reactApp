import React from "react"
import * as ReactDOM from 'react-dom/client';
import App from "./App"
import './css/main.css'


// ReactDOM.render(React.createElement('input', {
//     placeholder: "help text",
//     onClick: () => console.log('clicked'),
//     onMouseEnter: () => console.log('hovered'),
// }), document.getElementById("app"))

const appp = ReactDOM.createRoot(document.getElementById("app"))

appp.render(<App />)

