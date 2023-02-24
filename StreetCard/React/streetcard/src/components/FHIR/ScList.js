import React, { Component } from "react";
import { Table } from "reactstrap";
import NewScModal from "./NewScModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class ScList extends Component {
  render() {
    const scs = this.props.scs;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>client_id</th>
            <th>scope</th>
            <th>url</th>
            <th>redirect_uri</th>
            <th>patientId</th>
            <th>patientName</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!scs || scs.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            scs.map(sc => (
              <tr key={sc.id}>
                <td>{sc.name}</td>
                <td>{sc.client_id}</td>
                <td>{sc.scope}</td>
                <td>{sc.url}</td>
                <td>{sc.redirect_uri}</td>
                <td>{sc.patientId}</td>
                <td>{sc.patientName}</td>
                <td align="center">
                  <NewScModal
                    create={false}
                    sc={sc}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    id={sc.id}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default ScList;