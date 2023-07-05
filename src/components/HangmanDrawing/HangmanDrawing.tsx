import {Body, Bottom, Container, Hack, Head, LeftArm, LeftLeg, Line, RightArm, RightLeg, Top} from "./styled";

const HangmanDrawing = () => {
    return (
        <Container>
            <Head/>
            <Body/>
            <RightArm/>
            <LeftArm/>
            <RightLeg/>
            <LeftLeg/>
            <Hack/>
            <Top/>
            <Line/>
            <Bottom/>
        </Container>
    );
};

export default HangmanDrawing;