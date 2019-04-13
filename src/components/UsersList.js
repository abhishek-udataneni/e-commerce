import React, { Component } from 'react';
import {ListGroup,ListGroupItem,Button} from "reactstrap";

class UsersList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        let {users,onDeleteUser} = this.props;
        return (
            <ListGroup>
               { users.map((user) =>(
                    <ListGroupItem key={user.id}>
                        <section style={{display: "flex"}}>
                            <div style={{flexGrow: 1, margin: "0 auto"}}>
                                {user.firstName} {user.lastName}
                            </div>
                            <div>
                                <Button outline color="danger" onClick={() => {onDeleteUser(user.id)}}>
                                    Delete
                                </Button>
                            </div>
                        </section>
                    </ListGroupItem>
                ))}
            </ListGroup>
        );
    }
}

export default UsersList;