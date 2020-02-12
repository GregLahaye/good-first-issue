import React from "react";
import { render } from "react-dom";
import Header from "./Header";
import Filters from "./Filters";
import Results from "./Results";

class App extends React.Component {
  state = {
    language: "",
  };

  updateSelectedLanguage = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div>
        <Header />
        <Filters handleClick={this.updateSelectedLanguage} />
        <Results language={this.state.language} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
