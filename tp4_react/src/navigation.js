import React from 'react'

class Navigation extends React.Component {
  //Constructeur
  constructor(props) {
    super(props);
    this.state = {
        id: 1,
    }
    this.changenum = this.changenum.bind(this);
  }

  getId(){
    return this.id
  }

  //function
  changenum(){
    this.setState({
      id: this.state.id + 1,
    })
  }

  //Render
  render(){
    return(
      <div>
        <p> {this.state.id} </p>
        <button onClick={() => this.changenum()}> C'est Super </button>

      </div>
    );
  }

}
export default Navigation;
