import axios from "axios";

const API_URL = "http://localhost:5000/api/trips";


export const createTrip = async (tripData) => {

  const token = localStorage.getItem("token");


  const response = await axios.post(

    API_URL,

    tripData,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }

  );


  return response.data;

};