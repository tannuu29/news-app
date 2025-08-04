import './App.css'
import React, { Component } from 'react'
import MyNavbar from './components/MyNavbar';
import News from './components/News';
import AboutUs from './components/AboutUs';
import {
  // BrowserRouter as Router,
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mode: "light",
      btnText: "🌙",
    };
  }

  toggleMode = () => {
    if (this.state.mode === "light") {
      this.setState({ mode: "dark", btnText: "☀️" });
      document.body.style.backgroundColor = "#121212"; // dark background
      document.body.style.color = "white";
    } else {
      this.setState({ mode: "light", btnText: "🌙" });
      document.body.style.backgroundColor = "white"; // light background
      document.body.style.color = "black";
    }
  };

  pageSize = 12;
  render() {
    return (
      <div>
        <Router>
          <MyNavbar mode={this.state.mode}
            toggleMode={this.toggleMode}
            btnText={this.state.btnText} />
          <Routes>
            <Route index element={<News key="home" pageSize={this.pageSize} country="us" category="" />} />
            <Route path="/business" element={<News key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/health" element={<News key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={this.pageSize} country="us" category="technology" />} />

             <Route path="/about" element={<AboutUs mode={this.state.mode} />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

