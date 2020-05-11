import React from "react"
import PropTypes from "prop-types"

import "../../css/layout.css"
import "../../css/styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          textAlign: "center",
          position: "relative",
        }}
      >
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
