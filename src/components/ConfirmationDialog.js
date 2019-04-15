import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DoneOutline from '@material-ui/icons/DoneOutline';
import IconButton from '@material-ui/core/IconButton';

class confirmationDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog open={this.props.open} onClose={this.props.close} aria-labelledby="responsive-dialog-title">
        <IconButton  style={{marginTop:"2rem",marginBottom:"1rem"}}color="inherit">
            <DoneOutline fontSize="large" color="primary" />
        </IconButton>
     
          <DialogContent>
            Your Order has been confirmed.
          </DialogContent>
          
          <DialogActions>
            <Button onClick={this.props.close} color="primary" autoFocus>Close</Button>
          </DialogActions>
        </Dialog>
      </div> 
    );
  }
}

export default confirmationDialog;
