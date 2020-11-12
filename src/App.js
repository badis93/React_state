import './App.css';
import myProfile from "./myProfile.jpg"
import React from 'react';

class Welcome extends React.Component {
  state = {
    fullName : "Med Boumessouer",
    bio: "",
    imgSrc :myProfile, 
    profession : "engeneer",
    show : false,
  }
  shown = () => {
  this.setState({show : !this.state.show})
  };
  render() {
    return (
    <>
    <button onClick={this.shown}> Click </button>
{ this.state.show ? (<div>
        <h1>Bonjour</h1>
        <h1>{this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
        <h1>{this.state.profession}</h1>
        
              <img src={this.state.imgSrc} alt="myProfile"  />
            
      
              </div>) : null
  
}
      
      
      </>
    )
        }  
}

export default Welcome;
