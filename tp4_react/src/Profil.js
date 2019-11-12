import React from 'react';
import jeanne from './jeanne.jpg'
import martine from './martine.jpg'
import claude from './claude.jpg'

class Profil extends React.Component {
  //Constructeur
  constructor(props) {
    super(props);
    this.state = {
        prenom: 'Jeanne',
        nom: 'Durant',
        date: '11/05/1901',
        couleur: 'rouge',
        image : jeanne
    };
    this.changeProfile = this.changeProfile.bind(this);
    this.changeColor = this.changeColor.bind(this);
  }

  //function
  changeProfile(nom, prenom, date, couleur, image){
    this.setState({
      prenom: prenom,
      nom:nom,
      date: date,
      couleur: couleur,
      image: image
    })
  }

  getColor(){
    return this.state.couleur
  }

  changeColor(){
   if(this.getColor() == 'rouge'){
      this.setState({
        couleur: 'vert',
      })
    }
    if(this.getColor() == 'vert'){
      this.setState({
        couleur: 'bleu',
      })
    }
    if(this.getColor() == 'bleu'){
      this.setState({
        couleur: 'rouge',
      })
    }

  }



  //Render
  render(){
    return(

      <div>
      <button onClick={() => this.changeProfile('Durant','Jeanne','11/05/1901','rouge',jeanne)}> Jeanne </button>
      <button onClick={() => this.changeProfile('Dou','Martine','30/03/1950','bleu',martine)}> Martine </button>
      <button onClick={() => this.changeProfile('Da','Claude','15/02/1956','vert',claude)}> Claude </button>
      <div id={this.state.couleur}>
        <div>
          <img src={this.state.image} alt={this.state.prenom} width="300px" height="200px"/>
        </div>
        <div>
          <p> Prénom : {this.state.prenom} Nom : {this.state.nom} </p>
        </div>
        <div>
          <p> Date de naissance : {this.state.date} </p>
        </div>
        <div>
          <button onClick={() => this.changeColor()}> Change Style </button>
        </div>
      </div>
      </div>

    );
  }

}
export default Profil;
