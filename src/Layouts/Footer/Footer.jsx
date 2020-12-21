import React, { Component } from "react";
import classes from "./style.module.css";

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <hr className={classes.style13} />
        <div className={classes.hovercard}>
          <div className={classes.cardinfo}>
            <span className={classes.cardtitle}>
              @Copyright 2018- CyberSoft.edu.vn - MyClass.vn
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
