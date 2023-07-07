import { gql } from "@apollo/client";
import DateTimeType from "./DateTimeType";

export const CREATE_LISTING =gql`
mutation createListing(
  $price: Float!
  $title: String!
  $course: String
  $pictures: [String]
  $description: String
  $sellerEmail: String!
  $contactEmail: String!
  $contactPhone: String
) {
  createListing(
    price: $price
    title: $title
    course: $course
    pictures: $pictures
    description: $description
    sellerEmail: $sellerEmail
    contactEmail: $contactEmail
    contactPhone: $contactPhone
  ) {
    id
    timeStamp
    price
    title
    course
    pictures
    description
    sellerEmail
    contactEmail
    contactPhone
  }
}
`;
