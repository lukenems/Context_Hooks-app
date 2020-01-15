import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {context => {
          const { isLightTheme, light, dark } = context;
          const currentTheme = isLightTheme ? light : dark;
          return (
            <nav
              style={{
                background: currentTheme.ui,
                color: currentTheme.syntax
              }}
            >
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
