import styled from "@emotion/styled";

export const MasterWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: white;
  padding: 50px 100px;
  box-shadow: 1px 0px 17px -1px rgba(0, 0, 0, 0.43);
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
  font-weight: 900;
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

export const BoardDetailBottomPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 1200px;
  background-color: white;
`;

export const ToListsAndModifyBtnBox = styled.div`
  width: 15%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

export const ToListsAndModifyBtn = styled.button`
  width: 179px;
  height: 52px;
  background-color: white;
  border: 1px solid rgba(130, 130, 130, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  margin-bottom: 50px;
`;

export const CommentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CommentsTitleBox = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  align-items: center;
  font-size: 26px;
  font-weight: 600;
  margin-top: 40px;
`;

export const CommentIcon = styled.div`
  color: #ffd600;
  font-size: 30px;
`;

export const CommentRatingBox = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
  justify-content: space-between;
  color: rgba(180, 189, 189, 0.7);
  margin-top: 30px;
`;

export const CommentWritingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid rgba(130, 130, 130, 0.4);
  margin-top: 30px;
`;

export const CommentWritingBox = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 15px;
  font-size: 14px;
  opacity: 0.5;
  font-weight: bold;
  border: none;
`;

export const CommentPostBtnBox = styled.div`
  padding-left: 10px;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(130, 130, 130, 0.4);
  justify-content: space-between;
`;

export const CommentLetterCntBox = styled.div`
  width: 30px;
  opacity: 0.5;
`;

export const CommentPostBtn = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  margin-right: 10px;
`;

export const CommentsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 30px;
`;

export const CommentsIndividualBox = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
`;

export const CommentsIndividualContentWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-left: 20px;
`;

export const CommentsIndividualNameBox = styled.div`
  display: flex;
  height: 40px;
  width: 10%;
  align-items: center;
  justify-content: space-between;
`;

export const CommentsIndividualContentBox = styled.div`
  font-size: 14 px;
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  height: 40px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CommentsListsRating = styled.div`
  display: flex;
  width: 40px;
  align-items: center;
  justify-content: space-between;
  color: rgba(180, 189, 189, 0.7);
`;

export const CommentsListsCreatedAt = styled.div`
  font-size: 12px;
  opacity: 0.6;
  width: 100%;

  margin: 10px 0px 30px 130px;
`;
