import logo from './logo.svg';
import './App.css';
import React from 'react';





 
function Search(props){


  return(<>
    <label htmlFor='search'>Search: </label>
    <input id="search" type="text" onChange={props.onSearch} value={props.search}></input>
  </>);
}


// class Person{
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   getName(){
//     return this.firstName + " " + this.lastName;
//   }
// }

// const lejla = new Person("leki", "D.");
// console.log(lejla.getName);

function Item(props){
  return(
    <div>
      <li>
                <span>
                  <a href={props.item.url}>{props.item.title}</a>
                </span>
                <span>{props.item.author}</span>
                <span>{props.item.num_comments}</span>
                <span>{props.item.points}</span>
      </li>
    </div>
  );
}
function List(props){


  return(
    <ul>
      {
        props.list.map(function(item){
            return(
              <Item key ={item.objectID} item={item}/>
            );
          }
        )
      }
    
    </ul>
   
  );
}
// function Header(){
//   return (<>
//     <h1>Hi world</h1>
//     <List/>
//     </>

//   ); // my first functional compoment
// }

function App() {
  const stories = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];
    const [searchTerm, setSearchTerm] = React.useState("");


  const handleSearch = event =>{
    setSearchTerm(event.target.value);
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <div>
    <List list ={searchedStories}/>
    <Search search={searchTerm} onSearch={handleSearch}/>
    </div>;
}

export default App;
