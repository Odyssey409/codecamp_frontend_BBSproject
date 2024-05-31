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
} from "../../../styles/boardDetail";

import {
  faUser,
  faLink,
  faLocationDot,
  faThumbsUp,
  faThumbsDown,
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

  const [createdAt, setCreatedAt] = useState("");

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
    </MasterWrapper>
  );
}
