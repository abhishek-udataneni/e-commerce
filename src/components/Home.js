import React, { Component } from 'react';
import Card from "./Card";
import {connect} from "react-redux";
import Grid from '@material-ui/core/Grid';
import {getBooksRequest} from "../actions/books";
import ItemDescriptionDialog from "./ItemDescriptionDialog";
import CircularProgress from '@material-ui/core/CircularProgress';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenItemDescription:false
          };
        
    }
    openDialog = (id)=>{
        let itemClicked = this.props.books.items.items.find((item) => {
                return item.volumeInfo.title === id;
              });
        this.setState({
            isOpenItemDescription:true,
            itemClicked
        })
    }
    closeDialog = ()=>{
        this.setState({
            isOpenItemDescription:false
        })
    }
    
    render() {
        let books = this.props.books.items;
        if(this.props.books.loading){
            return (
               
                    <Grid conatainer direction= 'column'
                        justify= 'center'
                        alignItems='center'>
                        <CircularProgress item style={{
                            margin: 0,
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            marginRight:" -50%",
                    
                    }} color="secondary" />
                    </Grid>  
                 
            )
        }
        if(!this.props.books.items.items){
            return <div style={{marginTop:"4rem",marginBottom:"1rem"}}> No books found.</div>
        }
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