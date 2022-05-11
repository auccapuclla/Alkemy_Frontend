import "./Plate.css";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function Plate({ id, title, image }) {
  let navigate = useNavigate();
  return (
    <div className="Plate">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={image}
          onClick={() => navigate(`/dish/${id}`)}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {/* <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Plate;
