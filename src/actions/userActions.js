import { getFirestore } from "redux-firestore"

export function addUserAction(user) {
  return async (dispatch, state, { getFirestore }) => {
    const db = getFirestore();
    try {
      await db.collection('users').add(user);
    } catch (error) {
      console.log(error);
    }
  };
}

//action to get users from the database
export function getAllUsersAction(user){
  return (dispatch, state, {getFirestore}) => {
    const db = getFirestore();
    db.collection('users').onSnapshot
    (
      (results) => {
        let users = [];
        results.forEach((doc) => {
          let user = doc.data();
          user.id = doc.id;
          users.push(user);
        });

        dispatch({
          type: 'ADD_ALL_USERS',
          payload: users,
        });
      },
      (err) => {
        console.log(err);
      }
    );
  };
}

export function deleteUserAction(id) {
  return async (dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    try {
      await db.collection('users').doc(id).delete();
    } catch (err) {
      console.log(err);
    }
  };
}


export function editUserAction(id, updatedUser) {
  return async (dispatch, state, { getFirestore }) => {
    let db = getFirestore();
    try {
      await db.collection('users').doc(id).update(updatedUser);
    } catch (err) {
      console.log(err);
    }
  };
}

