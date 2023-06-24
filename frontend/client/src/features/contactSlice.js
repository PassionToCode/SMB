import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import contactService from "../services/contactService";

const initialState = {
  contact: {
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    is_staff: false,
    phone_number: "+17776527159",
    profile_photo: null,
    gender: "O",
    country: "CA",
  },
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const fetchAllContactsThunk = createAsyncThunk(
  "contact/fetchAllContacts",
  async (_, thunkAPI) => {
    try {
      return await contactService.fetchAllContacts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    reset: (state) => {
      state.isError = false;
      state.isLoading = false;
      state.isSuccess = false;
      state.message = "";
    },
    add: (state, action) => {
      state.push(action.payload);
    },
    remove: (state, action) => {
      let index = state.findIndex((contact) => contact.id === action.payload);
      state.splice(index, 1);
    },
    update: (state, action) => {
      let index = state.findIndex(
        (contact) => contact.id === action.payload.id
      );
      state[index].first_name = action.payload.firstName;
      state[index].last_name = action.payload.lastName;
      state[index].username = action.payload.userName;
      state[index].email = action.payload.email;
      state[index].is_staff = action.payload.is_staff;
      state[index].phone_number = action.payload.phone_number;
      state[index].profile_photo = action.payload.profile_photo;
      state[index].gender = action.payload.gender;
      state[index].country = action.payload.country;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllContactsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchAllContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.contact = action.payload;
      })
      .addCase(fetchAllContactsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.contact = null;
      });
  },
});

export const { reset, add, remove, update } = contactSlice.actions;

export default contactSlice.reducer;
