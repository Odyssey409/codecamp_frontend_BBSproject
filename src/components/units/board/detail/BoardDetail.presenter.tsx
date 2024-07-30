import * as Styles from "./BoardDetail.styles";

import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import {
  faUser,
  faLink,
  faLocationDot,
  faThumbsUp,
  faThumbsDown,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <Styles.MasterWrapper>
      <Styles.PageWrapper>
        <Styles.BoardHeaderWrapper>
          <Styles.BoardHeaderLeftWrapper>
            <Styles.BoardHeaderProfileImgBox>
              <FontAwesomeIcon icon={faUser} />
            </Styles.BoardHeaderProfileImgBox>
            <Styles.BoardHeaderNameDateBox>
              <Styles.BoardHeaderName>
                {props.data ? props.data.fetchBoard?.writer : "loading..."}
              </Styles.BoardHeaderName>
              <Styles.BoardHeaderDate>
                Date :{" "}
                {props.data ? props.data.fetchBoard?.createdAt : "loading..."}
              </Styles.BoardHeaderDate>
            </Styles.BoardHeaderNameDateBox>
          </Styles.BoardHeaderLeftWrapper>
          <Styles.BoardHeaderRightWrapper>
            <Styles.BoardHeaderIconBox>
              <FontAwesomeIcon icon={faLink} />
            </Styles.BoardHeaderIconBox>
            <Styles.BoardHeaderIconBox>
              <FontAwesomeIcon icon={faLocationDot} />
            </Styles.BoardHeaderIconBox>
          </Styles.BoardHeaderRightWrapper>
        </Styles.BoardHeaderWrapper>
        <Styles.DivideLine></Styles.DivideLine>
        <Styles.BoardBodyWrapper>
          <Styles.BoardDetailWrapper>
            <Styles.BoardBodyTitle>
              {props.data ? props.data.fetchBoard?.title : "loading..."}
            </Styles.BoardBodyTitle>
            <Styles.BoardBodyImgBox></Styles.BoardBodyImgBox>
            <Styles.BoardBodyContent>
              {props.data ? props.data.fetchBoard?.contents : "loading..."}
            </Styles.BoardBodyContent>
          </Styles.BoardDetailWrapper>
          <Styles.BoardBodyVideo>
            <video poster="/assets/video.png"></video>
          </Styles.BoardBodyVideo>
          <Styles.BoardLikeDislikeWrapper>
            <Styles.BoardLikeBox>
              <FontAwesomeIcon icon={faThumbsUp} />
              {props.data ? props.data.fetchBoard?.likeCount : "loading..."}
            </Styles.BoardLikeBox>
            <Styles.BoardDislikeBox>
              <FontAwesomeIcon icon={faThumbsDown} />
              {props.data ? props.data.fetchBoard?.dislikeCount : "loading..."}
            </Styles.BoardDislikeBox>
          </Styles.BoardLikeDislikeWrapper>
        </Styles.BoardBodyWrapper>
      </Styles.PageWrapper>
      <Styles.ToListsAndModifyBtnBox>
        <Styles.ToListsAndModifyBtn onClick={props.onClickToList}>
          목록으로
        </Styles.ToListsAndModifyBtn>
        <Styles.ToListsAndModifyBtn onClick={props.onClickMoveEdit}>
          수정하기
        </Styles.ToListsAndModifyBtn>
        <Styles.ToListsAndModifyBtn
          id={props.data?.fetchBoard?._id}
          onClick={props.onClickDelete}
        >
          삭제하기
        </Styles.ToListsAndModifyBtn>
      </Styles.ToListsAndModifyBtnBox>
      <Styles.BoardDetailBottomPageWrapper>
        <Styles.DivideLine></Styles.DivideLine>
        <Styles.CommentsTitleBox>
          <Styles.CommentIcon>
            <FontAwesomeIcon icon={faComments} />
          </Styles.CommentIcon>
          댓글
        </Styles.CommentsTitleBox>
        <Styles.CommentUserInfoWrapper>
          <Styles.CommentUserInfoInputBox
            placeholder="이름을 적어주세요."
            onChange={props.onChangeWriter}
            value={props.writer}
            hidden={props.isEditComment}
          ></Styles.CommentUserInfoInputBox>
          <Styles.CommentUserInfoInputBox
            placeholder="비밀번호를 입력해주세요."
            onChange={props.onChangePassword}
            value={props.password}
            hidden={props.isEditComment}
          ></Styles.CommentUserInfoInputBox>
          <Styles.CommentRatingBox>
            <Styles.MyRate
              onChange={props.onChangeRating}
              allowHalf
              defaultValue={2.5}
              value={props.rating}
            />
          </Styles.CommentRatingBox>
        </Styles.CommentUserInfoWrapper>
        <Styles.CommentErrorMsgWrapper>
          <Styles.CommentErrorMsgContainer>
            {props.writerError}
          </Styles.CommentErrorMsgContainer>
          <Styles.CommentErrorMsgContainer>
            {props.passwordError}
          </Styles.CommentErrorMsgContainer>
          <Styles.CommentErrorMsgContainer>
            {props.ratingError}
          </Styles.CommentErrorMsgContainer>
        </Styles.CommentErrorMsgWrapper>

        <Styles.CommentWritingWrapper>
          <Styles.CommentWritingBox
            placeholder={
              props.isEditComment
                ? "수정할 내용을 입력해 주세요"
                : "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            }
            onChange={props.onChangeContent}
            value={props.content}
          ></Styles.CommentWritingBox>
          <Styles.CommentPostBtnBox>
            <Styles.CommentLetterCntBox>
              {props.contentLength}/100
            </Styles.CommentLetterCntBox>
            <Styles.CommentPostBtn
              onClick={
                props.isEditComment
                  ? props.onClickCommentUpdateSubmit
                  : props.onClickCommentSubmitBtn
              }
              disabled={props.isEditComment ? false : props.activeSubmitBtn}
            >
              {props.isEditComment ? "수정" : "등록"}하기
            </Styles.CommentPostBtn>
          </Styles.CommentPostBtnBox>
        </Styles.CommentWritingWrapper>
        <Styles.CommentErrorMsgWrapper>
          <Styles.CommentErrorMsgContainer>
            {props.contentError}
          </Styles.CommentErrorMsgContainer>
        </Styles.CommentErrorMsgWrapper>
        <Styles.CommentsListWrapper>
          {props.commentsData?.fetchBoardComments.map((el, index) => (
            <Styles.CommentsIndividualBox key={el._id}>
              <Styles.CommentsIndividualProfileImgBox>
                <FontAwesomeIcon icon={faUser} />
              </Styles.CommentsIndividualProfileImgBox>
              <Styles.CommentsIndividualContentWrapper>
                <Styles.CommentsIndividualNameBox>
                  <Styles.CommentsNameRatingBox>
                    <Styles.CommentsIndividualNameSpan>
                      {el.writer}
                    </Styles.CommentsIndividualNameSpan>
                    <Styles.CommentsListsRating>
                      <Styles.MyRate allowHalf value={el.rating} disabled />
                    </Styles.CommentsListsRating>
                  </Styles.CommentsNameRatingBox>

                  <Styles.CommentsEditDeleteWrapper>
                    <Styles.CommentsEditBox
                      id={el._id}
                      onClick={(e) =>
                        props.onClickCommentUpdate(e.currentTarget.id)
                      }
                    >
                      <EditOutlined />
                    </Styles.CommentsEditBox>
                    <Styles.CommentsDeleteBox
                      id={el._id}
                      onClick={(e) =>
                        props.onClickCommentDelete(e.currentTarget.id)
                      }
                    >
                      <DeleteOutlined />
                    </Styles.CommentsDeleteBox>
                  </Styles.CommentsEditDeleteWrapper>
                </Styles.CommentsIndividualNameBox>
                <Styles.CommentsIndividualContentBox>
                  {el.contents}
                </Styles.CommentsIndividualContentBox>
                <Styles.CommentsListsCreatedAt>
                  2021.02.22
                </Styles.CommentsListsCreatedAt>
              </Styles.CommentsIndividualContentWrapper>
            </Styles.CommentsIndividualBox>
          ))}
        </Styles.CommentsListWrapper>
      </Styles.BoardDetailBottomPageWrapper>
    </Styles.MasterWrapper>
  );
}
