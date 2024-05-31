import styled from "@emotion/styled";

export const MasterWrapper = styled.div`
  box-sizing: border-box;
  width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 50px 100px;
`;

export const BoardHeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px 0px 15px;
`;

export const BoardHeaderLeftWrapper = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
  justify-content: space-between;
`;
export const BoardHeaderRightWrapper = styled.div`
  display: flex;
  width: 70px;
  align-items: center;
  justify-content: space-between;
`;

export const BoardHeaderNameDateBox = styled.div`
  width: 100%;
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
export const BoardHeaderName = styled.div`
  font-size: 20px;
`;
export const BoardHeaderDate = styled.div`
  font-size: 12px;
  color: rgba(130, 130, 130, 1);
`;

export const BoardHeaderIconBox = styled.div`
  color: #ffd600;
  font-size: 22px;
`;

export const BoardHeaderProfileImgBox = styled.div`
  font-size: 25px;
  background-color: rgba(180, 189, 189, 0.9);
  color: white;
  padding: 5px 10px;
  border-radius: 50%;
`;

export const DivideLine = styled.div`
  width: 100%;
  border-top: 2px solid rgba(180, 189, 189, 0.9);
`;

export const BoardBodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BoardDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const BoardBodyTitle = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-top: 60px;
`;

export const BoardBodyImgBox = styled.div`
  width: 100%;
  height: 480px;
  background-color: rgba(242, 242, 242, 1);
  margin-top: 40px;
`;

export const BoardBodyContent = styled.div`
  width: 100%;
  font-size: 18px;
  margin-top: 20px;
`;

export const BoardBodyVideo = styled.div`
  width: 486px;
  height: 240px;
`;

export const BoardLikeDislikeWrapper = styled.div`
  width: 100px;
  margin-top: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BoardLikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #ffd600;
  font-size: 22px;
`;

export const BoardDislikeBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: rgba(130, 130, 130, 1);
  font-size: 22px;
`;
