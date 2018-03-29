import React, { Component } from "react"
import { StyleProvider } from "native-base"

import App from "../App"
import getTheme from "../native-theme/components"

export default class Setup extends Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <App />
      </StyleProvider>
    )
  }
}
