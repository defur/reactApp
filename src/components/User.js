import React from "react"
import AddUser from "./AddUser.js"
import { IoCloseCircleSharp, IoHammerSharp } from "react-icons/io5";

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false
        }
    }
    user = this.props.user;
    render() {
        return (
            <div className="user">
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
                <IoHammerSharp onClick={() => 
                    this.setState({editForm: !this.state.editForm})
                } className="edit-icon" />
                        <h3>{this.user.first_name} {this.user.last_name}</h3>
                        <p>Email: {this.user.email}</p>
                        <p>Age: {this.user.age}</p>
                        <b>{this.user.isHappy ? 'happy :)' : 'sad ;('}</b>
                        <img className="avatar" src={this.user.avatar} />
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}

            </div>
        )
    }
}

export default User