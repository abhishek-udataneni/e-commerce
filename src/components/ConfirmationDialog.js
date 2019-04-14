import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Card from "./Card";

class confirmationDialog extends React.Component {
  render() {
    return (
      <div>
        <Dialog open={this.props.open} onClose={this.props.close} aria-labelledby="responsive-dialog-title">
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
