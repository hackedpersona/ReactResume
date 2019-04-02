import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={<Link style={{textDecoration:'none', color:'white'}} to="/">My Portfolio</Link>} scroll>
            <Navigation>
              <Link to="/Resume">Resume</Link>
              {/* <Link to="/AboutMe">About Me</Link> */}
              <Link to="/Contact">Contact</Link>
              <Link to="/Projects">Projects</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/Resume">Resume</Link>
              {/* <Link to="/AboutMe">About Me</Link> */}
              <Link to="/Contact">Contact</Link>
              <Link to="/Projects">Projects</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
