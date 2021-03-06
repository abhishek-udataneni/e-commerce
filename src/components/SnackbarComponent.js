import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


class SnackbarComponent extends React.Component {
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
