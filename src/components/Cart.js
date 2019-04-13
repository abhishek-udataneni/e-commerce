import React, { Component } from 'react';
import {connect} from "react-redux";

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                {this.props.cart.items}
            </div>           
        );
    }
}
const mapStatetoProps = state => {
    return {
        cart:state.cart,
    };
};
export default connect(mapStatetoProps,null)(Cart);  