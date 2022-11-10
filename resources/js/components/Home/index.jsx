import React, { useEffect, useState } from 'react';
import {Card} from "react-bootstrap";
import NikeIcon from "../../../assets/nike.png";
import Skeleton from '@mui/material/Skeleton';
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
                    {shoes.length > 0 
                    ? shoes.map((item) => (
                        <div className="shop-item" key={item.id}>
                            <div className="shop-item__image" style={{backgroundColor: item.color}}>
                                <img src={item.image} />
                            </div>

                            <div className="shop-item__name">
                                {item.name}
                            </div>
                            <div className="shop-item__description">
                                {item.description}
                            </div>
                            <div className="shop-item__bottom">
                                <div className="shop-item__bottom__price">
                                    ${item.price}
                                </div>
                                <div className="shop-item__bottom__button">
                                    <p>ADD TO CART</p>
                                </div>
                            </div>
                        </div> 
                    ))
                    : 
                    <div className="shop-item">
                        <div className="shop-item__image">
                            <Skeleton 
                                variant="rectangular" 
                                width="100%"
                                height={400}
                                animation={'pulse'}
                            />
                        </div>

                        <div className="shop-item__name">
                            <Skeleton 
                                variant="text" 
                                width="100%"
                                height={40}
                                animation={'pulse'}
                            />
                        </div>
                        <div className="shop-item__description">
                        <Skeleton 
                                variant="text" 
                                width="100%"
                                height={40}
                                animation={'pulse'}
                            />
                        </div>
                        <div className="shop-item__bottom">
                            <Skeleton 
                                variant="text" 
                                width="100%"
                                height={40}
                                animation={'pulse'}
                            />
                        </div>
                    </div> 
                    }
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
