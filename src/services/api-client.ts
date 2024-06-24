import axios from "axios";

export interface Response<T> {
  statusCode: number;
  body: T;
}

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: string) => {
    return axiosInstance
      .get<Response<T>>(this.endpoint + config)
      .then((res) => res.data);
  };
}

export default APIClient;
