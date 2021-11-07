import { useQuery } from 'react-query';
import { popularApi } from '../../../apis/tvApi';
import {AxiosError, AxiosResponse} from "axios";
import {Response, TVDetail} from "../../../types";

const usePopularTv = () => {
  return useQuery<AxiosResponse<Response<TVDetail>>, AxiosError>('popularTv', popularApi);
}

export default usePopularTv;
