import React, { Component } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux"
import { productsFetch } from "../actions"

class Home extends Component { //class component
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.productsFetch();
    // #1
    // this.setState({products : [
    //   { productId: 1, ProductName: "สลัดผัก", ProductPrice: "120", thumbnail: "/images/product/1.jpg" },
    //   { productId: 2, ProductName: "ไก่ทอด", ProductPrice: "90", thumbnail: "/images/product/2.jpg" },
    //   { productId: 3, ProductName: "บิงซู", ProductPrice: "200", thumbnail: "/images/product/3.jpg" },
    //   { productId: 4, ProductName: "เฟรนฟราย", ProductPrice: "140", thumbnail: "/images/product/4.jpg" },
    //   { productId: 5, ProductName: "เค้ก 3 ชั้น", ProductPrice: "200", thumbnail: "/images/product/5.jpg" },
    //   { productId: 6, ProductName: "กาแฟ เฮลตี้ฟู้ด", ProductPrice: "140", thumbnail: "/images/product/6.jpg" }
    // ]});

    //#2
    // fetch(" http://localhost:3001/products",{method : "GET"})
    // .then(res => res.json())
    // .then(res => { this.setState({products : res})});

    //#3 Axios
    // axios.get("http://localhost:3001/products").then(res => {
    //   this.setState({products : res.data});
    // });
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products}/>
        <Footer email="rawiphon_k@gmail.com" />
      </div>
    );
  }
}

// ex01
// function mapStateToProps( state ){
//   return {products:state.products};
// }

//ex02
function mapStateToProps( {products} ){
  return {products};
}

export default connect(mapStateToProps, { productsFetch })(Home);
