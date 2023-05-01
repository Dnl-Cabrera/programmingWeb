import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import video modules

import {MdOutlineInsertComment} from 'react-icons/md' 

import {AiFillHeart} from 'react-icons/ai' //Agregamos libreria para importar icons

import "./Post.css"

import imagen from '../../../images/0.jpg';

class Post extends React.Component {

    constructor(){
        //Ejemplo datos traidos desde DB
        const postsArray =[
            {
                numerPost:1,
                namberUser:'Carlos',
                textPost:'Publicación de una imagen',
                datePost:'28/04/2023',
                imageProfile:imagen,
                fileAdjunt:
                    {
                        typePost:'image',
                        file:imagen,
                    }
            },
            {
                numerPost:2,
                namberUser:'Daniel',
                textPost:'Prueba publicación de un video',
                datePost:'28/04/2023',
                imageProfile:imagen,
                fileAdjunt:
                    {
                        typePost:'video',
                        file:'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
                    }
            },
            {
                numerPost:3,
                namberUser:'Juan',
                textPost:'Prueba publicación',
                datePost:'28/04/2023',
                imageProfile:imagen,
                fileAdjunt:{
                    typePost:null,
                }
            }
        ];
        super();
        //Estado que trae las consultas realizadas en DB
        this.state = {
            posts:postsArray,
        };
    }

    render() {
        return (
            <div className="post">
                {
                    /*Se recorre los posts traidos de la DB, post almacena cada registro. Esto es para replicar los post. */
                    this.state.posts.map((post,index) =>{
                        return(
                            <Container className="mb-3">
                            <Row className="p-2">
                                <Col className="boxPost rounded" xs={12} lg={12}>
                                    <img src={imagen} className="imageProfile" alt="" />
                                    <div className="contenedor-textArea rounded p-2">
                                        <div class="containerDateUser">
                                            <p className="nameDate">
                                                <span className="nameUser">{post.namberUser}</span>
                                                <span className="datePost">{post.datePost}</span>
                                            </p>
                                        </div>
                                        <div className="box-textArea">
                                            <div data-text="Ingrese su post" className="divEditable p-2 rounded">
                                                {post.textPost}
                                            </div>
                                            <div className="ContenidoPost">
                                                {
                                                    post.fileAdjunt.typePost==='image' ? 
                                                    <div className="d-flex justify-content-center img-thumbnail img-fluid mx-auto">
                                                        <img alt="imagePost" src={post.fileAdjunt.file}/>
                                                    </div> :
                                                    post.fileAdjunt.typePost==='video' ?
                                                    <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center">
                                                    <iframe title="VideoPost" className="embed-responsive-item" src={post.fileAdjunt.file} allowfullscreen></iframe>
                                                    </div>:
                                                    <div Style="margin:-1.5em"></div>
                                                    
                                                }
                                                   
                                            </div>
                                        </div>
                                        <div className="box-textArea-feature d-flex justify-content-end">
                                            <Button className="botones me-1" variant="outlined">
                                                <span className="likeText">Me gusta</span><AiFillHeart className="botones-icon d-flex justify-content-center" />
                                            </Button>
                                            <Button className="botones" variant="outlined">
                                            <span className="likeText">Comentar</span><MdOutlineInsertComment onClick={this.cursiva} className="botones-icon" />
                                            </Button>
                                        </div>
                                    </div>
                                </Col>

                            </Row>
                            <Row>

                            </Row>
                        </Container>
                        )
                    })
                            
                }
            </div>
        );
    }

}

export default Post;