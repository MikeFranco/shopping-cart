export const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'add':
      return payload;
    case 'remove':
      return payload;
    default:
      return state;
  }
};
