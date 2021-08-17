import React from "react";

//Import Card, Icon and Image
import { Card, Icon, Image } from "semantic-ui-react";

//Import css
import "./CardComponent.css";

const CardComponent = ({ img, titleCard, tests, description }) => (
  <Card>
    <Image className="img" src={img} />
    <Card.Content className="eachCard">
      <Card.Header>{titleCard}</Card.Header>

      <Card.Meta>
        <span>{tests}</span>
      </Card.Meta>

      <Card.Description>{description}</Card.Description>
    </Card.Content>

    <Card.Content extra>
      <a href="https://api.whatsapp.com/send?phone=5491150243549">
        <Icon name="whatsapp" />
        Consultar
      </a>
    </Card.Content>
  </Card>
);

export default CardComponent;
