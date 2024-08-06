import {axiosCall} from '../api_manager';
import {API, HTTPMethod} from '../utils/constant';

export const authenticateUser = (params, successCallback, errorCallback) => {
  axiosCall(
    API.loginAuthenticateUrl,
    HTTPMethod.POST,
    params,
    response => {
      successCallback(response);
    },
    errorResponse => {
      errorCallback(errorResponse);
    },
  );
};

export const getAllJoinRequest = (params, successCallback, errorCallback) => {
  axiosCall(
    API.getAllJoinRequestUrl,
    HTTPMethod.POST,
    params,
    response => {
      successCallback(response);
    },
    errorResponse => {
      errorCallback(errorResponse);
    },
  );
};

export const acceptOrRejectJoinRequest = (params, successCallback, errorCallback) => {
  axiosCall(
    API.acceptJoinRequestUrl,
    HTTPMethod.PUT,
    params,
    response => {
      successCallback(response);
    },
    errorResponse => {
      errorCallback(errorResponse);
    },
  );
};
