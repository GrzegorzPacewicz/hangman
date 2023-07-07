import {Fragment} from 'react';
import {Body, Bottom, Container, Hack, Head, LeftArm, LeftLeg, Line, RightArm, RightLeg, Top} from './styled';

type HangmanDrawingProps = {
    numberOfGuesses: number;
};

const BODY_PARTS = [Hack, Head, Body, RightArm, LeftArm, RightLeg, LeftLeg];

const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
    const renderedBodyParts = BODY_PARTS.slice(0, numberOfGuesses).map((BodyPart, index) => (
        <BodyPart key={index}/>
    ));

    return (
        <Container>
            <Fragment>
                {renderedBodyParts}
            </Fragment>
            <Top/>
            <Line/>
            <Bottom/>
        </Container>
    );
};

export default HangmanDrawing;


// import {Body, Bottom, Container, Hack, Head, LeftArm, LeftLeg, Line, RightArm, RightLeg, Top} from "./styled";
//
// type HangmanDrawingProps = {
//     numberOfGuesses: number
// }
//
// const BODY_PARTS = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]
//
// const HangmanDrawing = ({numberOfGuesses}: HangmanDrawingProps) => {
//     return (
//         <Container>
//             {BODY_PARTS.slice(0, numberOfGuesses)}
//             <Top/>
//             <Line/>
//             <Bottom/>
//         </Container>
//     );
// };
//
// export default HangmanDrawing;