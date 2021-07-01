const initalState = { users: [] };

export default function (state = initalState, action) {
  switch (action.type) {
    case 'ADD_ALL_USERS':
      let users = action.payload;
      return { users: users };

    default:
      return state;
  }
}