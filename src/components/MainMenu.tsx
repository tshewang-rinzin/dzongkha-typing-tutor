import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from "react-i18next";


function MainMenu(props) {
  const { t, i18n } = useTranslation();
  return (
    <>
        <Nav>
          <Nav.Link as={Link} to="/">{t("home")}</Nav.Link>
          <NavDropdown title={t("basic")} id="basic-nav-dropdown">
            <NavDropdown title={t("alphabets")} id="" className="dropdown-submenu-level-1">
              <NavDropdown title={t("lesson1")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson1/practice" key="1">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson1/test">{t("test")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson1/game">{t("game")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lesson2")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson2/practice" key="2">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson2/test">{t("test")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson2/game">{t("game")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lesson3")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson3/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson3/test">{t("test")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson3/game">{t("game")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lesson4")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson4/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson4/test">{t("test")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson4/game">{t("game")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lesson5")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson5/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson5/test">{t("test")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson5/game">{t("game")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lesson6")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson6/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson6/test">{t("test")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson6/game">{t("game")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lesson7")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson7/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson7/test">{t("test")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson7/game">{t("game")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lesson8")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson8/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson8/test">{t("test")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/alphabets/lesson8/game">{t("game")}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t("vowels")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/basic/vowels/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/vowels/test">{t("test")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/vowels/game">{t("game")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("dhogchen")} id="" className="dropdown-submenu-level-1">
              <NavDropdown title={t("yatak")} id="" className="dropdown-submenu">
                <NavDropdown.Item as={Link} to="/basic/dhogchen/yatak/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/dhogchen/yatak/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("ratak")} id="" className="dropdown-submenu">
                <NavDropdown.Item as={Link} to="/basic/dhogchen/ratak/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/dhogchen/ratak/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("watak")} id="" className="dropdown-submenu">
                <NavDropdown.Item as={Link} to="/basic/dhogchen/watak/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/dhogchen/watak/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("latak")} id="" className="dropdown-submenu">
                <NavDropdown.Item as={Link} to="/basic/dhogchen/latak/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/dhogchen/latak/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t("gochen")} id="" className="dropdown-submenu-level-1">
              <NavDropdown title={t("rago")} id="" className="dropdown-submenu">
                <NavDropdown.Item as={Link} to="/basic/gochen/rago/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/gochen/rago/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lago")} id="" className="dropdown-submenu">
                <NavDropdown.Item as={Link} to="/basic/gochen/lago/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/gochen/lago/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("sago")} id="" className="dropdown-submenu">
                <NavDropdown.Item as={Link} to="/basic/gochen/sago/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/basic/gochen/sago/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t("numbers")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/basic/numbers/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/numbers/test">{t("test")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/numbers/game">{t("game")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("logpaiyigu")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/basic/logpaiyigu/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/logpaiyigu/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("thugpaiyigu")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/basic/thugpaiyigu/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/thugpaiyigu/test">{t("test")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/thugpaiyigu/game">{t("game")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("gogen")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/basic/gogen/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/gogen/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
          <NavDropdown title={t("intermediate")} id="nav-dropdown-2">
            <NavDropdown title={t("colors")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/intermediate/colors/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/intermediate/colors/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("bodyparts")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/intermediate/bodyparts/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/intermediate/bodyparts/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("fruits")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/intermediate/fruits/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/intermediate/fruits/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("vegetables")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/intermediate/vegetables/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/intermediate/vegetables/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("days")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/intermediate/days/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/intermediate/days/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("animals")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/intermediate/animals/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/intermediate/animals/test">{t("test")}</NavDropdown.Item>

            </NavDropdown>
            <NavDropdown title={t("numbers")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/intermediate/numbers/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/intermediate/numbers/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
          </NavDropdown>
          <NavDropdown title={t("advance")} id="nav-dropdown-2">
            <NavDropdown title={t("songs")} id="" className="dropdown-submenu-level-1">
              <NavDropdown title={t("song1")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/songs/song1/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/songs/song1/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("song2")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/songs/song2/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/songs/song2/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("song3")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/songs/song3/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/songs/song3/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t("tsangmo")} id="" className="dropdown-submenu-level-1">
              <NavDropdown title={t("tsangmo1")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/tsangmo/tsangmo1/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/tsangmo/tsangmo1/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("tsangmo2")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/tsangmo/tsangmo2/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/tsangmo/tsangmo2/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("tsangmo3")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/tsangmo/tsangmo3/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/tsangmo/tsangmo3/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t("lozey")} id="" className="dropdown-submenu-level-1">
              <NavDropdown title={t("lozey1")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/lozey/lozey1/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/lozey/lozey1/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lozey2")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/lozey/lozey2/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/lozey/lozey2/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("lozey3")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/lozey/lozey3/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/lozey/lozey3/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t("peytam")} id="" className="dropdown-submenu-level-1">
              <NavDropdown title={t("peytam1")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/peytam/peytam1/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/peytam/peytam1/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("peytam2")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/peytam/peytam2/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/peytam/peytam2/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("peytam3")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/peytam/peytam3/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/peytam/peytam3/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown title={t("ayig")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/advanced/ayig/practice">{t("practice")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/advanced/ayig/test">{t("test")}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t("story")} id="" className="dropdown-submenu-level-1">
              <NavDropdown title={t("story1")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/story/story1/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/story/story1/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("story2")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/story/story2/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/story/story2/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("story3")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/story/story3/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/story/story3/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              {/* <NavDropdown title={t("story4")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/story/story4/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/story/story4/test">{t("test")}</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title={t("story5")} id="" className="dropdown-submenu-level-2">
                <NavDropdown.Item as={Link} to="/advanced/story/story5/practice">{t("practice")}</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/advanced/story/story5/test">{t("test")}</NavDropdown.Item>
              </NavDropdown> */}
            </NavDropdown>
          </NavDropdown>
          <NavDropdown title={t("game")} id="basic-nav-dropdown">
            <NavDropdown title={t("alphabets")} id="" className="dropdown-submenu-level-1">
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson1/game">{t("game1")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson2/game">{t("game2")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson3/game">{t("game3")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson4/game">{t("game4")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson5/game">{t("game5")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson6/game">{t("game6")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson7/game">{t("game7")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson8/game" >{t("game8")}</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/basic/alphabets/lesson8/game"></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/basic/vowels/game">{t("vowels")}</Nav.Link>
            <Nav.Link as={Link} to="/basic/numbers/game">{t("numbers")}</Nav.Link>
          </NavDropdown>
          <NavDropdown title={t("competitions")} id="basic-nav-dropdown">
            <Nav.Link as={Link} to="/competition/basic">{t("basiccompetition")}</Nav.Link>
            <Nav.Link as={Link} to="/competition/intermediate">{t("intermediatecompetition")}</Nav.Link>
            <Nav.Link as={Link} to="/competition/advance">{t("advancecompetition")}</Nav.Link>
          </NavDropdown>
        </Nav>
    </>
  )
}
export default MainMenu;
