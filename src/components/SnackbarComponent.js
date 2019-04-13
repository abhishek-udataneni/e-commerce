import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Fade from '@material-ui/core/Fade';

class SnackbarComponent extends React.Component {
  // handleClick = () => {
  //   this.props.openClick()
  // };

  // handleClose = () => {
  //   this.props.closeClick()
  // };

  render() {
    let {open,openClick,closeClick} = this.props;
    return (
      <div>
        <div onClick={openClick}>
          {this.props.children}
        </div>
        <Snackbar open={open} onClose={closeClick} autoHideDuration={1000} 
          ContentProps={{'aria-describedby': 'message-id',}}
          message={<span id="message-id">1 item has been added</span>}
        />
      </div>
    );
  }
}

export default SnackbarComponent;
