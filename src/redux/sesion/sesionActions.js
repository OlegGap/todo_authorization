export const ActionType = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  AUTHENTICATED: 'AUTHENTICATED',
};

export const loginRequest = () => ({
  type: ActionType.LOGIN_REQUEST,
});

export const loginSuccess = profile => ({
  type: ActionType.LOGIN_SUCCESS,
  payload: { profile },
});

export const loginError = error => ({
  type: ActionType.LOGIN_ERROR,
  payload: { error },
});

export const logoutRequest = () => ({
  type: ActionType.LOGOUT,
});

export const authenticatedSuccess = token => ({
  type: ActionType.AUTHENTICATED,
  payload: { token },
});
