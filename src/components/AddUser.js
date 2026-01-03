import React from "react"


class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            email: "",
            age: 1,
            isHappy: false
        }
    }
  render() {
    return (
        <form ref={(el) => this.Myform = el}>
            <input placeholder="First Name" onChange={(e) => this.setState({first_name: e.target.value})}></input>
            <input placeholder="Last Name" onChange={(e) => this.setState({last_name: e.target.value})}></input>
            <textarea placeholder="Email" onChange={(e) => this.setState({email: e.target.value})}></textarea>
            <input placeholder="Age" onChange={(e) => this.setState({age: +e.target.value})}></input>
            <label htmlFor="isHappy">Is Happy?</label>
            <input type="checkbox" id="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}></input>
            <button type="button" onClick={() => {
                this.Myform.reset()
                this.userAdd = {
                    first_name: this.state.first_name,
                    last_name: this.state.last_name,
                    email: this.state.email,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                }
                if (this.props.user)
                    this.userAdd.id = this.props.user.id
                this.props.onAdd(this.userAdd)
            }}>Add</button>
        </form>
    )
    }
   
}

export default AddUser;