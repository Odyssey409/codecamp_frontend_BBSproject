import { gql } from "@apollo/client";

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
