import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    let { dataPhoneItem } = this.props;

    return (
      <div className="card text-left text-center">
        <img
          style={{ width: "200px", height: "250px", marginLeft: "90px" }}
          className="card-img-top"
          src={dataPhoneItem.image}
          alt={dataPhoneItem.image}
        />
        <div className="card-body">
          <h4 className="card-title">{dataPhoneItem.series}</h4>
          <p className="card-text">{dataPhoneItem.price.toLocaleString()}</p>
          <button
            onClick={() => {
              this.props.onClickViewDetails(dataPhoneItem);
            }}
            className="btn btn-success"
          >
            View Details
          </button>
        </div>
      </div>
    );
  }
}

export default ProductItem;
