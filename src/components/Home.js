import React, { Component } from 'react';
import Card from "./Card";
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import {getUsersRequest} from "../actions/users";
import ItemDescriptionDialog from "./ItemDescriptionDialog";
// style = {{
//     display: "flex",
//         flexDirection: "row",
//             justifyContent: "center"
// }}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenItemDescription:false
          };
        this.props.getUsersRequest();
        this.openDialog =  this.openDialog.bind(this)
    }
    openDialog = (id)=>{
        debugger
        let itemClicked = this.props.users.items.items.find((item) => {
                return item.volumeInfo.title === id;
              });
        
        console.log(itemClicked)
        this.setState({
            isOpenItemDescription:true,
            itemClicked:itemClicked
        })
    }
    closeDialog = ()=>{
        this.setState({
            isOpenItemDescription:false
        })
    }
    render() {
        let users = this.props.users.items;
        // const { classes } = this.props;
        return (
                <Grid container>
                 <ItemDescriptionDialog item={this.state.itemClicked} open={this.state.isOpenItemDescription} close={this.closeDialog}/>
                        {JSON.stringify(users) !== {} && this.props.users.isDataLoaded &&
                            users.items.map((item, i) => {
                                return (
                                    <Grid key={item.id} container justify="center" item xs={12} sm={6} md={4} lg={3}>
                                        <Card openDialog={this.openDialog} {...item}/>
                                    </Grid>
                                )
                            })}
                </Grid>
        );
    }
}

export default  connect(({users}) => ({users}),{getUsersRequest})(Home);