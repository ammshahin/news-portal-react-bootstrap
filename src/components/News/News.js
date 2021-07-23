import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './News.css';

const News = (props) => {
    console.log(props.article);
    const { author, content, description, source, url, urlToImage, publishedAt } = props.article;
    return (

        <Card >
            <Card.Header>{source.name}</Card.Header>
            <div className="newsCard">
                <div className="cardImg">
                    <img src={urlToImage} alt="" />
                </div>
                <div className="cardBody">
                    <Card.Body>
                        <Card.Title>{description}</Card.Title>
                        <p><small>{author}</small></p>
                        <p><small>{publishedAt}</small></p>
                        <Card.Text>
                            {content}
                        </Card.Text>
                        <Button variant="primary" onClick={() => window.open(url, '_blank')}>Read Full News</Button>
                    </Card.Body>
                </div>
            </div>


        </Card>
    );
};

export default News;