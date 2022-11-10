import React from 'react';
import NotFoundImg from "../../../assets/images/404.jpg";
export default function NotFound() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <img 
                            src={NotFoundImg}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
