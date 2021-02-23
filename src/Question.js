import React, { Component } from 'react'
// import React, { useState } from 'react';
import {BlockTitle,Range, Block,} from 'framework7-react';


export class Question extends Component {
    render() {
        return (
            <div>
                <from>
                    <div>
                        <h1>Are You a good listner?</h1>
                        <BlockTitle>With Scale</BlockTitle>
                        <Block strong>
                          <Range
                           min={0}
                           max={100}
                           label={true}
                           step={5}
                           value={25}
                           scale={true}
                           scaleSteps={5}
                           scaleSubSteps={4}
                         />
                         </Block>
                    </div>
                    <div>
                        <h1>Are You a good listner?</h1>
                        <BlockTitle>With Scale</BlockTitle>
                   <Block strong>
                          <Range
                           min={0}
                           max={100}
                           label={true}
                           step={5}
                           value={25}
                           scale={true}
                           scaleSteps={5}
                           scaleSubSteps={4}
                         />
         
                        </Block>
                    </div>
                    <div>
                        <h1>Are You a good listner?</h1>
                        <BlockTitle>With Scale</BlockTitle>
                   <Block strong>
                          <Range
                           min={0}
                           max={100}
                           label={true}
                           step={5}
                           value={25}
                           scale={true}
                           scaleSteps={5}
                           scaleSubSteps={4}
                         />
         
                        </Block>
                    </div>
                    <div>
                        <h1>Are You a good listner?</h1>
                        <BlockTitle>With Scale</BlockTitle>
                   <Block strong>
                          <Range
                           min={0}
                           max={100}
                           label={true}
                           step={5}
                           value={25}
                           scale={true}
                           scaleSteps={5}
                           scaleSubSteps={4}
                         />
         
                        </Block>
                    </div>
                    <div>
                        <h1>Are You a good listner?</h1>
                        <BlockTitle>With Scale</BlockTitle>
                   <Block strong>
                          <Range
                           min={0}
                           max={100}
                           label={true}
                           step={5}
                           value={25}
                           scale={true}
                           scaleSteps={5}
                           scaleSubSteps={4}
                         />
         
                        </Block>
                    </div>
                </from>
            </div>
        )
    }
}

export default Question
