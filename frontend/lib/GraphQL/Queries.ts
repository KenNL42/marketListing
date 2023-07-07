import { gql } from "@apollo/client";

export const LOAD_LISTING = gql`
  query {
    getAllListing {
      timeStamp
      price
      title
      course
      pictures
      description
      contactEmail
      contactPhone
    } 
  }
`