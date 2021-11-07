import { useQuery } from 'react-query';
import { topRatedApi } from '../../../apis/tvApi';
import {AxiosError, AxiosResponse} from "axios";
import {Response, TVDetail} from "../../../types";

const useTopRateTv = () => {
  return useQuery<AxiosResponse<Response<TVDetail>>, AxiosError>('topRateTv', topRatedApi);
}

export default useTopRateTv;
