import React, { useEffect, useState } from 'react';
import "./index.scss";

export default function Home() {
    const [shoes, setShoes] = useState([]);

    const fetchShoe =  async () => {
        try{
            axios
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

        </div>
    );
}
