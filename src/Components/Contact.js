import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import pic from "../Images/sud.jpeg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2 style={{ fontWeight: "bold" }}>Sudhanshu Sharma</h2>
            <img
              src={pic}
              alt="idiot"
              style={{ width: "300px", borderRadius: "50%" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              A passionate coder with a knack to build mind-numbing projects
              with a sense of grammar.
            </p>
          </Cell>
          <Cell col={6}>
            <h2 style={{ fontWeight: "bold" }}>Contact Me</h2>
            {/* <hr /> */}
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i
                      className="fa fa-phone-square"
                      aria-hidden="true"
                      style={{ width: "60px", marginRight: "40px" }}
                    />
                    +91 9971378235
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontSize: "25px" }}>
                    <i
                      className="fa fa-envelope"
                      aria-hidden="true"
                      style={{ width: "60px", marginRight: "40px" }}
                    />
                    sudhanshu041@gmail.com
                  </ListItemContent>
                </ListItem>
                {/* <ListItem>
                  <ListItemContent style={{fontSize:'25px'}}>

                  </ListItemContent>
                </ListItem> */}
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
