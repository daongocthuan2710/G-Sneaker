import React, { useEffect, useState } from 'react';
import {Card} from "react-bootstrap";
import NikeIcon from "../../../assets/nike.png";
import CheckIcon from "../../../assets/check.png";
import Skeleton from '@mui/material/Skeleton';
import InputSpinner from "react-bootstrap-input-spinner";
import "./index.scss";

export default function Home() {
    const [shoes, setShoes] = useState([]);
    const [cartList, setCartList] = useState([...JSON.parse(localStorage.getItem('cart')) || []]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [animationDelete, setAnimationDelete] = useState(0);

    const fetchShoe =  async () => {
        try{
            await axios
            .get(`./api/shoes`)
            .then((response) => {
                setShoes(response.data);
            })
        } catch(error) {
          console.log("Fail to fetch shoe", error);
        }
    }

    useEffect(() =>{
        fetchShoe();
      }, []);
      
    useEffect(()=>{
        let total = 0;
        cartList.forEach((item) => {
            total += item.price * item.quantity;
        })
        setTotalPrice(total);
    }, [cartList])

    const handleAddToCart = (item) => {
        setTotalPrice(totalPrice + Number(item.price))
        let tmp = JSON.parse(localStorage.getItem('cart')) || [];
        tmp.push({...item, quantity: 1});
        localStorage.setItem('cart', JSON.stringify(tmp));
        setCartList(tmp);
    }

    const handleCheckQuatity = (quantity,item) => {
        item.quantity = quantity;
        const isSelect = (element) => element.id == item.id;
        let tmp = JSON.parse(localStorage.getItem('cart')) || [];
        const getId = tmp.findIndex(isSelect);
        tmp[getId] = item;
        localStorage.setItem('cart', JSON.stringify(tmp));
        setCartList(tmp);

        if(quantity == 0){
            handleRemove(0,item);
        }
    }

    const handleRemove = (item) => {
        let tmp = JSON.parse(localStorage.getItem('cart')) || [];
        const isRemoved = (element) => element.id == item.id;
        const getId = tmp.findIndex(isRemoved);
        tmp.splice( getId, 1);
        localStorage.setItem('cart', JSON.stringify(tmp));
        setCartList(tmp);
        setAnimationDelete(item.id);
        setTotalPrice(totalPrice - Number(item.price))
    }

    const isOnCart = (item) => {
        let shoeList = JSON.parse(localStorage.getItem('cart')) || [];
        for(let i = 0; i < shoeList.length; i++){
            if(shoeList[i].id == item.id) return true;
        }
        return false;
    }

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
                                {!isOnCart(item)
                                ?
                                <div className="shop-item__bottom__button" onClick={() => handleAddToCart(item)}>
                                    <p>ADD TO CART</p>
                                </div>  
                                :<div className="shop-item__bottom__button inactive">
                                    <div className="shop-item-button-cover">
                                        <div className="shop-item-button-cover-check-icon">
                                        </div>
                                    </div>
                                 </div>}

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

            <Card className="text-center">
                <Card.Header>
                    <img src={NikeIcon} alt="Nike" className="card-header__logo"/>
                </Card.Header>

                <Card.Title className="text-center">
                    Your cart
                    <span className="card-title__amount">${Number(totalPrice).toFixed(2)}</span>
                </Card.Title>

                <Card.Body>
                    <div className="cart-items">
                        {cartList.length > 0
                        ?
                        cartList.map((item) => (
                            <div 
                            className={`cart-item ${animationDelete == item.id ? 'fall' : ''}`} 
                            key={item.id}
                            >
                                <div className="cart-item__left">
                                    <div className="cart-item-image" style={{backgroundColor: item.color}}>
                                        <div className="cart-item-image__block">
                                        <img src={item.image}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item__right">
                                    <div className="cart-item-name">
                                        {item.name}
                                    </div>
                                    <div className="cart-item-price">
                                        ${item.price}
                                    </div>
                                    <div className="cart-item-actions">
                                        <div className="cart-item-count">
                                            <InputSpinner
                                                editable={true}
                                                type={"real"}
                                                precision={2}
                                                max={10}
                                                min={0}
                                                step={1}
                                                value={1}
                                                onChange={(quantity) => handleCheckQuatity(quantity,item)}
                                                variant={"secondary"}
                                                size=""
                                            />
                                        </div>
                                        <div className="cart-item-remove" onClick={() => handleRemove(item)}>
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAB2AAAAdgB+lymcgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALISURBVHic7Zs9bxNBEIYfgyUKAhhQUhDRICEBCh0fgkhBNIT8gPwZ6Gig5y8QCUhH5AqE3EZJgQRKEDSpKEAQkTMdcijGRvi8Z+/e3eze4X2kKe40t/Pu+LRfN4bIdNNQbLsJ3ATOFWznC7AJ/C6syCMngC3gsCTb7LdZGx5SXucH9kBD6BGNRoGrNWlTLQEa7R5VaFMtAbXBZwLWkVnHxtZ9iZr6N6Bp6TcHXAOOW/qfz7i36un5X8A28NXSfywrQJfypzVtS4D7ZSRgpwKdyWsfJnXOZincxf7VrxoJcHKcg80g2ClFShg6ZTQyD2xQr3GgC7yi+EYs8t+TZ329gKwJfiLzbRU4Cywh/fmuGegpw/PssmYwS5aAfURTD3ikFegKo4PNe61gDrxjWFMPuGj7sMte4JLh3mWH57VYSF03cDg7cEmAabxQ2aM7UkjX1O8GfSRgHmgjM8YO4wfOFWC379umYguZVcyrrkm0U/4JMGvwm2N0tblh0b5Jk+222csbcCd1PYOsI9KYzhvuqij6Bx8JMO0kZyz91HehcRAMLSA0MQGhBYQmJiC0gNDEBIQWEJqYgNACQhMTEFpAaGICQgsITUxAaAGhiQnwEMP0+axr6af+6c1HAjqp6wQpo02zxWhi3moIykveU+FBfUGCfEq7N8Z3GSlrSbD/vl/oVNiFvAnQpvLH4pUmJsDBN2tEDlnHn1UBZppljLgkYC/j/i2HNspmMeP+nkawY8ABowPOa41gFjSQaTKt5wDRqsKaIeAh8Bjd/x+laQBPMrQ80wy8iJSgmAK/QWpzW4rxW8gndNMvPyiPua0YH4DnGcGrYGuK/f7LGeBjgM5Nsl3gtGK/h7gAfFbukIt96mvySgt4WVB4UesBL4BTyn0dy42+iEGxog/bR8ai60XFlzl1NZFiyllknNDgB/ANKbaq1V9pI1XlD82w8ru3YIVHAAAAAElFTkSuQmCC" />
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        ))
                    :<div>Your cart is empty.</div>}

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
