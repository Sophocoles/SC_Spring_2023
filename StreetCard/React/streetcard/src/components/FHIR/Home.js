import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ScList from "./ScList";
import NewScModal from "./NewScModal";

import axios from "axios";

import { API_URL } from "../../constants";

class Home extends Component {
  state = {
    scs: []
  };

  componentDidMount() {
    this.resetState();
  }

  getScs = () => {
    axios.get(API_URL).then(res => this.setState({ scs: res.data }));
  };

  resetState = () => {
    this.getScs();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <ScList
              scs={this.state.scs}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewScModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;