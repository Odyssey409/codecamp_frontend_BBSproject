import * as Styles from "./BoardDetail.styles";

import {
  faUser,
  faLink,
  faLocationDot,
  faThumbsUp,
  faThumbsDown,
  faComments,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function BoardDetailUI(props) {
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
        <Styles.ToListsAndModifyBtn>수정하기</Styles.ToListsAndModifyBtn>
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
        <Styles.CommentRatingBox>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </Styles.CommentRatingBox>
        <Styles.CommentWritingWrapper>
          <Styles.CommentWritingBox placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></Styles.CommentWritingBox>
          <Styles.CommentPostBtnBox>
            <Styles.CommentLetterCntBox>0/100</Styles.CommentLetterCntBox>
            <Styles.CommentPostBtn>등록하기</Styles.CommentPostBtn>
          </Styles.CommentPostBtnBox>
        </Styles.CommentWritingWrapper>
        <Styles.CommentsListWrapper>
          <Styles.CommentsIndividualBox>
            <Styles.BoardHeaderProfileImgBox>
              <FontAwesomeIcon icon={faUser} />
            </Styles.BoardHeaderProfileImgBox>
            <Styles.CommentsIndividualContentWrapper>
              <Styles.CommentsIndividualNameBox>
                <span>노원두</span>
                <Styles.CommentsListsRating>
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </Styles.CommentsListsRating>
              </Styles.CommentsIndividualNameBox>
              <Styles.CommentsIndividualContentBox>
                진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
                부탁드립니다~!
              </Styles.CommentsIndividualContentBox>
            </Styles.CommentsIndividualContentWrapper>
          </Styles.CommentsIndividualBox>
          <Styles.CommentsListsCreatedAt>
            2021.02.22
          </Styles.CommentsListsCreatedAt>
          <Styles.DivideLine></Styles.DivideLine>
          <Styles.CommentsIndividualBox>
            <Styles.BoardHeaderProfileImgBox>
              <FontAwesomeIcon icon={faUser} />
            </Styles.BoardHeaderProfileImgBox>
            <Styles.CommentsIndividualContentWrapper>
              <Styles.CommentsIndividualNameBox>
                <span>땅찌</span>
                <Styles.CommentsListsRating>
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </Styles.CommentsListsRating>
              </Styles.CommentsIndividualNameBox>
              <Styles.CommentsIndividualContentBox>
                진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
                부탁드립니다~!
              </Styles.CommentsIndividualContentBox>
            </Styles.CommentsIndividualContentWrapper>
          </Styles.CommentsIndividualBox>
          <Styles.CommentsListsCreatedAt>
            2021.02.22
          </Styles.CommentsListsCreatedAt>
          <Styles.DivideLine></Styles.DivideLine>
          <Styles.CommentsIndividualBox>
            <Styles.BoardHeaderProfileImgBox>
              <FontAwesomeIcon icon={faUser} />
            </Styles.BoardHeaderProfileImgBox>
            <Styles.CommentsIndividualContentWrapper>
              <Styles.CommentsIndividualNameBox>
                <span>안우엽</span>
                <Styles.CommentsListsRating>
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </Styles.CommentsListsRating>
              </Styles.CommentsIndividualNameBox>
              <Styles.CommentsIndividualContentBox>
                진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
                부탁드립니다~!
              </Styles.CommentsIndividualContentBox>
            </Styles.CommentsIndividualContentWrapper>
          </Styles.CommentsIndividualBox>
          <Styles.CommentsListsCreatedAt>
            2021.02.22
          </Styles.CommentsListsCreatedAt>
          <Styles.DivideLine></Styles.DivideLine>
        </Styles.CommentsListWrapper>
      </Styles.BoardDetailBottomPageWrapper>
    </Styles.MasterWrapper>
  );
}
