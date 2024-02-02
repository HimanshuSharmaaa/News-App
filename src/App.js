import './App.css';
import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 6;
  // apikey = process.env.REACT_APP_NEWS_API;
  state = {progress : 10}
  setProgress=(progress)=>{this.setState({progress : progress})}
  render() {
    return (
      <div>
        <Router>
        <LoadingBar color='#f11946' progress={this.state.progress}/>
        <Navbar/>
        <Routes>
          <Route exact path="/"element={<News key="general"  pageSize={this.pageSize} setProgress={this.setProgress} country="in" category="general"/>}></Route>
          <Route exact path="/business"element={<News key="business"  setProgress={this.setProgress} pageSize={this.pageSize}  country="in" category="business"/>}></Route>
          <Route exact path="/health"element={<News key="health"  setProgress={this.setProgress} pageSize={this.pageSize}  country="in" category="health"/>}></Route>
          <Route exact path="/science"element={<News key="science"  setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="science"/>}></Route>
          <Route exact path="/sports"element={<News key="sports"  setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="sports"/>}></Route>
          <Route exact path="/general"element={<News key="general"  setProgress={this.setProgress}  pageSize={this.pageSize} country="in" category="general"/>}></Route>
          <Route exact path="/technology"element={<News key="technology"  setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="technology"/>}></Route>
          <Route exact path="/entertainment"element={<News key="entertainment"  setProgress={this.setProgress} pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

// npm run start
// npm install --save-dev @babel/plugin-proposal-private-property-in-object
// npm i react-infinite-scroll-component
// npm i react-top-loading-bar
