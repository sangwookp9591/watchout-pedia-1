import { useQuery } from 'react-query';
import { airingTodayApi } from '../../../apis/tvApi';
import {AxiosResponse} from "axios";
import {TVDetail, Response} from "../../../types";

const useAiringTodayTv = () => {
  return useQuery<AxiosResponse<Response<TVDetail>>>('airingTodayTv', airingTodayApi);
}

export default useAiringTodayTv;
