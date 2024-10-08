import { PlusOutlined } from "@ant-design/icons";
import { Button, Col, Input, Modal, Rate, Row, Upload } from 'antd';
import React, { useState } from 'react';
import Maps from "./Map";

const {TextArea} = Input;

function New(){
    const [show,setShow] = useState(false);
    const [imagePreviewShow,setImagePreviewShow] = useState(false);
    const [imagePreviewTitle, setImagePreviewTitle] =useState('')
    const [imagePreviewSrc, setImagePreviewSrc] = useState('')
    const [maxUploadPicNum] = useState(6);
    const [picList, setPicList] = useState([])


    const handleShowModal = () => {
        setShow(true);
    }

    const handleOnOk = () => {
        setShow(false);
    }

    const handleOnCancel = () => {
        setShow(false);
    }

    const imagePreviewShowCancel = () => {setImagePreviewShow(false)}
    const UploadButton =  (
        <div>
            <PlusOutlined />
            <div style = {{marginTop: 8}}>Upload</div>
        </div>
    );

    const getBase64 = (file) => new Promise ((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

    const uploadImagePreviewHandle = async (file) => {
        if(!file.url && !file.preview){
            file.preview = await getBase64(file.originFileObj);
        }
        setImagePreviewSrc(file.url || file.preview)
        setImagePreviewShow(true); 
        setImagePreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    }
    
    const uploadImageHandle = ({file, fileList, event}) => {
        setPicList(fileList);

    }
    return(
        <div style = {{float : "right", display:"block", width:"100px" }}>
            <Button style = {{
                backgroundColor:"transparent",
                color:"rgba(255,255,255)",

            }}
            size = "large"
            onClick = {handleShowModal}>
            
            New
            </Button>
            <Modal width = {"800px"} title = {"Share a Site"} open = {show} onOk={handleOnOk} onCancel={handleOnCancel}>
                <Row><Col span = {3}>Name: </Col></Row>
                <Row><Col span = {24}><Input size = "small" /></Col></Row>

                <Row><Col span = {3}>Title: </Col></Row>
                <Row><Col span = {24}><Input size = "small" /></Col></Row>
                
                <Row><Col span = {3}>Rating: </Col></Row>
                <Row><Col span = {24}><Rate /><Input size = "small" /></Col></Row>

                <Row><Col span = {3}>Address: </Col></Row>
                <Row><Col span = {24}><Input size = "small" /></Col></Row>

                <Row><Col span = {3}>Location: </Col></Row>
                <Row><Col span = {24}><Maps latlng={{lat:34, lng:119}} zoom = {6}/></Col></Row>

                <Row><Col span = {4}>Camp description: </Col></Row>
                <Row><Col span = {24}><TextArea row = {4}/></Col></Row>

                <Row><Col span = {4}>Upload picture: </Col></Row>
                <Row><Col span = {24}>
                    <Upload
                        action =" "
                        listType = "picture-card"
                        fileList = {picList}
                        onPreview={uploadImagePreviewHandle}
                        onChange = {uploadImageHandle}
                        
                    >

                    {picList.length >= maxUploadPicNum ? null :UploadButton}

                    </Upload>
                
                
                </Col></Row>
                
                



            </Modal>
            <Modal open = {imagePreviewShow} title = {imagePreviewTitle} footer = {null} onCancel={imagePreviewShowCancel}>
                <img alt = "pic" style = {{width:'100%'}} src = {imagePreviewSrc} />

            </Modal>
        </div>


    );
}

export default New;