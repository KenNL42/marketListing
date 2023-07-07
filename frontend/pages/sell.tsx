import Layout from "../components/layout";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";

import { gql, useQuery, useMutation } from "@apollo/client";
import { CREATE_LISTING } from "../lib/GraphQL/Mutations";

// THIS SHOULD BE PROTECTED
export default function Sell() {
  const { data: session, status } = useSession();
  // const loading = status === 'loading'
  const [price, setPrice] = useState(0.0);
  const [title, setTitle] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [pictures, setPictures] = useState([""]);
  const [description, setDescription] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  // ---- test graphql ----
  // const GET_DATA = gql`
  //   query {
  //     getAllUsers {
  //       id
  //       firstName
  //       email
  //     }
  //   }
  // `
  // const {error, loading, data} = useQuery(GET_DATA);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  // const POST_DATA = gql`
  //   mutation {
  //     createUser (
  //       firstName: "TESTNAME",
  //       lastName: "TESTLASTNAME",
  //       email: "TESTEMAIL@email.com"
  //     ){
  //       firstName
  //       lastName
  //       email
  //     }
  //   }
  // `
  // const POST_DATA = gql`
  //   mutation CreateUser(
  //     $firstName: String!
  //     $lastName: String!
  //     $email: String!
  //     ) {
  //       createUser(
  //         firstName: $firstName
  //         lastName: $lastName
  //         email: $email
  //       ) {
  //         id
  //         firstName
  //         lastName
  //         email
  //       }
  //     }
  // `
  // const [createUser] = useMutation(POST_DATA);
  // const addUser = () => {
  //   createUser({
  //     variables: {
  //       firstName: "HI",
  //       lastName: "Hello",
  //       email: "email@mail.com"
  //     }
  //   });
  // }

  const [createListing, { error }] = useMutation(CREATE_LISTING);

  const addListing = () => {
    createListing({
      variables: {
        // id:
        // timeStamp:
        price: price,
        title: title,
        course: courseNumber,
        pictures: pictures,
        description: description,
        sellerEmail: sellerEmail,
        contactEmail: contactEmail,
        contactPhone: contactPhone,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  // ---- end test graphql ----

  // use session email as default
  useEffect(() => {
    if (session?.user?.email) {
      setSellerEmail(session.user.email);
    }
  }, [session]);

  function handleSubmit(): void {}

  function createTitleInput(): JSX.Element {
    return (
      <input
        placeholder="Title"
        name="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    );
  }
  function createCourseNumberInput(): JSX.Element {
    return (
      <input
        placeholder="Course Number (COM SCI 32)"
        name="courseNumber"
        value={courseNumber}
        onChange={(e) => setCourseNumber(e.target.value)}
      />
    );
  }
  function createPictureUploadButton(): JSX.Element {
    return (
      // <button>Upload Photoes</button>
      <input
        placeholder="TEMP PICTURE URLs"
        name="pictures"
        value={pictures}
        onChange={(e) => setPictures([e.target.value])}
      />
    );
  }
  function createDescriptionInput(): JSX.Element {
    return (
      <textarea
        placeholder="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    );
  }
  function createPriceInput(): JSX.Element {
    // !WORK ON PRICE VALIDATION LATER
    function handlePrice(event: React.ChangeEvent<HTMLInputElement>): void {
      const inputValue = event.target.value;
      const floatValue = parseFloat(inputValue);
      // Check if input value is a valid integer
      // if (/^[0-9]+\.{0,1}[0-9]{0,2}$/.test(inputValue)) {
      if (
        !Number.isNaN(floatValue) &&
        /^[0-9]*(\.[0-9]{0,2})?$/.test(inputValue)
      ) {
        // Input value is a non-negative integer
        setPrice(floatValue);
      } else if (inputValue == "") {
        setPrice(0.0);
      } else {
        // Input value is not a valid positive integer, reject it
        event.preventDefault();
      }
    }
    return (
      <input
        type="number"
        placeholder="Price"
        name="price"
        value={price === 0.0 ? "" : price}
        onChange={(e) => handlePrice(e)}
      />
    );
  }
  function createContactEmailInput(): JSX.Element {
    return (
      <input
        type="email"
        placeholder="Contact Email"
        name="email"
        value={contactEmail}
        onChange={(e) => setContactEmail(e.target.value)}
      />
    );
  }
  function createContactPhoneInput(): JSX.Element {
    return (
      <input
        type="]"
        placeholder="Contact Phone Number"
        name="phoneNumber"
        value={contactPhone}
        onChange={(e) => setContactPhone(e.target.value)}
      />
    );
  }

  // useEffect() is not needed unless we need to work with external data

  // When rendering client side don't display anything until loading is complete
  // if (typeof window !== 'undefined' && loading) {return null}

  // If no session exists, display access denied message
  if (!session) {
    return <Layout>PLEASE LOG IN WITH UCLA ACCOUNT TO SELL ITEM</Layout>;
  }

  // If session exists, display content
  return (
    <Layout>
      <h1>Sell</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {createTitleInput()}
          <br /> {/*! need to break line with css more properly */}
          {createCourseNumberInput()}
          <br />
          {createPictureUploadButton()}
          <br />
          {createDescriptionInput()}
          <br />
          {createPriceInput()}
          <br />
          {createContactEmailInput()}
          <br />
          {createContactPhoneInput()}
          <br />
          <button type="submit">List Item</button>
        </form>
      </div>
      {/* <button onClick={addUser}>Create Test User</button> */}
      <button onClick={addListing}>CREATE LISTING</button>
    </Layout>
  );
}
