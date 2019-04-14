import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {addToCart} from "../actions/cart";
import {connect} from "react-redux";
import { FormHelperText } from '@material-ui/core';
import SnackbarComponent from "./SnackbarComponent";

const styles = theme => ({
  card: {
    maxWidth: 300,
    marginTop: 30,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isOpenAddToCartSnack:false
      };
   
  }
  addCartClick = (id) => {
    this.props.addToCart(id)
  }
  handleAddToCart = (id) => {
    this.setState({ isOpenAddToCartSnack: true });
  };

  handleAddToCartClose = () => {
    this.setState({ isOpenAddToCartSnack: false });
  };
  render() {
    const { classes,volumeInfo,dialog } = this.props;
    let foldedDescription="";
    if(dialog){
      foldedDescription = volumeInfo.description ? volumeInfo.description :
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }else{
      foldedDescription = volumeInfo.description ? volumeInfo.description.substring(0,100) :
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
   
    return (
      <Card style={{maxWidth:this.props.width}} className={classes.card}>
        <div onClick={() => this.props.openDialog(volumeInfo.title)}>
          <CardHeader avatar={<Avatar aria-label="Recipe" className={classes.avatar}>U</Avatar>} action={<IconButton><MoreVertIcon /></IconButton> }
            title={volumeInfo.title}
            subheader={volumeInfo.authors.slice(0,2).join(",")}
          />
          <CardMedia
            className={classes.media}
            image={volumeInfo.imageLinks ? volumeInfo.imageLinks.thumbnail :"http://books.google.com/books/content?id=or6G-rTUs44C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"}
            title="book Image"
          />
          <CardContent>
            <Typography component="p">
              {foldedDescription}
            </Typography>
          </CardContent>
        </div>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <div onClick={()=>{
            this.addCartClick(volumeInfo.title)}}>
          <SnackbarComponent openClick={this.handleAddToCart} closeClick={this.handleAddToCartClose} open={this.state.isOpenAddToCartSnack}>
            <IconButton aria-label="Share">
              <AddShoppingCart />
            </IconButton>
          </SnackbarComponent> 
          </div>
          <Typography >
            $ {volumeInfo.title.length}
          </Typography>
        </CardActions>
      </Card>
    );
  }
}
const mapStatetoProps = state => {
  return {
      cart:state.cart,
  };
};

export default connect(mapStatetoProps, {addToCart})(withStyles(styles)(RecipeReviewCard));
