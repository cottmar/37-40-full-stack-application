const D23_003 = 'Picture is required';
const D23_004 = 'Invalid Picture';

export const validatePicture = (picture) => {
  if (!picture) {
    throw new Error(D23_003);
  }
  const {
    _id, url, description, account,
  } = picture;

  if (!_id || !url || !description || !account) {
    throw new Error(D23_004);
  }
};

// - keywords: function, state, action, new state
export default (state = [], { type, payload }) => {
  switch (type) {
    case 'CLIENT_PICTURE_CREATE':
      validatePicture(payload);
      return [payload, ...state];
    case 'TOKEN_REMOVE':
      return []; // - removing pictures
    default:
      return state;
  }
};
