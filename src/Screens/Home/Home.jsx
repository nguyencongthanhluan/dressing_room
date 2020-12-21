import React, { Component } from "react";
import HeaderComponent from "../../Layouts/Header/Header";
import FooterComponent from "../../Layouts/Footer/Footer";
import CategoriesComponent from "../../Components/Categories/Categories";
import ProductsComponent from "../../Components/Products/Products";
import ModelComponent from "../../Components/Model/Model";

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <CategoriesComponent />
              <ProductsComponent />
            </div>
            <div className="col-6">
              <ModelComponent />
            </div>
          </div>
        </div>
        <FooterComponent />
      </div>
    );
  }
}

export default HomeScreen;
