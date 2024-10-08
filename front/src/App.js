import React , {useState} from "react";
import { Layout } from 'antd';
import { Header, Footer, Content} from 'antd/es/layout/layout'
//router 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Detail from "./Detail"
import Head from "./Head"
import Foot from "./Foot"
import Body from "./Body"
import "./index.css"


const App = () =>{
    //adjust to window size 
    const [bodyHeight] = useState(window.innerHeight - 64 - 64); 
    return(
        <BrowserRouter>

            <Layout>

                <Head />
                <Routes>
                    <Route path = '/' element = {<Body windowHeight={bodyHeight}/>} />
                    <Route path = '/detail' element = {<Detail windowHeight={bodyHeight}/>} />
                    

                </Routes>

                <Foot />

        
            </Layout>
        </BrowserRouter>
    )

}

export default App;
