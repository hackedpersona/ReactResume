import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import pic from '../Images/sud.jpeg';

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src={pic}
              alt="avatar "
              className="avatar"
            />
            <div className="banner-text">
              <h1>Sudhanshu Sharma | Software Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | React | GraphQL | Machine
                Learning
              </p>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/sudhanshu-sharma-9b278517b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/hackedpersona"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="http://facebook.com/obviouslysudhanshu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
                {/* <a
                  href="http://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a> */}
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
