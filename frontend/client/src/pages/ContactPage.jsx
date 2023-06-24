import React, { useEffect } from "react";
import { Col, Container, Row, Table, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { fetchAllContactsThunk } from "../features/contactSlice";
import Spinner from "../components/Spinner";
import Title from "../components/Title";

function ContactsPage() {
  //get redux state
  const { contact, isLoading, isError, message } = useSelector(
    (state) => state.contact
  );
  /*
  //state
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [is_staff, setIsStaff] = useState("");
  let [phone_number, setPhoneNumber] = useState("");
  let [profile_photo, setProfilePhoto] = useState("");
  let [gender, setGender] = useState("");
  let [country, setCountry] = useState("");
*/
  //create dispatch() function
  const dispatch = useDispatch();

  useEffect(() => {
    if (isError) {
      toast.error(message, { icon: "😭" });
    }

    dispatch(fetchAllContactsThunk());
  }, [dispatch, isError, message]);

  return (
    <>
      <Title title="Contacts" />
      <Container style={{ paddingTop: "80px" }}>
        <Row>
          <Col className="mg-top text-center">
            <section>
              <h1>Contacts</h1>
            </section>
          </Col>
        </Row>
        {isLoading && <Spinner />}
        <Row>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>PhoneNumber</th>
                <th>ProfilePhoto</th>
                <th>Gender</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {contact ? (
                <tr key={contact.id}>
                  <td>{contact.id}</td>
                  <td>
                    <span>{contact.first_name}</span>
                  </td>
                  <td>
                    <span>{contact.last_name}</span>
                  </td>
                  <td>
                    <span>{contact.email}</span>
                  </td>
                  <td>
                    <span>{contact.phone_number}</span>
                  </td>
                  <td>
                    <span>{contact.profile_photo}</span>
                  </td>
                  <td>
                    <span>{contact.gender}</span>
                  </td>
                  <td>
                    <Button variant="primary" size="sm">
                      Edit
                    </Button>
                    <Button variant="danger" size="sm">
                      Delete
                    </Button>
                  </td>
                </tr>
              ) : null}
            </tbody>
          </Table>
        </Row>
      </Container>
    </>
  );
}

export default ContactsPage;
