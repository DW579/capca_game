import React, { Component } from "react";
import { Container, Row, Col, } from "react-bootstrap";

class Main extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col></Col>
                    <Col><h1>CAPCA Game</h1></Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col>
                        <h3>Welcome to the CAPCA Game! This game will help you improve your CAPCA skills. Very important for the 21st century workforce :). Please select the amount of rounds you want to place and happy matching!</h3>
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}
export default Main;