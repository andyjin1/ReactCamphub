import {useSearchParams} from 'react-router-dom'
import {Row, Col, Divider,Rate, Image,Carousel, List, Typography, Button, Modal,Input} from 'antd'
import {useState} from 'react'
import Maps from "./Map"

const {Paragraph, Text} = Typography;
const {TextArea} = Input;


const Detail = ({windowHeight}) => {
    const [SearchParams] = useSearchParams()
    return(
        <content style ={{ minHeight : windowHeight}}>
            <Row style = {{marginTop:"20px"}}>
                <Col span = {2}></Col>
                <Col span={12}>
                <Description />
                <Divider plain>Comments</Divider>
                <Comments />
                </Col>
                <Col span ={7} offset = {1}>
                    <Divider plain>Gallery</Divider>
                    <Imgs />
                    <Divider plain>Location</Divider>
                    <Maps latlng={{lat:85,lng:160}}zoom = {6} />
                </Col>
                <Col span = {2}></Col>
            </Row>
        </content>

    );
}

const Description = () => {
    return (
        <div>
            <Row><h1>Test</h1></Row>
            <Row style = {{marginTop:"10px",lineHeight : "35px"}}>
                <Col span = {6}><Rate disabled defaultValue= {4} /></Col>
                <Col span = {4}><span>Rating 4 分</span></Col>
                <Col span = {4}> 10239 Comments</Col>
                <Col offset = {1}>Published 2023-11-23</Col>
            </Row>
            <Row style = {{marginTop:"10px"}}><h3>地址：aoisdjfoijasdoifjasd</h3></Row>
            <Row style = {{marginTop:"10px"}}><h3>公寓描述：aoisdjfoijasdoifjasd</h3></Row>
            <Row style = {{marginTop:"10px"}}><span>ajsodijfoaisdjfoijasdfjaosd</span></Row>
        </div>
    )
}

const imgs = ["https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp","https://photos.zillowstatic.com/fp/294afdaf69ec13953506b811dbccac0c-p_e.webp"];

const Imgs = () => {

    return(
        <div>
            <Carousel autoplay style = {{backgroundColor : 'rgba(209,209,209,0.5', height: 300, textAlign:'center'}}>
                {
                    imgs.map((img,idx)=><Image key = {idx} height = {300} src = {img} />)
                }
            </Carousel>

        </div>
    )
}

const comments = [
    {user: "Tom", stars: 4, time: "2023-11-21 12:22:22", desc:"good"},
    {user: "Tom", stars: 4, time: "2023-11-22 12:22:22", desc:"good"},
    {user: "Tom", stars: 4, time: "2023-11-23 12:22:22", desc:"good"},
    {user: "Tom", stars: 4, time: "2023-11-24 12:22:22", desc:"good"},
    {user: "Tom", stars: 4, time: "2023-11-25 12:22:22", desc:"good"}
]

const Comments = () => {
    return(
        <div>
            <List 
                header={<CommentButton />}
                bordered 
                size = "small"
                dataSource = {comments}
                renderItem = {(item) => (
                    <List.Item>
                        <Typography>
                            <Paragraph>
                                <span>{item.user}</span>
                                <span style = {{marginLeft : "20px"}}>Rating：{item.stars} </span>
                                <span style = {{marginLeft : "20px"}}>Time：{item.time} </span>
                            </Paragraph>
                            <Text>{item.desc}</Text>
                        </Typography>
                    </List.Item>
                )}

            
            />
        </div>
        
    )
}

const CommentButton = () => {
    const [show, setShow] = useState(false)
    const [user, setUser] = useState("")
    const [stars, setStars] = useState(0);
    const [desc, setDesc] = useState("")


    return(
        <div>
            <Button type = "primary" size = "small" onClick={() => {setShow(true);setUser("");setDesc("")}}>Comment</Button>
            <Modal open = {show} onOk = {() => setShow(false)} onCancel = {() => setShow(false)} 
            title = "Responses"
            >
                <Row>
                    <Col span={4}>Username: </Col>
                    <Col span={18}><Input size = "small" value = {user} onChange ={e => {setUser(e.target.value)}}
                    
                    
                    /></Col>

                
                </Row>
                <Row>
                    <Col span={4}>Rating: </Col>
                    <Col span={18}><Rate value = {stars} onChange = {setStars} /></Col>

                
                </Row>

                <Row>
                    <Col span={4}>Comment: </Col>
                    <Col span={18}><TextArea row = {4} value = {desc} onChange = {e => setDesc(e.target.value)} /></Col>

                
                </Row>
            </Modal>
        </div>
    )
}






export default Detail