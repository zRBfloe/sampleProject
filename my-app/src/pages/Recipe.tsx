import React, { useMemo, useState } from "react";
import { Alert, Button, Col, Row } from "react-bootstrap";
import { RecipeItem } from "../components/RecipeItem";
import recipeItems from "../data/items.json";

export function Recipe() {
  return (
    <>
      <h1>Recipes</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {recipeItems.map((item) => (
          <Col key={item.id}>
            <RecipeItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
