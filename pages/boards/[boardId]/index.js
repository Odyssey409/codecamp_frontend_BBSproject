import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

import {
  MasterWrapper,
  PageWrapper,
  BoardHeaderWrapper,
  BoardHeaderProfileImgBox,
  BoardHeaderNameDateBox,
  BoardHeaderIconBox,
  BoardHeaderName,
  BoardHeaderDate,
  BoardHeaderLeftWrapper,
  BoardHeaderRightWrapper,
  DivideLine,
  BoardBodyWrapper,
  BoardBodyTitle,
  BoardBodyImgBox,
  BoardBodyContent,
  BoardBodyVideo,
  BoardDetailWrapper,
  BoardLikeDislikeWrapper,
  BoardLikeBox,
  BoardDislikeBox,
  ToListsAndModifyBtnBox,
  CommentsWrapper,
  ToListsAndModifyBtn,
  BoardDetailBottomPageWrapper,
  CommentIcon,
  CommentRatingBox,
  CommentWritingWrapper,
  CommentsTitleBox,
  CommentWritingBox,
  CommentPostBtnBox,
  CommentPostBtn,
  CommentLetterCntBox,
  CommentsListWrapper,
  CommentsIndividualBox,
  CommentsIndividualContentWrapper,
  CommentsIndividualNameBox,
  CommentsIndividualContentBox,
  CommentsListsRating,
  CommentsListsCreatedAt,
} from "../../../styles/boardDetail";

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

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      title
      writer
      contents
      createdAt
      likeCount
      dislikeCount
    }
  }
`;

export default function BoardDetailPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.boardId },
  });

  return (
    <MasterWrapper>
      <PageWrapper>
        <BoardHeaderWrapper>
          <BoardHeaderLeftWrapper>
            <BoardHeaderProfileImgBox>
              <FontAwesomeIcon icon={faUser} />
            </BoardHeaderProfileImgBox>
            <BoardHeaderNameDateBox>
              <BoardHeaderName>
                {data ? data.fetchBoard?.writer : "loading..."}
              </BoardHeaderName>
              <BoardHeaderDate>
                Date : {data ? data.fetchBoard?.createdAt : "loading..."}
              </BoardHeaderDate>
            </BoardHeaderNameDateBox>
          </BoardHeaderLeftWrapper>
          <BoardHeaderRightWrapper>
            <BoardHeaderIconBox>
              <FontAwesomeIcon icon={faLink} />
            </BoardHeaderIconBox>
            <BoardHeaderIconBox>
              <FontAwesomeIcon icon={faLocationDot} />
            </BoardHeaderIconBox>
          </BoardHeaderRightWrapper>
        </BoardHeaderWrapper>
        <DivideLine></DivideLine>
        <BoardBodyWrapper>
          <BoardDetailWrapper>
            <BoardBodyTitle>
              {data ? data.fetchBoard?.title : "loading..."}
            </BoardBodyTitle>
            <BoardBodyImgBox></BoardBodyImgBox>
            <BoardBodyContent>
              {data ? data.fetchBoard?.contents : "loading..."}
            </BoardBodyContent>
          </BoardDetailWrapper>
          <BoardBodyVideo>
            <video poster="/assets/video.png"></video>
          </BoardBodyVideo>
          <BoardLikeDislikeWrapper>
            <BoardLikeBox>
              <FontAwesomeIcon icon={faThumbsUp} />
              {data ? data.fetchBoard?.likeCount : "loading..."}
            </BoardLikeBox>
            <BoardDislikeBox>
              <FontAwesomeIcon icon={faThumbsDown} />
              {data ? data.fetchBoard?.dislikeCount : "loading..."}
            </BoardDislikeBox>
          </BoardLikeDislikeWrapper>
        </BoardBodyWrapper>
      </PageWrapper>
      <ToListsAndModifyBtnBox>
        <ToListsAndModifyBtn>목록으로</ToListsAndModifyBtn>
        <ToListsAndModifyBtn>수정하기</ToListsAndModifyBtn>
      </ToListsAndModifyBtnBox>
      <BoardDetailBottomPageWrapper>
        <DivideLine></DivideLine>
        <CommentsTitleBox>
          <CommentIcon>
            <FontAwesomeIcon icon={faComments} />
          </CommentIcon>
          댓글
        </CommentsTitleBox>
        <CommentRatingBox>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </CommentRatingBox>
        <CommentWritingWrapper>
          <CommentWritingBox placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."></CommentWritingBox>
          <CommentPostBtnBox>
            <CommentLetterCntBox>0/100</CommentLetterCntBox>
            <CommentPostBtn>등록하기</CommentPostBtn>
          </CommentPostBtnBox>
        </CommentWritingWrapper>
        <CommentsListWrapper>
          <CommentsIndividualBox>
            <BoardHeaderProfileImgBox>
              <FontAwesomeIcon icon={faUser} />
            </BoardHeaderProfileImgBox>
            <CommentsIndividualContentWrapper>
              <CommentsIndividualNameBox>
                <span>노원두</span>
                <CommentsListsRating>
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </CommentsListsRating>
              </CommentsIndividualNameBox>
              <CommentsIndividualContentBox>
                진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
                부탁드립니다~!
              </CommentsIndividualContentBox>
            </CommentsIndividualContentWrapper>
          </CommentsIndividualBox>
          <CommentsListsCreatedAt>2021.02.22</CommentsListsCreatedAt>
          <DivideLine></DivideLine>
          <CommentsIndividualBox>
            <BoardHeaderProfileImgBox>
              <FontAwesomeIcon icon={faUser} />
            </BoardHeaderProfileImgBox>
            <CommentsIndividualContentWrapper>
              <CommentsIndividualNameBox>
                <span>땅찌</span>
                <CommentsListsRating>
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </CommentsListsRating>
              </CommentsIndividualNameBox>
              <CommentsIndividualContentBox>
                진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
                부탁드립니다~!
              </CommentsIndividualContentBox>
            </CommentsIndividualContentWrapper>
          </CommentsIndividualBox>
          <CommentsListsCreatedAt>2021.02.22</CommentsListsCreatedAt>
          <DivideLine></DivideLine>
          <CommentsIndividualBox>
            <BoardHeaderProfileImgBox>
              <FontAwesomeIcon icon={faUser} />
            </BoardHeaderProfileImgBox>
            <CommentsIndividualContentWrapper>
              <CommentsIndividualNameBox>
                <span>안우엽</span>
                <CommentsListsRating>
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon color="#ffd600" icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </CommentsListsRating>
              </CommentsIndividualNameBox>
              <CommentsIndividualContentBox>
                진짜 유익하고 정말 필요한 정보인 것 같아요~! 앞으로도 좋은 정보
                부탁드립니다~!
              </CommentsIndividualContentBox>
            </CommentsIndividualContentWrapper>
          </CommentsIndividualBox>
          <CommentsListsCreatedAt>2021.02.22</CommentsListsCreatedAt>
          <DivideLine></DivideLine>
        </CommentsListWrapper>
      </BoardDetailBottomPageWrapper>
    </MasterWrapper>
  );
}
