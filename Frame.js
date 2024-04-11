import { useCallback } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Top10Strongest = styled.p`
  margin: 0;
`;
const Top10StrongestContainer = styled.b`
  position: absolute;
  top: 102px;
  left: 1811px;
`;
const ShakerTable = styled.div`
  position: absolute;
  top: -3px;
  left: 35px;
  font-size: 64px;
  font-family: "Markazi Text";
  color: #fff;
  text-align: left;
  display: inline-block;
  width: 324px;
  height: 70px;
  text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
`;
const LandingPage = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgba(100, 174, 169, 0.88);
  border: 1px solid #000;
  box-sizing: border-box;
  width: 1134px;
  height: 67px;
  overflow: hidden;
  color: #efdfbb;
`;
const FrameChild = styled.img`
  position: absolute;
  top: 67px;
  left: 0px;
  width: 1134px;
  height: 579px;
  object-fit: cover;
  mix-blend-mode: normal;
`;
const BackToHome = styled.b`
  position: absolute;
  top: 15px;
  left: 30px;
  text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
`;
const BackToHomePageWrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 41px;
  border-radius: 5px;
  background-color: rgba(100, 174, 169, 0.88);
  border: 1px solid #000;
  box-sizing: border-box;
  width: 185px;
  height: 48px;
`;
const Frame1 = styled.div`
  position: absolute;
  top: 90px;
  left: -13px;
  width: 226px;
  height: 48px;
  overflow: hidden;
  cursor: pointer;
`;
const FrameItem = styled.div`
  position: absolute;
  top: 162px;
  left: 71px;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.8);
  width: 471px;
  height: 414px;
  opacity: 0.8;
`;
const FrameInner = styled.div`
  position: absolute;
  top: 162px;
  left: 580px;
  border-radius: 5px;
  background-color: rgba(217, 217, 217, 0.8);
  width: 471px;
  height: 414px;
  opacity: 0.8;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 162px;
  left: 71px;
  border-radius: 5px;
  background-color: rgba(100, 174, 169, 0.88);
  width: 471px;
  height: 39px;
`;
const FrameChild1 = styled.div`
  position: absolute;
  top: 162px;
  left: 580px;
  border-radius: 5px;
  background-color: rgba(100, 174, 169, 0.88);
  width: 471px;
  height: 39px;
`;
const ReferenceWave = styled.b`
  position: absolute;
  top: 172px;
  left: 237px;
  font-size: 20px;
  text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
`;
const ShakeTableOutput = styled.b`
  position: absolute;
  top: 172px;
  left: 729px;
  font-size: 20px;
  text-shadow: 1px 0 0 #000, 0 1px 0 #000, -1px 0 0 #000, 0 -1px 0 #000;
`;
const LandingPageParentRoot = styled.div`
  width: 100%;
  height: 646px;
  position: relative;
  text-align: center;
  font-size: 15px;
  color: #fff;
  font-family: "Inria Sans";
`;

const Frame = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <LandingPageParentRoot>
      <LandingPage>
        <Top10StrongestContainer>
          <Top10Strongest>{`Top 10 Strongest `}</Top10Strongest>
          <Top10Strongest>Earthquake</Top10Strongest>
        </Top10StrongestContainer>
        <ShakerTable>Shaker-Table</ShakerTable>
      </LandingPage>
      <FrameChild alt="" src="/rectangle-25@2x.png" />
      <Frame1 onClick={onFrameContainerClick}>
        <BackToHomePageWrapper>
          <BackToHome>Back to Home Page</BackToHome>
        </BackToHomePageWrapper>
      </Frame1>
      <FrameItem />
      <FrameInner />
      <RectangleDiv />
      <FrameChild1 />
      <ReferenceWave>Reference Wave</ReferenceWave>
      <ShakeTableOutput>Shake-Table Output</ShakeTableOutput>
    </LandingPageParentRoot>
  );
};

export default Frame;
