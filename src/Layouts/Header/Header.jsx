import React, { Component } from "react";
import classes from "./style.module.css";

class HeaderComponent extends Component {
  render() {
    return (
      <div>
        <div className={classes.hovercard}>
          <div className={classes.cardbackground}>
            <div className={classes.useravatar}>
              <img alt="cybersoft.edu.vn" src="images/cybersoft.png" />
            </div>
            <div className={classes.cardinfo}>
              <span className={classes.cardtitle}>
                CyberSoft.edu.vn - Đào tạo chuyên gia lập trình - Dự án thử đồ
                trực tuyến - Virtual Dressing Room
              </span>
            </div>
          </div>
        </div>
        <hr className={classes.style13} />
      </div>
    );
  }
}

export default HeaderComponent;
