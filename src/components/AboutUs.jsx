import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default class AboutUs extends Component {
  render() {
    return (
      <Container className="my-5">
        <Card className="shadow-lg p-4 border-0">
          <Card.Body>
            <Card.Title className="text-center mb-4 fs-2 fw-bold">
              About <span className="text-primary">Newsly</span>
            </Card.Title>
            <Card.Text className="fs-5 text-muted">
              Welcome to <strong>Newsly</strong>, your trusted source for the latest and most 
              reliable news across the globe. We aim to deliver accurate, unbiased, 
              and timely updates that help you stay informed about what truly matters.
            </Card.Text>
            <Card.Text className="fs-5 text-muted">
              Whether it’s <strong>business</strong>, <strong>entertainment</strong>, 
              <strong>health</strong>, <strong>science</strong>, <strong>sports</strong>, 
              or <strong>technology</strong> — Newsly curates top stories to keep you 
              ahead in today’s fast-moving world.
            </Card.Text>
            <Card.Text className="fs-5 text-muted">
              Our mission is simple: <em>make news accessible, engaging, and easy to explore</em>. 
              We believe that knowledge empowers, and we’re here to provide it at your fingertips.
            </Card.Text>
            <Card.Text className="text-center fs-5 fw-semibold text-secondary">
              Thank you for choosing Newsly. Stay informed. Stay ahead.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
