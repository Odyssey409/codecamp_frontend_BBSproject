import styled from "@emotion/styled";

export const MasterWrapper = styled.div`
  box-sizing: border-box;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1200px;
  padding: 40px;
`;

export const BoardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1000px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  padding: 10px 0px 0px 0px;
`;

export const BoardListHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 900;

  padding-bottom: 10px;
`;

export const BoardListNumber = styled.div`
  width: 10%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardListTitle = styled.div`
  width: 60%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardListWriter = styled.div`
  width: 10%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardListDate = styled.div`
  width: 20%;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardListBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  padding: 10px 0px 10px 0px;
`;

export const BoardListFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 83%;
  margin-top: 30px;
`;

export const BoardListFooterPageNumBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-weight: 900;
`;

export const BoardListFooterPageNumbers = styled.div`
  display: flex;
  align-items: center;
  width: 7px;
  justify-content: center;
  margin: 0px 10px 0px 10px;
`;

export const BoardListFooterBoardWriterBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 25%;
  font-weight: 900;
  border: 1px solid rgba(242, 242, 242, 1);
  border-radius: 10px;
  font-size: 20px;
  padding: 12px;
  background-color: transparent;
`;
