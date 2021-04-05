import React, { Component } from "react";
import dataPhones from "../Data/data.json";

class ProductList extends Component {
  productList = dataPhones;

  state = {
    currentPhone: dataPhones[0],
  };

  renderPhoneList = () => {
    return this.productList.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-left text-center">
            <img
              style={{ width: "200px", height: "250px", marginLeft: "90px" }}
              className="card-img-top"
              src={phone.image}
              alt={phone.image}
            />
            <div className="card-body">
              <h4 className="card-title">{phone.series}</h4>
              <p className="card-text">{phone.price}</p>
              <button
                onClick={() => this.viewDetails(phone)}
                className="btn btn-success"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      );
    });
  };

  viewDetails = (newPhone) => {
    return this.setState({
      currentPhone: newPhone,
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-4 text-center">Phone List</h3>
        <div className="row">{this.renderPhoneList()}</div>
        <div className="row mt-5">
          <div className="col-4">
            <h3>{this.state.currentPhone.series}</h3>
            <img
              style={{ width: "100%" }}
              src={this.state.currentPhone.image}
              alt={this.state.currentPhone.image}
            />
          </div>
          <div className="col-8">
            <h3>Specifications</h3>

            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>{this.state.currentPhone.series}</th>
                </tr>
                <tr>
                  <th>Screen Size</th>
                  <th>{this.state.currentPhone.screenSize}</th>
                </tr>
                <tr>
                  <th>Operating System</th>
                  <th>{this.state.currentPhone.operatingSystem}</th>
                </tr>
                <tr>
                  <th>Front Camera</th>
                  <th>{this.state.currentPhone.frontCamera}</th>
                </tr>
                <tr>
                  <th>Rear Camera</th>
                  <th>{this.state.currentPhone.rearCamera}</th>
                </tr>
                <tr>
                  <th>Ram</th>
                  <th>{this.state.currentPhone.ram}</th>
                </tr>
                <tr>
                  <th>Internal Memory</th>
                  <th>{this.state.currentPhone.internalMemory}</th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
