import logo from './logo.svg';
import './App.css';
import React from 'react';





const Button = ({onClick}) =>(
  <div>
    <button type="button" onClick={onClick} >
      Click me
    </button>
  </div>
);

 
  const InputWithLabel = ({ id,type = 'text', label, value, onInputChange }) =>(
    <div>
      <label htmlFor={id}>{label} </label>
      <input id="search" type={type} value={value} onChange={onInputChange}></input>
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
    title,
    url,
    author,
    num_comments,
    points,
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

function List({list}){


  return(
    <ul>
      {
        list.map( ({objectID, ...item}) => ( // here i used rest operator to separate objectID into a variable an the REST into item object.
              <Item 
              key ={ objectID} 
              {...item} // spread operator in JS
              />
            )
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
    const [searchTerm, setSearchTerm] = React.useState(
      localStorage.getItem('search') || 'React'
      );
      const [count, setCount] = React.useState(0);

      const handleClick = () => {
        setCount(count + 1);
        console.log(count);
      };


  const handleSearch = event =>{
    setSearchTerm(event.target.value);
    localStorage.setItem('search', event.target.value);
  }

  const searchedStories = stories.filter((story) =>
    story.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <div>
    <List list ={searchedStories}/>
    <InputWithLabel search={searchTerm} onSearch={handleSearch}/>
    <Button onClick={handleClick}>Toggle</Button>
    </div>;
}

export default App;
