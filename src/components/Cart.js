import React, { Component } from 'react';
import {connect} from "react-redux";
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';
import {addItem,removeItem} from "../actions/cart";
import ConfirmationDialog from './ConfirmationDialog';
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpenConfirmationDialog:false
      };
}
openDialog = ()=>{
    this.setState({
      isOpenConfirmationDialog:true,
    })
}
closeDialog = ()=>{
    this.setState({
      isOpenConfirmationDialog:false
    })
}
    render() {
        let sumData = Object.keys(this.props.cart.items).map((item) => ({name: item, quantity: this.props.cart.items[item], price: item.length }));
        let tableData = Object.keys(this.props.cart.items).map((item) => ({name: item, quantity: this.props.cart.items[item], price: `$ ${item.length} `}));
        let total = sumData.reduce((a, item) => a + item.price*item.quantity, 0)
        return (
          <Grid container justify="center" align="center">
          <ConfirmationDialog open={this.state.isOpenConfirmationDialog} close={this.closeDialog}/>
            <Card style={{marginTop: "2rem"}}elevation={0}>
              <CardContent style={{ padding: 0 }}>
                <MaterialTable
                  columns={[
                    { title: "Name", field: "name" },
                    { title: "Quantity", field: "quantity" },
                    { title: "Price", field: "price", type: "numeric" }
                  ]}
                  data={tableData}
                  actions={[
                    {
                      icon: () => <AddCircleOutline />,
                      tooltip: "Delete Item(s)",
                      onClick: (e, rowData) => {
                        this.props.addItem(rowData.name);
                      }
                    },
                    {
                      icon: () => <RemoveCircleOutline />,
                      tooltip: "Delete Item(s)",
                      onClick: (e, rowData) => {
                        this.props.removeItem(rowData.name);
                      }
                    }
                  ]}
                  title="Basic"
                  options={{
                    toolbar: false,
                    paging: false,
                    actionsColumnIndex: -1
                  }}
                />

                <div
                  style={{
                    padding: "10px 20px 10px 10px",
                    textAlign: "right"
                  }}
                />
              </CardContent>
          
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Grid container>
                  <Grid item xs="12">
                    <Typography  align="right"  style={{ marginRight: 10,marginBottom:10 }}>Total: $ {total.toFixed(2)}</Typography>
                  </Grid>
                  <Grid item xs="12">
                    <Typography  align="right" style={{ marginRight: 10,marginBottom:10 }}>GST(2.5%) : $ {(total*0.025).toFixed(2)}</Typography>
                  </Grid>
                  <Grid item xs="12">
                    <Typography  align="right" style={{ marginRight: 10,marginBottom:10}}> CGST(2.5%) : $ {(total*0.025).toFixed(2)} </Typography>
                  </Grid>
                  <Grid item xs="12">
                    <Typography  align="right" variant="title" style={{ marginRight: 10 }}>Grand Total : $ {(total*1.05).toFixed(2)} </Typography>
                  </Grid>
                </Grid>
               
             
              </CardActions>
              <Button  onClick={this.openDialog} variant="contained" color="primary" fullWidth>
                  Pay
              </Button>
               
            </Card>
          </Grid>
        );
    }
}
const mapStatetoProps = state => {
    return {
        cart:state.cart,
        users:state.users
    };
};
export default connect(mapStatetoProps,{addItem,removeItem})(Cart);  