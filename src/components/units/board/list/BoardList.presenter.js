import * as Styles from "./BoardList.styles";
import { getDate } from "../../../../../src/common/libraries/dateFormat";

import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BoardListUI(props) {
  return (
    <Styles.MasterWrapper>
      <Styles.PageWrapper>
        <Styles.BoardListWrapper>
          <Styles.BoardListHeader>
            <Styles.BoardListNumber>번호</Styles.BoardListNumber>
            <Styles.BoardListTitle>제목</Styles.BoardListTitle>
            <Styles.BoardListWriter>작성자</Styles.BoardListWriter>
            <Styles.BoardListDate>날짜</Styles.BoardListDate>
          </Styles.BoardListHeader>
          {props.data?.fetchBoards.map((el, index) => (
            <Styles.BoardListBody key={el._id}>
              <Styles.BoardListNumber>{index + 1}</Styles.BoardListNumber>
              <Styles.BoardListTitle
                id={el._id}
                onClick={props.onClickBoardDetailBtn}
              >
                {el.title}
              </Styles.BoardListTitle>
              <Styles.BoardListWriter>{el.writer}</Styles.BoardListWriter>
              <Styles.BoardListDate>
                {getDate(el.createdAt)}
              </Styles.BoardListDate>
            </Styles.BoardListBody>
          ))}
        </Styles.BoardListWrapper>
        <Styles.BoardListFooter>
          <Styles.BoardListFooterPageNumBox>
            &lt;
            <Styles.BoardListFooterPageNumbers>
              <span>1</span>
            </Styles.BoardListFooterPageNumbers>
            <Styles.BoardListFooterPageNumbers>
              <span>2</span>
            </Styles.BoardListFooterPageNumbers>
            &gt;
          </Styles.BoardListFooterPageNumBox>
          <Styles.BoardListFooterBoardWriterBtn
            onClick={props.onClickBoardWriteBtn}
          >
            <FontAwesomeIcon icon={faPencil} />
            <span>게시물 등록하기</span>
          </Styles.BoardListFooterBoardWriterBtn>
        </Styles.BoardListFooter>
      </Styles.PageWrapper>
    </Styles.MasterWrapper>
  );
}
