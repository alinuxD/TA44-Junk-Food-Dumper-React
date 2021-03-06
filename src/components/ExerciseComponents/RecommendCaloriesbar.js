/*eslint-disable*/
import React ,{useState}from "react";
import {Container, Row, Col,InputGroup, Input, CardBody, Button, ButtonGroup } from "reactstrap";
import {round} from "mathjs";

// icon 
import {FaRunning} from 'react-icons/fa'
import {AiOutlineQuestionCircle} from 'react-icons/ai'


function RecommendCaloriesbar(props){

    const guideline = {

         "under13":{
             "Male":['1600', '1800', '2000', '2200', '2600'],
             "Female":['1400', '1600', '1800', '2000', '2200']
         },
         
        "over13":{
            "Male":['2000', '2400', '2800', '3200'],
            "Female":['1600', '1800', '2000', '2400']
        }
    }

    const [help, setHelp] = useState({display: 'none'});

    if (props.age <=13 ? "under13":"over13" == 'under13'){  
    return (
        
        
            <> 
            <div
                    onMouseEnter={e => {
                    setHelp({display: 'block'});
                }}
                    onMouseLeave={e => {
                        setHelp({display: 'none'})
                }}
                >


                    <svg width="1200" height="200">

                        <rect x='120' y='50' rx="20" ry="20" width="35%" height="40px" style={{fill:"lightblue"}} />
                        <rect x='320' y='50' width='16%' height='20px' style={{fill:'#f6d778'}}/>
                        <rect x='500' y='50' width='26%' height='40px' style={{fill:'#f6d778'}}/>
                        <rect x='752' y='50' width='26%' height='40px' style={{fill:'#f0a6a1'}}/>
                        <rect x='960' y='50' rx="20" width='10%' height='40px' style={{fill:'#f0a6a1'}}/>
                        <rect x='500' y='70' width='28%' height='20px' style={{fill:'#f0a6a1'}}/>
                        <text x='120' y='110' style={{fontWeight:'bold'}}> {guideline["under13"][props.gender][0]} </text>
                        <text x='320' y='40' style={{fontWeight:'bold'}}> {guideline["under13"][props.gender][1]} </text>
                        <text x='500' y='110' style={{fontWeight:'bold'}}> {guideline["under13"][props.gender][2]} </text>
                        <text x='752' y='40' style={{fontWeight:'bold'}}> {guideline["under13"][props.gender][3]} </text>
                        <text x='1050' y='110' style={{fontWeight:'bold'}}> {guideline["under13"][props.gender][4]} cals</text>
                        <text x='250' y='110' style={{fontWeight:'bold'}}>Less Active</text>
                        <text x='480' y='40' style={{fontWeight:'bold'}}>Moderately Active</text>
                        <text x='760' y='110' style={{fontWeight:'bold'}}>Very Active</text>

                    </svg>

                    <text style={help}><h5 style={{color:'blue'}}><AiOutlineQuestionCircle/> Active levels are labeled with different colors, the numbers are the min and max calorie intakes </h5></text> 
                </div>
            </>
        )
    } else {

        if (props.gender == 'Female'){

            return (
                <>   
                <div
                    onMouseEnter={e => {
                    setHelp({display: 'block'});
                }}
                    onMouseLeave={e => {
                        setHelp({display: 'none'})
                }}
                >
                    <svg width="1200" height="200">
                        
                        <rect x='120' y='50' rx="20" ry="20" width="33%" height="40px" style={{fill:"lightblue"}} />
                        <rect x='450' y='50' width='33%' height='40px' style={{fill:'#f6d778'}}/>
                        <rect x='752' y='50' width='23%' height='40px' style={{fill:'#f0a6a1'}}/>
                        <rect x='960' y='50' rx="20" width='10%' height='40px' style={{fill:'#f0a6a1'}}/>
                        

                        <text x='120' y='110' style={{fontWeight:'bold'}}> {guideline["over13"][props.gender][0]} </text>
                        <text x='450' y='110' style={{fontWeight:'bold'}}> {guideline["over13"][props.gender][1]} </text>
                        <text x='735' y='110' style={{fontWeight:'bold'}}> {guideline["over13"][props.gender][2]} </text>
                        <text x='1050' y='110' style={{fontWeight:'bold'}}> {guideline["over13"][props.gender][3]} cals</text>
                        <text x='250' y='40' style={{fontWeight:'bold'}}>Less Active</text>
                        <text x='545' y='40' style={{fontWeight:'bold'}}>Moderately Active</text>
                        <text x='900' y='40' style={{fontWeight:'bold'}}>Very Active</text>

                    </svg> 
                    <text style={help}><h5 style={{color:'blue'}}><AiOutlineQuestionCircle/> Active level were labeled with different color, the number were the min and max calories intake </h5></text> 
                </div>
                </>

            )
        } else {

            return (
                <>
                <div
                    onMouseEnter={e => {
                    setHelp({display: 'block'});
                }}
                    onMouseLeave={e => {
                        setHelp({display: 'none'})
                }}
                >
                <svg width="1200" height="200">
                    
                <rect x='120' y='50' rx="20" ry="20" width="33%" height="40px" style={{fill:"lightblue"}} />
                        <rect x='450' y='50' width='33%' height='40px' style={{fill:'#f6d778'}}/>
                        <rect x='752' y='50' width='23%' height='40px' style={{fill:'#f0a6a1'}}/>
                        <rect x='960' y='50' rx="20" width='10%' height='40px' style={{fill:'#f0a6a1'}}/>
                        

                        <text x='120' y='110' style={{fontWeight:'bold'}}> {guideline["over13"][props.gender][0]} </text>
                        <text x='450' y='110' style={{fontWeight:'bold'}}> {guideline["over13"][props.gender][1]} </text>
                        <text x='735' y='110' style={{fontWeight:'bold'}}> {guideline["over13"][props.gender][2]} </text>
                        <text x='1050' y='110' style={{fontWeight:'bold'}}> {guideline["over13"][props.gender][3]} cals</text>
                        <text x='250' y='40' style={{fontWeight:'bold'}}>Less Active</text>
                        <text x='545' y='40' style={{fontWeight:'bold'}}>Moderately Active</text>
                        <text x='900' y='40' style={{fontWeight:'bold'}}>Very Active</text>

    
                </svg>
                <text style={help}><h5 style={{color:'blue'}}><AiOutlineQuestionCircle/> Active level were labeled with different color, the number were the min and max calories intake </h5></text> 
                </div>
            </>
            )
        }
    }
}

export default RecommendCaloriesbar