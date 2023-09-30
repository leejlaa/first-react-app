import logo from './logo.svg';
import './App.css';
import React from 'react';





 
  const Search = ({search, onSearch}) =>(
    <div>
      <label htmlFor='search'>Search: </label>
      <input id="search" type="text" onChange={onSearch} value={search}></input>
    </div>
  );



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

const  Item = ({
  item: {
    title,
    url,
    author,
    num_comments,
    points,
  },
  }) => (
    <div>
      <li>
                <span>
                  <a href={url}>{title}</a>
                </span>
                <span>{author}</span>
                <span>{num_comments}</span>
                <span>{points}</span>
      </li>
    </div>
  );

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
