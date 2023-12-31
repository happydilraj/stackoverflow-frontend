import axios from 'axios'
const API = axios.create({baseURL: 'https://stack-overflow-9dkn.onrender.com',});

API.interceptors.request.use((req) => {
    if (localStorage.getItem("Profile")) {
      req.headers.authorization = `Bearer ${
        JSON.parse(localStorage.getItem("Profile")).token
      }`;
    }
    return req;
  });

export const signup = (authData) => API.post('/user/signup',authData);
export const login = (authData) => API.post('/user/login',authData);

export const postQuestion = (questionData) => API.post('/questions/Ask', questionData)
export const getAllQuestions = () => API.get('/questions/Get')
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`)
export const voteQuestion = (id,value,userId) => API.patch(`/questions/vote/${id}`,{value,userId})

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered, userId ) => API.patch(`/answers/post/${id}`, { noOfAnswers, answerBody, userAnswered, userId})
export const deleteAnswer = (id,answerId, noOfAnswers) => API.patch(`/answers/delete/${id}`, {answerId, noOfAnswers})

export const getAllUsers = () => API.get('/AllUsers/GetAllUsers');
export const updateProfile = (id, updateData) => API.patch(`/AllUsers/update/${id}`, updateData)