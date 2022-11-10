import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Home";
import { Loading } from "notiflix/build/notiflix-loading-aio";
import NotFound from "./NotFound";

export default function App() {
    return (
        <Suspense fallback={
            Loading.hourglass({
            clickToClose: true,
            svgSize: "50px",
            svgColor: "rgb(223, 139, 42)",
            backgroundColor: "rgb(255, 255, 255)"
        })}> 
        {Loading.remove()}   
            <BrowserRouter>
                <Routes>  
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="home" component={<Home/>}></Route>
                    <Route path="*" element={<NotFound/>}/>
                </Routes> 
            </BrowserRouter>
        </Suspense>
    )
}
