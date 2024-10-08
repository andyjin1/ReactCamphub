import React from 'react';

import {Layout , List, Card, Rate} from 'antd'
import {Link} from 'react-router-dom'
const {Content} = Layout;
const {Meta} = Card;

const data = [
    {id: "1", title: "test", stars:4, addr:"address", desc:"description", imgs:["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]},
    {id: "2",title: "test", stars:3, addr:"address", desc:"description", imgs:["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]},
    {id: "3",title: "test", stars:5, addr:"address", desc:"description", imgs:["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]},
    {id: "4",title: "test", stars:2, addr:"address", desc:"description", imgs:["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]},
    {id: "5",title: "test", stars:3, addr:"address", desc:"description", imgs:["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]},
    {id: "6",title: "test", stars:3, addr:"address", desc:"description", imgs:["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"]}
];


const Body = ({windowHeight}) =>{
    return(
        <Content style ={{ minHeight : windowHeight}}>
            <Camps />
        </Content>

        
    );
}


//List function
const Camps = () => {
    return(
        <div style = {{marginLeft: "35px", marginTop:"20px"}}>
        <List
            grid = {{column: 4}} 
            dataSource = {data}
            renderItem = {(item) => (
                <List.Item>
                    <Link target = "blank" to = {{pathname: `/detail`, search: `id=${item.id}`}}>
                        <Card
                            style = {{width:300}}
                            cover = {<img style = {{height:"180px", width: "300px"}} src = {item.imgs[0]} />}
                        >
                            <Rate disabled defaultValue= {item.stars} />
                            <Meta title = {item.title} description = {`${item.desc.substring(0,16)}...`}/>
                        </Card>
                    </Link>
                </List.Item>
            )}

    
        />

</div>

    )
}

export default Body;