import React from "react"
import '../assets/scss/main.scss'
import logo from "./../images/ThingersLogo.png"

const IndexPage = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      width: "100%",
      position: "absolute",
      flexFlow: "column",
    }}
  >
    <img width={300} src={logo} alt="Thingers.ir" />
    <h1
      style={{
        textAlign: "center",
        lineHeight: 1.7,
        fontFamily: "fantasy",
        color: "rgba(23, 49, 62, 0.9)",
        textShadow: "0px 6px 5px rgba(0, 0, 0, 0.21)",
      }}
    >
      Thingers IOT NEXT...
    </h1>
  </div>
)

export default IndexPage
