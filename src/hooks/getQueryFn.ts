import apiClient from "../services/api-client";

const getQueryFn = (url:string, params:any) =>
  apiClient.get(url,params).then((res) => res.data);

export default getQueryFn;
