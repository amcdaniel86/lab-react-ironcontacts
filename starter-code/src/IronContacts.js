import React, { Component } from 'react';
import './App.css';
import Contacts from './contacts.json';


class Contacts extends Component {
    
  state = {
    stars : Contacts,
    style : {height: "2vw"},
    theNumber: 5
  }
  
  render() {
    const listCelebs = this.state.stars.map((eachStar,Index) =>{

        if(Index < this.state.theNumber){
       
              <tr>
                <th><img src={eachStar.pictureUrl} />
                </th>
                <th>{eachStar.name}</th>
                <th>{eachStar.popularity}</th>
              </tr>
            </table>


          )
        }


    })
    
    
    return (
    
      <div>

      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>

      </table>
      </div>
    );
  }
}









export default Contacts;