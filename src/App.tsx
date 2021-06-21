import React, { useRef, useState, Suspense } from "react";
import { createBrowserHistory } from "history";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import MainMenu from "./components/MainMenu";
import Home from "./components/Home";
import Lesson from "./components/Lesson";
import Test from "./components/Test";
import Game from "./components/Game";
import Competition from "./components/Competition";
import Header from "./components/Header";


import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";
import lesson from './data/lessons.json';
import competition from './data/competitions.json';
import FontContext from "./FontContext";
// import DzongkhaKeyboard from "../keyboard/layouts/dzongkha";


export default function App() {

  const [fontName, setFontName] = useState("wangdi29");

  const { t, i18n } = useTranslation();
  // // const  = useState((localStorage.getItem('font'))? localStorage.getItem('font'): "wangdi29")

  // const [dzFontFamily, setDzFontFamily] = useState((localStorage.getItem('lng') === 'dz') ? ((localStorage.getItem('font')) ? localStorage.getItem('font') : "wangdi29") : "");

  // const changeFont = () => {
  //   if (localStorage.getItem('lng') === 'dz')
  //     setDzFontFamily((localStorage.getItem('font') ? localStorage.getItem('font') : 'wangdi29'));
  //   else
  //     setDzFontFamily('');
  // }
  return (
    <Router>
      <Suspense fallback='loading'>
        <FontContext.Provider value={[fontName, setFontName]}>
          <Container fluid className={i18n.language}>
            <Header />
            <Container>
            <Row>
              <Col>
              <Switch>
              {/* <Route path='/basic' component={Lesson(changeFont)} /> */}
              <Route
                path='/basic/alphabets/lesson1/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson1.lesson} key={1}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson1/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson1.lesson}  key={2}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson2/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson2.lesson} key={3}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson2/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson2.lesson} key={3}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson3/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson3.lesson} key={4}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson4/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson4.lesson} key={5}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson5/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson5.lesson} key={6}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson6/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson6.lesson} key={7}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson7/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson7.lesson} key={8}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson8/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson8.lesson} key={9}/>
                )}
              />
              <Route
                path='/basic/vowels/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.vowels.lesson} key={10}/>
                )}
              />
              <Route
                path='/basic/dhogchen/yatak/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.dhogchen.yatak.lesson} key={11}/>
                )}
              />
              <Route
                path='/basic/dhogchen/ratak/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.dhogchen.ratak.lesson} key={12}/>
                )}
              />
              <Route
                path='/basic/dhogchen/watak/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.dhogchen.watak.lesson} key={13}/>
                )}
              />
              <Route
                path='/basic/dhogchen/latak/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.dhogchen.latak.lesson} key={14}/>
                )}
              />
              <Route
                path='/basic/gochen/rago/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.gochen.rago.lesson} key={15}/>
                )}
              />
              <Route
                path='/basic/gochen/lago/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.gochen.lago.lesson} key={16}/>
                )}
              />
              <Route
                path='/basic/gochen/sago/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.gochen.sago.lesson} key={17}/>
                )}
              />
              <Route
                path='/basic/numbers'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.numbers.lesson} key={18}/>
                )}
              />
              <Route
                path='/basic/logpaiyigu/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.logpaiyigu.lesson} key={19}/>
                )}
              />
              <Route
                path='/basic/thugpaiyigu/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.thugpaiyigu.lesson} key={20}/>
                )}
              />
              <Route
                path='/basic/gogen/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.gogen.lesson} key={21}/>
                )}
              />
              <Route
                path='/intermediate/colors/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.intermediate.colors.lesson} key={22}/>
                )}
              />
              <Route
                path='/intermediate/bodyparts/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.intermediate.bodyparts.lesson} key={23}/>
                )}
              />
              <Route
                path='/intermediate/fruits/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.intermediate.fruits.lesson} key={24}/>
                )}
              />
              <Route
                path='/intermediate/vegetables/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.intermediate.vegetables.lesson} key={25}/>
                )}
              />
              <Route
                path='/intermediate/days/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.intermediate.days.lesson} key={26}/>
                )}
              />
              <Route
                path='/intermediate/animals/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.intermediate.animals.lesson} key={27}/>
                )}
              />
              <Route
                path='/intermediate/numbers/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.intermediate.numbers.lesson} key={28}/>
                )}
              />
              <Route
                path='/advanced/songs/song1/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.songs.song1.lesson} key={29}/>
                )}
              />
              <Route
                path='/advanced/songs/song2/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.songs.song2.lesson} key={30}/>
                )}
              />
              <Route
                path='/advanced/songs/song3/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.songs.song3.lesson} key={31}/>
                )}
              />
              <Route
                path='/advanced/tsangmo/tsangmo1/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.tsangmo.tsangmo1.lesson} key={32}/>
                )}
              />
              <Route
                path='/advanced/tsangmo/tsangmo2/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.tsangmo.tsangmo2.lesson} key={33}/>
                )}
              />
              <Route
                path='/advanced/tsangmo/tsangmo3/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.tsangmo.tsangmo3.lesson} key={34}/>
                )}
              />
              <Route
                path='/advanced/lozey/lozey1/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.lozey.lozey1.lesson} key={35}/>
                )}
              />
              <Route
                path='/advanced/lozey/lozey2/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.lozey.lozey2.lesson} key={36}/>
                )}
              />
              <Route
                path='/advanced/lozey/lozey3/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.lozey.lozey3.lesson} key={37}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam1/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.peytam.peytam1.lesson} key={38}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam2/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.peytam.peytam2.lesson} key={39}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam3/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.peytam.peytam3.lesson} key={40}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam4/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.peytam.peytam4.lesson} key={41}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam5/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.peytam.peytam5.lesson} key={42}/>
                )}
              />
              <Route
                path='/advanced/ayig/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.ayig.lesson} key={43}/>
                )}
              />
              <Route
                path='/advanced/story/story1/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.story.story1.lesson} key={44}/>
                )}
              />
              <Route
                path='/advanced/story/story2/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.story.story2.lesson} key={45}/>
                )}
              />
              <Route
                path='/advanced/story/story3/practice'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.advanced.story.story3.lesson} key={46}/>
                )}
              />

              <Route
                path='/competitions'
                render={(props) => (
                  <Lesson {...props} lessonContent={lesson.basic.alphabets.lesson1.lesson} key={47}/>
                )}
              />



              {/* Route for tests */}
              <Route
                path='/basic/alphabets/lesson1/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson1.lesson} key={48}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson2/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson2.lesson} key={49}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson3/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson3.lesson} key={50}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson4/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson4.lesson} key={51}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson5/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson5.lesson} key={52}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson6/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson6.lesson} key={53}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson7/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson7.lesson} key={54}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson8/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.alphabets.lesson8.lesson} key={55}/>
                )}
              />
              <Route
                path='/basic/vowels/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.vowels.lesson} key={56}/>
                )}
              />
              <Route
                path='/basic/dhogchen/yatak/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.dhogchen.yatak.lesson} key={57}/>
                )}
              />
              <Route
                path='/basic/dhogchen/ratak/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.dhogchen.ratak.lesson} key={58}/>
                )}
              />
              <Route
                path='/basic/dhogchen/watak/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.dhogchen.watak.lesson} key={59}/>
                )}
              />
              <Route
                path='/basic/dhogchen/latak/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.dhogchen.latak.lesson} key={60}/>
                )}
              />
              <Route
                path='/basic/gochen/rago/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.gochen.rago.lesson} key={61}/>
                )}
              />
              <Route
                path='/basic/gochen/lago/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.gochen.lago.lesson} key={62}/>
                )}
              />
              <Route
                path='/basic/gochen/sago/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.gochen.sago.lesson} key={63}/>
                )}
              />
              <Route
                path='/basic/numbers'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.numbers.lesson} key={64}/>
                )}
              />
              <Route
                path='/basic/logpaiyigu/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.logpaiyigu.lesson} key={65}/>
                )}
              />
              <Route
                path='/basic/thugpaiyigu/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.thugpaiyigu.lesson} key={66}/>
                )}
              />
              <Route
                path='/basic/gogen/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.basic.gogen.lesson} key={67}/>
                )}
              />
              <Route
                path='/intermediate/colors/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.intermediate.colors.lesson} key={68}/>
                )}
              />
              <Route
                path='/intermediate/bodyparts/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.intermediate.bodyparts.lesson} key={69}/>
                )}
              />
              <Route
                path='/intermediate/fruits/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.intermediate.fruits.lesson} key={70}/>
                )}
              />
              <Route
                path='/intermediate/vegetables/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.intermediate.vegetables.lesson} key={71}/>
                )}
              />
              <Route
                path='/intermediate/days/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.intermediate.days.lesson} key={72}/>
                )}
              />
              <Route
                path='/intermediate/animals/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.intermediate.animals.lesson} key={73}/>
                )}
              />
              <Route
                path='/intermediate/numbers/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.intermediate.numbers.lesson} key={74}/>
                )}
              />
              <Route
                path='/advanced/songs/song1/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.songs.song1.lesson} key={75}/>
                )}
              />
              <Route
                path='/advanced/songs/song2/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.songs.song2.lesson} key={76}/>
                )}
              />
              <Route
                path='/advanced/songs/song3/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.songs.song3.lesson} key={77}/>
                )}
              />
              <Route
                path='/advanced/tsangmo/tsangmo1/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.tsangmo.tsangmo1.lesson} key={78}/>
                )}
              />
              <Route
                path='/advanced/tsangmo/tsangmo2/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.tsangmo.tsangmo2.lesson} key={79}/>
                )}
              />
              <Route
                path='/advanced/tsangmo/tsangmo3/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.tsangmo.tsangmo3.lesson} key={80}/>
                )}
              />
              <Route
                path='/advanced/lozey/lozey1/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.lozey.lozey1.lesson} key={81}/>
                )}
              />
              <Route
                path='/advanced/lozey/lozey2/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.lozey.lozey2.lesson} key={82}/>
                )}
              />
              <Route
                path='/advanced/lozey/lozey3/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.lozey.lozey3.lesson} key={83}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam1/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.peytam.peytam1.lesson} key={84}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam2/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.peytam.peytam2.lesson} key={85}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam3/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.peytam.peytam3.lesson} key={86}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam4/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.peytam.peytam4.lesson} key={87}/>
                )}
              />
              <Route
                path='/advanced/peytam/peytam5/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.peytam.peytam5.lesson} key={88}/>
                )}
              />
              <Route
                path='/advanced/ayig/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.ayig.lesson} key={89}/>
                )}
              />
              <Route
                path='/advanced/story/story1/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.story.story1.lesson} key={90}/>
                )}
              />
              <Route
                path='/advanced/story/story2/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.story.story2.lesson} key={91}/>
                )}
              />
              <Route
                path='/advanced/story/story3/test'
                render={(props) => (
                  <Test {...props} lessonContent={lesson.advanced.story.story3.lesson} key={92}/>
                )}
              />
              {/* Routes for games */}
              <Route
                path='/basic/alphabets/lesson1/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.alphabets.lesson1.game} key={93}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson2/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.alphabets.lesson2.game} key={94}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson3/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.alphabets.lesson3.game} key={95}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson4/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.alphabets.lesson4.game} key={96}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson5/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.alphabets.lesson5.game} key={97}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson6/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.alphabets.lesson6.game} key={98}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson7/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.alphabets.lesson7.game} key={99}/>
                )}
              />
              <Route
                path='/basic/alphabets/lesson8/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.alphabets.lesson8.game} key={100}/>
                )}
              />
              <Route
                path='/basic/vowels/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.vowels.game} key={101}/>
                )}
              />
              <Route
                path='/basic/dhogchen/yatak/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.dhogchen.yatak.game} key={102}/>
                )}
              />
              <Route
                path='/basic/dhogchen/ratak/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.dhogchen.ratak.game} key={103}/>
                )}
              />
              <Route
                path='/basic/dhogchen/watak/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.dhogchen.watak.game} key={104}/>
                )}
              />
              <Route
                path='/basic/dhogchen/latak/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.dhogchen.latak.game} key={105}/>
                )}
              />
              <Route
                path='/basic/gochen/rago/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.gochen.rago.game} key={106}/>
                )}
              />
              <Route
                path='/basic/gochen/lago/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.gochen.lago.game} key={107}/>
                )}
              />
              <Route
                path='/basic/gochen/sago/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.gochen.sago.game} key={108}/>
                )}
              />
              <Route
                path='/basic/numbers/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.numbers.game} key={109}/>
                )}
              />
              <Route
                path='/basic/logpaiyigu/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.logpaiyigu.game} key={110}/>
                )}
              />

              <Route
                path='/basic/thugpaiyigu/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.thugpaiyigu.game} key={111}/>
                )}
              />
              <Route
                path='/basic/gogen/game'
                render={(props) => (
                  <Game {...props} lessonContent={lesson.basic.gogen.game} key={112}/>
                )}
              />

              <Route
                path='/competition/basic'
                render={(props) => (
                  <Competition {...props} lessonContent={competition.basic} key={113}/>
                )}
              />

              <Route
                path='/competition/intermediate'
                render={(props) => (
                  <Competition {...props} lessonContent={competition.intermediate} key={114}/>
                )}
              />
              <Route
                path='/competition/advance'
                render={(props) => (
                  <Competition {...props} lessonContent={competition.advance} key={115}/>
                )}
              />
              <Route exact path='/' component={Home} />
            </Switch>

              </Col>
            </Row>

            </Container>
          </Container>
        </FontContext.Provider>
      </Suspense>
    </Router>
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
