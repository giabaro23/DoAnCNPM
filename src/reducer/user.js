import * as typeAction from "./../constants/actionTypes";
let inistate = {
  fullName: "",
  firstName: "",
  lastName: "",
  email: "",
  url: "",
};

const myReduce = (state = inistate, action) => {
  switch (action.type) {
    case typeAction.GET_PROFILE_USER:
      const newState = {
        ...state,
        fullName:
          action.payload.data.first_name + " " + action.payload.data.last_name,
        firstName: action.payload.data.first_name,
        lastName: action.payload.data.last_name,
        email: action.payload.data.email,
        url: action.payload.data.photo_url,
      };
      return newState;
    default:
      return state;
  }
};

export default myReduce;
