import React, { Component } from "react";
// import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];


  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme = "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {

  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData?.name;
      this.titles = this.props.sharedData?.titles;
    }

    return (
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div>
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false"></span>
              <br/>
              <h1 className="mb-0">
                {name}
              </h1>
              <div className="title-container">
                <div className="title-styles">
                    {this.titles && this.titles.join(" | ")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
