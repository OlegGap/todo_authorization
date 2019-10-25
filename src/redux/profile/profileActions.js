export const Type = {
  FETCH_PROFILE_START: 'FETCH_PROFILE_START',
  FETCH_PROFILE_SUCCESS: 'FETCH_PROFILE_SUCCESS',
  FETCH_PROFILE_ERROR: 'FETCH_PROFILE_ERROR',
};

export const fetchProfileStart = () => ({
  type: Type.FETCH_PROFILE_START,
});

export const fetchProfileSuccess = profile => ({
  type: Type.FETCH_PROFILE_SUCCESS,
  payload: { profile },
});

export const fetchProfileError = error => ({
  type: Type.FETCH_PROFILE_ERROR,
  payload: { error },
});
