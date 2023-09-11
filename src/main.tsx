import nightwind from "nightwind/helper"
import React from "react"
import ReactDOM from "react-dom/client"
import { Helmet } from "react-helmet"
import App from "./App.tsx"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <script>{nightwind.init()}</script>
    </Helmet>
    <App />
  </React.StrictMode>
)
