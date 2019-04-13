import React, { Component } from 'react';
import Card from "./Card";
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import {getUsersRequest,createUserRequest,deleteUserRequest,usersError} from "../actions/users";
import { Snackbar } from '@material-ui/core';
// style = {{
//     display: "flex",
//         flexDirection: "row",
//             justifyContent: "center"
// }}

class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     isOpenAddToCartSnack:false
        //   };
        this.props.getUsersRequest();
    }
 
    render() {
        let users = this.props.users.items;
        // const { classes } = this.props;
        return (
                <Grid container>
                 
                        {JSON.stringify(users) !== {} && this.props.users.isDataLoaded &&
                            users.items.map((item, i) => {
                                return (
                                    <Grid key={item.id} container justify="center" item xs={12} sm={6} md={4} lg={3}>
                                        <Card {...item}/>
                                    </Grid>
                                )
                            })}
                </Grid>
        );
    }
}

export default  connect(({users}) => ({users}),{getUsersRequest,createUserRequest,deleteUserRequest,usersError})(Home);