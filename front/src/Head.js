import React , {useState} from 'react';
import New from "./New"
import {Button, Layout} from 'antd'
import {Menu} from 'antd'
import {useNavigate} from 'react-router-dom'
const {Header} = Layout;



const Head = () => {
    const [menus, setMenus] = useState([{title:"Campgrounds", path:"/"}, {title:"About", path:"/" }]);
    const navigate = useNavigate();

    const menuClick= (event) => {
        console.log(event)
        navigate(event.item.props.path)

    }



    return(
        <Header style = {{
            backgroundColor:'rgb(220,54,70'}}>
            <div style ={{
                color:'white' , fontSize: '22px' , width: '120px', float: "left",
                display: 'block'
            }}> YelpCamp</div>

            <div style = {{
                marginLeft: "50px",
                float : "left",
                display: "block",
                width: "400px"
            }}>

                <Menu style = 
                {{backgroundColor : "transparent",
                fontSize : "16px",
                color: "rgba(255,255,255,0.55)"
            }} 
                

                mode = "horizontal"
                defaultSelectedKeys={['Campgrounds']}
                items = {menus.map((item)=>{
                    const key = item.title;
                    return {key,label: `${item.title}`, path: item.path}
                })}

                onClick = {menuClick}
                />


            </div>

            <New>

            </New>


        


            
            
        </Header>

        
    );
}



export default Head;