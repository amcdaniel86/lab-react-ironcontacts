import React, { Component } from 'react';
import './App.css';
import arrayOfContactsFromOtherFile from './contacts.json';


// put together pieces to a component in readme file so I can replicate this.

// class section
class ContactList extends Component {

      state = {
// goal is to be able to see contacts on the page, and have ability to see any iteration/combination of that array.
// ability to change what is shown on the page - that is the state.
// state: default appearance of a page. state can be any size, 100 lines even.
          fullListOfContacts: arrayOfContactsFromOtherFile,
          partialListOfContacts: arrayOfContactsFromOtherFile.splice(0,5),
          sortAscending: true
          // takes a slice of the requested array.
// splice  deletes stuff from an array.
      }

        showListOfContacts = () => {
              // where DELETE button goes, inside showListOfContacts
            return (

              this.state.partialListOfContacts.map((eachContact)=>{
                    return(
                        <div className="contact-card" key={i}>
                        {/* className always, NOT class for div's. */}
                          <h1>Name:  {eachContact.name}</h1>
                          <img src={eachContact.pictureUrl} />
                          <button onClick = {()=>this.deleteCelebrity(i)}>Delete This Celebrity</button>
                          {/* use SPLICE for DELETE, use i for index as the argument so to know where to delete. */}
                          <h3>Popularity: {eachContact.popularity}</h3>

                        </div>
                    )
              })
            )

                deleteCelebrity = (indexOfCelebrity) =>{
                  const currentList = [...this.state.partialListOfContacts];
                  currentList.splice(indexOfCelebrity, 1)
                  this.setState({partialListOfContacts: currentList});
                }
        }

        addARandomContact = () =>{
            // change state by adding contact to list.
            const newPartialList = [...this.state.partialListOfContacts];
            const fullList = [...this.state.fullListOfContacts];
            const randomNumber = Math.floor(Math.random()*fullList.length);
            const randomNewContact = fullList[randomNumber];
            partialList.push(randomNewContact);

            newPartialList.unshift(randomNewContact);
            fullList.splice(randomNumber, 1)
            this.setState({
              partialListOfContacts: newPartialList,
              fullListOfContacts: fullList
            })


            this.setState({partialListOfContacts: newPartialList})
// setState is required to enable changes from a function to modify the default state enabled at the top of a component.
// any function that will modify how a component appears, each function NEEDS this.setState after the function is over, to enable it to change the default of the page.
        }

          sortCelebrities = (whatShouldISortBy) =>{
              const theList = [...this.state.partialListOfContacts];
            // first step is to make a copy of the first thing in your state so you can run code on it and be able to see the changes.

              theList.sort((a,b)=>{
                // arguments: a and b are whole things (key, value) in the array. thus to put a.name means, pull the name key value from the a array.
                  // two arguments in sort, changes original thing, does NOT create a new one like splice does.

                    if(a[whatShouldISortBy] > b[whatShouldISortBy]){
                      // sort alphabetically by name
                      return this.state.sortAscending? 1 : -1
                    } else if (a[whatShouldISortBy] < b[whatShouldISortBy]{
                      // sort alphabetically opposite
                      return this.state.sortAscending? -1 : 1
                    }
                    return 0;
              })

                this.setState({
                  partialListOfContacts: the List,
                  sortNameAscending: ! this.state.sortNameAscending
                  // bang only works for true and false, TOGGLE usage.
                })


          }




      render(){
            console.log(this.state.partialListOfContacts)
          return(
// loop through, and have a .map inside a return
                <div className="theList">

                <button onClick= {this.addARandomContact}>Add Random Contact</button>
                <button onClick = {this.sortCelebrities('name')}>Sort By Name {this.state.sortAscending? 'Ascending': 'Descending'}</button>
                <button {this.sortCelebrities('popularity')}>Sort By Popularity {this.state.sortAscending? 'Ascending': 'Descending'}</button>
                {/* after first sort function declared, finalized, you can then turn sortCelebritiesByName into sortCelebrities, and then pass in a string to change it from name to popularity and vice versa. */}
                    {this.showListOfContacts()}

                </div>
          )
      }




}


// SLICE EXPLANATION
//  const myArray = [0,1,2,3,4,5]

// const smallerArray = myArray.slice(0,1)
// (start at this index point, end at this index point)
// console.log(smallerArray)

// SPLICE EXPLANATION

// const myArray = [0,1,2,3,4,5]

// const blah = myArray.splice[3,1]
// prints - [3]
// [3,2] prints [3,4]
// console.log(blah)
// console.log(myArray)
// splice deletes and also creates a new array without the missing items from original array.







export default ContactList;