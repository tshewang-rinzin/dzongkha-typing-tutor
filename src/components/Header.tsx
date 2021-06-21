import React, { useRef, useState, Suspense, useContext } from "react";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainMenu from "./MainMenu";
import Home from "./components/Home";
import Lesson from "./components/Lesson";
import Test from "./components/Test";
import Game from "./components/Game";
import Competition from "./components/Competition";

import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import lesson from './data/lessons.json';
import competition from './data/competitions.json';
import FontContext from "../FontContext";

// import DzongkhaKeyboard from "../keyboard/layouts/dzongkha";


export default function Header() {

  const { t, i18n } = useTranslation();
  // const fontName = useContext(FontContext);
  const [fontName, setFontName]= useContext(FontContext);

  // const  = useState((localStorage.getItem('font'))? localStorage.getItem('font'): "wangdi29")

  //const [dzFontFamily, setDzFontFamily] = useState((localStorage.getItem('lng') === 'dz') ? ((localStorage.getItem('font')) ? localStorage.getItem('font') : "wangdi29") : "");

  return (
        <Row>
          <Col>
            <Container >
              <div className="title-container">
                <div>
                  <p className={`title`}>
                    {t('title')}
                  </p>
                </div>
              </div>
              {/* <LanguageSwitcher />
              <div className="menu-container">
              <MainMenu/> */}
              <div className="menu-container">
                <div className="row">
                  <div className="col-9">
                    <div className="menu-container">
                      <MainMenu />
                    </div>
                  </div>
                  <div className="col-3" style={{ textAlign: "right" }}>
                    <LanguageSwitcher />
                  </div>
                </div>
              </div>
            </Container>
          </Col>
        </Row>
  );
}

// export default function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" component={Hello} />
//       </Switch>
//     </Router>
//   );
// }
