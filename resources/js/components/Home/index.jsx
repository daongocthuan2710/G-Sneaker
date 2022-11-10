import React, { useEffect, useState } from 'react';
import {Card, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import NikeIcon from "../../../assets/nike.png";
import "./index.scss";

export default function Home() {
    const [shoes, setShoes] = useState([]);

    const fetchShoe =  async () => {
        try{
            await axios
            .get(`./api/shoes`)
            .then((response) => {
                console.log(response.data);
                setShoes(response.data);
            })
        } catch(error) {
          console.log("Fail to fetch shoe", error);
        }
    }

    useEffect(() =>{
        fetchShoe();
      }, []);

    return (
        <div className="main-content">
            <Card className="text-center">
                <Card.Header>
                    <img src={NikeIcon} alt="Nike" className="card-header__logo"/>
                </Card.Header>

                <Card.Title className="text-center">
                    Our Products
                </Card.Title>

                <Card.Body>
                    <div className="shop-items">
                        <div className="shop-item">
                            <div className="shop-item__image" style={{backgroundColor: 'rgb(225, 231, 237)'}}>
                                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-mens-running-shoe-wide-D24Mcz-removebg-preview.png" />
                            </div>

                            <div className="shop-item__name">
                                Nike Air Zoom Pegasus 36
                            </div>
                            <div className="shop-item__description">
                                The iconic Nike Air Zoom Pegasus 36 offers more cooling and mesh that targets breathability across high-heat areas. A slimmer heel collar and tongue reduce bulk, while exposed cables give you a snug fit at higher speeds
                            </div>
                            <div className="shop-item__bottom">
                                <div className="shop-item__bottom__price">
                                    $108.97
                                </div>
                                <div className="shop-item__bottom__button">
                                    <p>ADD TO CART</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
