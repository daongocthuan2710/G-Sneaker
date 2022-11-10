import React from "react";
import {Card} from "react-bootstrap";
import "./index.scss";

function CardItem() {

    return (
            <Card className="text-center">
                <Card.Top className="card-top">
                    Card Top
                </Card.Top>

                <Card.Title className="text-center">
                    Card Title
                </Card.Title>

                <Card.Body className="card-body">
                    Card body
                </Card.Body>
            </Card>
    );
}
export default CardItem;