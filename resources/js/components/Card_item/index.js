import React from "react";
import {Card, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import Skeleton from '@mui/material/Skeleton';
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