import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/NavBar";
import HomeFooter from "./components/HomeFooter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function App() {
  let items = ["List 1", "List 2", "List 3", "List 4"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <><div className="container">
      <Router>
        <Navbar></Navbar>
       {/* {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            This is an alert
          </Alert>
        )}
        <ListGroup
          items={items}
          heading="testing"
          onSelectItem={handleSelectItem} />
        <Button onClick={() => setAlertVisibility(true)} color="secondary">
          My new button
       </Button>*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div><HomeFooter></HomeFooter></>
        
  );
}

export default App;
