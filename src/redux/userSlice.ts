import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  firstName: '',
  lastName: '',
  address: '',
  countryCode: '+91',
  phone: '',
  errorMsg: {
    emailError: '',
    passwordError: '',
    firstNameError: '',
    lastNameError: '',
    addressError: '',
    phoneError: '',
    checkboxError: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setLastName: (state, action) => {
      state.lastName = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setCountryCode: (state, action) => {
      state.countryCode = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
    },
    setErrorMsg: (state, action) => {
      state.errorMsg = {...state.errorMsg, ...action.payload};
    },
  },
});

export const {
  setEmail,
  setPassword,
  setFirstName,
  setLastName,
  setAddress,
  setPhone,
  setCountryCode,
  setErrorMsg,
} = userSlice.actions;

export default userSlice.reducer;
