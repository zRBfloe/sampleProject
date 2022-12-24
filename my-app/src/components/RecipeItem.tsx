import React, { useReducer, useState } from "react";
import { Alert, Button, Card } from "react-bootstrap";
import "./component.css";

type RecipeItemProps = {
  id: number;
  name: string;
  imgUrl: string;
  recipe: string;
};

type CountState = {
  count: number;
};

// An interface for our actions
type CounterAction = {
  type: string;
  payload: number;
};

// An interface for our state
const InitialState = {
  count: 0,
};

function reducer(state: CountState, action: CounterAction) {
  switch (action.type) {
    case "like":
      return {
        count: state.count + action.payload,
      };
    case "hate":
      return {
        count: state.count - action.payload,
      };
    default:
      return state;
  }
}

export function RecipeItem({ id, name, imgUrl, recipe }: RecipeItemProps) {
  const [visibleAllert, setVisibleAllert] = useState(false);
  const [initialState, setInitialState] = useState(0);
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={imgUrl}
          height="120px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{recipe}</Card.Text>
        </Card.Body>
        <Button
          className="btn btn-secondary btn-circle"
          onClick={() => {
            setVisibleAllert(true);
            dispatch({ type: "like", payload: 1 });
          }}
        >
          Like It!
        </Button>
        <Button
          className="btn btn-secondary btn-circle"
          onClick={() => {
            setVisibleAllert(true);
            dispatch({ type: "hate", payload: 1 });
          }}
        >
          Don't like It!
        </Button>
      </Card>
      <Alert show={visibleAllert} variant="dark">
        <Alert.Heading>Oh Hello!</Alert.Heading>
        <p>{state.count + " person liked this recipe."}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button
            onClick={() => setVisibleAllert(false)}
            variant="outline-dark"
          >
            Close me!
          </Button>
        </div>
      </Alert>
    </>
  );
}
