import axios from "axios";
const AUTH_ENDPOINT = "http://localhost:8002";
const PROFILE_ENDPOINT = "http://localhost:8003";
const GET_USER_URL = "/api/v1/auth/users/me/";
const GET_ALL_USERS_URL = "/api/v1/users/all-users/";
const UPDATE_DELETE_USER_URL = "/auth/users/me/";
const LIST_CREATE_PROFILE_URL = "/api/v1/profiles/all-profiles";
const GET_UPDATE_DELETE_PROFILE_URL = "/api/v1/profiles/profile/";

//fetch all users
const fetchAllContacts = async () => {
  const token = localStorage.getItem("token");
  const get_config = {
    headers: {
      AUTHORIZATION: token,
    },
  };
  const current_user_response = await axios.get(
    AUTH_ENDPOINT + GET_USER_URL,
    get_config
  );
  const user_data = await current_user_response.data;
  //return data;

  let profile_response = await fetchOrCreateProfile(
    current_user_response.data.id
  );
  let final_response = await {
    ...user_data,
    ...profile_response,
  };
  return final_response;
};

// fetchOrCreateProfile
const fetchOrCreateProfile = async (current_user_id) => {
  //const id = userData.id;
  console.log("I'm in profilefn");
  const token = localStorage.getItem("token");
  const post_config = {
    headers: {
      AUTHORIZATION: token,
      "Content-Type": "application/json",
    },
  };
  try {
    let response = await axios.get(
      PROFILE_ENDPOINT + GET_UPDATE_DELETE_PROFILE_URL + current_user_id,
      post_config
    );
    console.log("response from profile fn: " + JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.log("in in error !404");
    if (error.response.status === 404) {
      console.log("in in error 404");

      let photoFile = GetPhoto();
      console.log("photoFile" + photoFile);
      let profileData = {
        user_id: current_user_id,
        phone_number: "+19026527159",
        profile_photo: photoFile,
        gender: "M",
        country: "CA",
      };
      let response = await axios.post(
        PROFILE_ENDPOINT + LIST_CREATE_PROFILE_URL,
        profileData,
        post_config
      );
      return response.data;
    }
  }
};

function GetPhoto() {
  const filePath = "../staticfiles/default.jpg";

  fetch(filePath)
    .then((response) => response.blob())
    .then((blob) => {
      const file = new File([blob], "default.jpg", { type: "image/jpeg" });
      console.log("file:" + file);
    })
    .catch((error) => {
      console.log("Error from file:", error);
    });
}
const contactService = { fetchAllContacts };
export default contactService;
