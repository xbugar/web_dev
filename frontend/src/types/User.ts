// post request
export type CreateUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type LoginUser = {
  email: string;
  password: string;
}

// post response, put request
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

// get user by id response
export type ResponseUser = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export type SessionId = {
  sessionId: string;
}
