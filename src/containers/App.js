import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import "./App.css";
// import { Component } from "react";

const App = () => {
  const [robots, setRobots] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (evt) => {
    setSearchfield(evt.target.value);
  };

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setRobots(users))
      .catch((err) => console.error(err));
  });

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <section className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundry>
          <CardList robots={filteredRobots} />
        </ErrorBoundry>
      </Scroll>
    </section>
  );
};

// // smart component, lifecycle methods, lifecycle: mounting, updating, unmounting
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       robots: [],
//       searchfield: "",
//     };
//   }

// componentDidMount() {
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then((users) => this.setState({ robots: users }))
//     .catch((err) => console.err(err));
// }

//   onSearchChange = (evt) => {
//     this.setState({ searchfield: evt.target.value });
//   };

//   render() {
//     const { robots, searchfield } = this.state;
//     const filteredRobots = robots.filter((robot) => {
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase());
//     });
//     return !robots.length ? (
//       <h1>Loading</h1>
//     ) : (
//       <section className="tc">
//         <h1 className="f1">RoboFriends</h1>
//         <SearchBox searchChange={this.onSearchChange} />
//         <Scroll>
//           <ErrorBoundry>
//             <CardList robots={filteredRobots} />
//           </ErrorBoundry>
//         </Scroll>
//       </section>
//     );
//   }
// }

export default App;
