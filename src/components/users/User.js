import React, { useContext, useEffect } from "react";
import { Link } from "react-navi";
import { ThemeContext, StateContext } from "../hooks/Contexts";
import { useResource } from "react-request-hook";
import { Card } from "react-bootstrap";

function User({author, authorID}) {
  const { secondaryColor } = useContext(ThemeContext);
  const { dispatch } = useContext(StateContext);

  return (
    <Card >
      <Card.Body >
        <Card.Title>
          <Link style={{ color: '#000000' }} href={`/users/${authorID}`}>
            {author}
          </Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

export default React.memo(User);


