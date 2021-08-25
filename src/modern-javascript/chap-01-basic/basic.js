import React from 'react'
var man = {} //es5
const Basic = () => {
    const letSample = () => {
        let tom = 'Tom' //es6 에서 variable
        const james = 'James' //es6에서 constant
    }
    const dynamicType = () => {
        let userId = 12;
        // console.log('USER ID is '+userId) //문자열방식
        console.log(`USER ID is ${userId}`) //리터럴방식
        userId = 'Kim'
        console.log(`USER ID is ${userId}`)
    }

    const jsonSample = () => {
    }

    const car = {
        wheels:4,
        color: "red",
        drive: () => {
            console.log('wroom wroom')
        },
    };

    console.log(Object.keys(car)[0]);
    console.log(typeof Object.keys(car)[0]);
    car.drive();

    
    return (<>
    <button onClick={dynamicType}>다이나믹 타입 테스트</button> <br/>
    <button onClick={jsonSample}>JSON</button>
    </>)
}
export default Basic