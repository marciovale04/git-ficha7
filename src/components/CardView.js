import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap';

function CardView({ data }) {

  return (

    <Row>

      {data.map((item, index) => (

        <Col md="4" key={index} className="mb-4">

          <Card>

            <CardBody>

              <CardTitle tag="h5">
                {item.nome}
              </CardTitle>

              <CardText>
                Ano: {item.ano}
              </CardText>

            </CardBody>

          </Card>

        </Col>

      ))}

    </Row>
  );
}

export default CardView;