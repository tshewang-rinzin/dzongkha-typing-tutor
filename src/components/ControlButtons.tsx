import React from "react";
import { useTranslation } from "react-i18next";
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Keyboard, VolumeMute, VolumeUp, Fonts, Brush, PlusSquare, DashSquare, HandIndex, MicFill } from "react-bootstrap-icons";
import ToggleButton from 'react-bootstrap/ToggleButton';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';



export default function ControlButtons(props) {

   
    // const [showKeyboard, setShowKeyboard] = props.showKeyboard;
    return (
        <>
        <div className="control-buttons-container">
        {(props.pageType == "lesson") &&
            <>
            <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-keyboard`}>
                    Show Keyboard<strong></strong>.
                </Tooltip>
            }
            >
             <Button variant="outline-success" onClick={()=>props.onClickCallback("keyboard")}>
                <Keyboard />
            </Button>
        </OverlayTrigger>
        {' '}
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-play-sound`}>
                    Remove keyboard colors<strong></strong>.
                </Tooltip>
            }
            >
             <Button variant="outline-dark"  onClick={()=>props.onClickCallback("keycolor")}>
                <Brush />
            </Button>
        </OverlayTrigger>
        {' '}

        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-hide-fingers`}>
                    Hide Fingers<strong></strong>.
                </Tooltip>
            }
            >
             <Button variant="outline-dark"  onClick={()=>props.onClickCallback("fingers")}>
                <HandIndex  />
            </Button>
        </OverlayTrigger>
            </>
        }
        {' '}
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-mute-sound`}>
                    Turn off sound<strong></strong>.
                </Tooltip>
            }
            >
             <Button variant="outline-danger"  onClick={()=>props.onClickCallback("mute-sound")}>
                <VolumeMute />
            </Button>
        </OverlayTrigger>
        {' '}
        
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-play-sound`}>
                    Play sound<strong></strong>.
                </Tooltip>
            }
            >
             <Button variant="outline-danger"  onClick={()=>props.onClickCallback("play-sound")}>
                <VolumeUp />
            </Button>
        </OverlayTrigger>
        {' '}

        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-play-voice`}>
                    Play Voice<strong></strong>.
                </Tooltip>
            }
            >
             <Button variant="outline-danger"  onClick={()=>props.onClickCallback("play-voice")}>
                <MicFill />
            </Button>
        </OverlayTrigger>
        {' '}
        
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-play-success`}>
                    Change font to DDC Uchen<strong></strong>
                </Tooltip>
            }
            >
             <Button variant="outline-warning" onClick={()=>props.onClickCallback("ddcuchen-font")}>
                <Fonts />
            </Button>
        </OverlayTrigger>
        {' '}

        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-play-sound`}>
                    Change font to Wangdi29<strong></strong>
                </Tooltip>
            }
            >
             <Button variant="outline-warning" onClick={()=>props.onClickCallback("wangdi29-font")}>
                <Fonts />
            </Button>
        </OverlayTrigger>
        {' '}

        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-play-sound`}>
                    Change font to Jomolhari<strong></strong>
                </Tooltip>
            }
            >
             <Button variant="outline-warning"  onClick={()=>props.onClickCallback("jomolhari-font")}>
                <Fonts />
            </Button>
        </OverlayTrigger>
        {' '}

        {/* <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-play-sound`}>
                    Decrease font size<strong></strong>
                </Tooltip>
            }
            >
             <Button variant="outline-primary"  onClick={()=>props.onClickCallback()}>
                <DashSquare />
            </Button>
        </OverlayTrigger>
        {' '}
        <OverlayTrigger
            placement="top"
            overlay={
                <Tooltip id={`tooltip-play-sound`}>
                    Increase Font Size<strong></strong>
                </Tooltip>
            }
            >
             <Button variant="outline-primary"  onClick={()=>props.onClickCallback()}>
             <PlusSquare />
            </Button>
        </OverlayTrigger> */}
        </div>
        </>
    )
};