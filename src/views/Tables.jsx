import React from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import firebase from '../variables/firebaseConfig.js';

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">History</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Speed</th>
                        <th className="text-right">Yaw angle</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>12.9736994</td>
                        <td>79.1592625</td>
                        <td>0.063542482</td>
                        <td className="text-right">-3.738</td>
                      </tr>
                      <tr>
                        <td>12.9774587</td>
                        <td>79.1592625</td>
                        <td>0.056345482</td>
                        <td className="text-right">-4.735</td>
                      </tr>
                      <tr>
                        <td>12.9735587</td>
                        <td>79.1592625</td>
                        <td>0.056866482</td>
                        <td className="text-right">2.905</td>
                      </tr>
                      <tr>
                        <td>12.97087</td>
                        <td>79.1592625</td>
                        <td>0.056939482</td>
                        <td className="text-right">0.135</td>
                      </tr>
                      <tr>
                        <td>12.9703457</td>
                        <td>79.1592625</td>
                        <td>0.056725482</td>
                        <td className="text-right">-1.235</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
