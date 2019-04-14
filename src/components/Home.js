import React, { Component } from 'react';
import Card from "./Card";
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
import {getBooksRequest} from "../actions/books";
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
        this.props.getBooksRequest();
        this.openDialog =  this.openDialog.bind(this)
    }
    openDialog = (id)=>{
        debugger
        let itemClicked = this.props.books.items.items.find((item) => {
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
        let books = this.props.books.items;
        // const { classes } = this.props;
        return (
                <Grid style={{marginTop:"4rem",marginBottom:"1rem"}}container>
                 <ItemDescriptionDialog item={this.state.itemClicked} open={this.state.isOpenItemDescription} close={this.closeDialog}/>
                        {JSON.stringify(books) !== {} && this.props.books.isDataLoaded &&
                            books.items.map((item, i) => {
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

export default  connect(({books}) => ({books}),{getBooksRequest})(Home);