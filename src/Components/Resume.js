import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import pic from "../Images/sud.jpeg";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center", paddingTop: "20px" }}>
              <img
                src={pic}
                alt="logo"
                width="250px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <h2 style={{ paddingTop: "20px", textAlign: "center" }}>
              Sudhanshu Sharma
            </h2>
            <h4
              style={{
                color: "#345678",
                textAlign: "center",
                fontWeight: "bold"
              }}
            >
              Programmer
            </h4>
            <hr style={{ width: "50%" }} />
            A passionate coder with a wide variety of skills, both technical and
            non-technical, and adaptiveness to adjust to the fast moving world.
            <hr style={{ width: "50%" }} />
            <h5>Phone</h5>
            <p>+91 9971378235</p>
            <hr style={{ width: "50%" }} />
            <h5>Email</h5>
            <p>sudhanshu041@gmail.com</p>
            <hr style={{ width: "50%" }} />
            <h5>Website</h5>
            <p>
              <a
                href="https://hackedpersona.github.io"
                style={{ textDecoration: "none", color: "black" }}
              >
                My personal website
              </a>
            </p>
          </Cell>
          <Cell col={8} className="resume-right-col">
            <h2>Education</h2>
            <Grid>
              <Cell col={4}>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  2002-2016
                </p>
              </Cell>
              <Cell col={8}>
                <p style={{ fontSize: "15px" }}>
                  Montfort Senior Secondary School, Phase 1, Ashok Vihar, Delhi
                  110052
                </p>
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>
                  2016-2020
                </p>
              </Cell>
              <Cell col={8}>
                <p style={{ fontSize: "15px" }}>
                  Bharti Vidyapeeth College of Engineering
                </p>
              </Cell>
            </Grid>
            <hr />
            <h2>Experience</h2>
            <Grid>
              <Cell col={4}>
                <p style={{ fontSize: "15px", fontWeight: "bold" }}>2 months</p>
              </Cell>
              <Cell col={8}>
                <p style={{ fontSize: "15px" }}>
                  Machine Learning and implementation in Embedded Systems using
                  Artificial Intelligence, Project was collecting real time data
                  using Arduino and DHT11 sensor and then using it to predict
                  future weather conditions.
                </p>
              </Cell>
            </Grid>
            <hr />
            <h2>Skills</h2>
            <Grid>
              <Cell col={4}>
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "5px",
                    fontWeight: "bold"
                  }}
                >
                  HTML/CSS/Javascript
                </p>
              </Cell>
              <Cell col={8} style={{ display: "flex" }}>
                <hr
                  style={{
                    width: "95%",
                    border: "5px solid white",
                    height: "0px"
                  }}
                />
                <hr
                  style={{
                    width: "5%",
                    border: "5px solid black",
                    height: "0px"
                  }}
                />
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "5px",
                    fontWeight: "bold"
                  }}
                >
                  ReactJS
                </p>
              </Cell>
              <Cell col={8} style={{ display: "flex" }}>
                <hr
                  style={{
                    width: "80%",
                    border: "5px solid white",
                    height: "0px"
                  }}
                />
                <hr
                  style={{
                    width: "20%",
                    border: "5px solid black",
                    height: "0px"
                  }}
                />
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "5px",
                    fontWeight: "bold"
                  }}
                >
                  Machine Learning
                </p>
              </Cell>
              <Cell col={8} style={{ display: "flex" }}>
                <hr
                  style={{
                    width: "70%",
                    border: "5px solid white",
                    height: "0px"
                  }}
                />
                <hr
                  style={{
                    width: "30%",
                    border: "5px solid black",
                    height: "0px"
                  }}
                />
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "5px",
                    fontWeight: "bold"
                  }}
                >
                  C/C++
                </p>
              </Cell>
              <Cell col={8} style={{ display: "flex" }}>
                <hr
                  style={{
                    width: "90%",
                    border: "5px solid white",
                    height: "0px"
                  }}
                />
                <hr
                  style={{
                    width: "10%",
                    border: "5px solid black",
                    height: "0px"
                  }}
                />
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "5px",
                    fontWeight: "bold"
                  }}
                >
                  Python
                </p>
              </Cell>
              <Cell col={8} style={{ display: "flex" }}>
                <hr
                  style={{
                    width: "85%",
                    border: "5px solid white",
                    height: "0px"
                  }}
                />
                <hr
                  style={{
                    width: "15%",
                    border: "5px solid black",
                    height: "0px"
                  }}
                />
              </Cell>
            </Grid>
            <Grid>
              <Cell col={4}>
                <p
                  style={{
                    fontSize: "15px",
                    paddingTop: "5px",
                    fontWeight: "bold"
                  }}
                >
                  App Development
                </p>
              </Cell>
              <Cell col={8} style={{ display: "flex" }}>
                <hr
                  style={{
                    width: "40%",
                    border: "5px solid white",
                    height: "0px"
                  }}
                />
                <hr
                  style={{
                    width: "60%",
                    border: "5px solid black",
                    height: "0px"
                  }}
                />
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
