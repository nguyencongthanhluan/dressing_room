import React, { Component } from "react";
import { connect } from "react-redux";

class CategoriesComponent extends Component {
  render() {
    return (
      <div className="btn-group w-100">
        {this.props.categoryList.map((item, index) => (
          <button
            key={index}
            onClick={() => this._chooseCategory(item.type)}
            className={
              this.props.choosenCategory === item.type
                ? "btn btn-primary"
                : "btn btn-secondary border border-white "
            }
          >
            {item.showName}
          </button>
        ))}
      </div>
    );
  }
  _chooseCategory = (payload) => {
    this.props.dispatch({
      type: "SET_CATEGORY",
      payload,
    });
  };
}

const mapStateToProps = (state) => ({
  categoryList: state.categories,
  choosenCategory: state.choosenCategory,
});

export default connect(mapStateToProps)(CategoriesComponent);
