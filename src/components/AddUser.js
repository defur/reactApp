import React from "react"


class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
  render() {
    return (
        <form ref={(el) => this.Myform = el}>
            <input placeholder="First Name" onChange={(e) => this.setState({firstname: e.target.value})}></input>
            <input placeholder="Last Name" onChange={(e) => this.setState({lastname: e.target.value})}></input>
            <textarea placeholder="Bio" onChange={(e) => this.setState({bio: e.target.value})}></textarea>
            <input placeholder="Age" onChange={(e) => this.setState({age: e.target.value})}></input>
            <label htmlFor="isHappy" onChange={(e) => this.setState({isHappy: e.target.checked})}>Is Happy?</label>
            <input type="checkbox" id="isHappy"></input>
            <button type="button" onClick={() => this.props.onAdd({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                bio: this.state.bio,
                age: this.state.age,
                isHappy: this.state.isHappy
            })}>Add</button>
        </form>
    )
    }
   
}

export default AddUser;