import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../../constants";

class NewScForm extends React.Component {
  state = {
    id: 0,
    name: "", 
    client_id: "", 
    scope: "", 
    url: "", 
    redirect_uri: "", 
    patientId: "", 
    patientName: ""
  };

  componentDidMount() {
    if (this.props.sc) {
      const { id, name, client_id, scope, url, redirect_uri, patientId, patientName } = this.props.sc;
      this.setState({ id, name, client_id, scope, url, redirect_uri, patientId, patientName });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createSC = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editSC = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.sc ? this.editSC : this.createSC}>
        <FormGroup>
          <Label for="id">id:</Label>
          <Input
            type="text"
            name="id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="client_id">client_id:</Label>
          <Input
            type="text"
            name="client_id"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.client_id)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="scope">scope:</Label>
          <Input
            type="text"
            name="scope"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.scope)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="url">url:</Label>
          <Input
            type="text"
            name="url"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.url)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="redirect_uri">redirect_uri:</Label>
          <Input
            type="text"
            name="redirect_uri"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.redirect_uri)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="patientId">patientId:</Label>
          <Input
            type="text"
            name="patientId"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.patientId)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="patientName">patientName:</Label>
          <Input
            type="text"
            name="patientName"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.patientName)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewScForm;