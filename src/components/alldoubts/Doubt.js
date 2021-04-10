import React, { useState, useEffect, useContext } from "react";
import "./doubt.css";
import { Row, Col, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { db } from "../../firebase";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

AOS.init();
const Doubt = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState(true);
  const [doubts, setDoubts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const query = await db.collection("doubts").get();
        const doubts_copy = [];
        query.forEach((doc) => {
          doubts_copy.push(doc.data());
        });
        setDoubts(doubts_copy);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  if (loading) {
    return <div />;
  }
  return (
    <div>
      <div className="doubt_container">
        {doubts.map((ele) => {
          return (
            <div className="dout">
              <Row>
                <h2>{ele.topic}</h2>
                <h4>{ele.uid}</h4>
              </Row>
              <p>{ele.description}</p>
              <Button
                onClick={() => {
                  history.push("/profile/" + user.email);
                  db.collection(localStorage.getItem("currentUser")).doc('profile').update({
                    "creds":10
                  })
                }}
                className="mybtn"
              >
                Contact
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Doubt;
