import { useQuery } from 'react-query';
import { onTheAirApi } from '../../../apis/tvApi';
import {AxiosError, AxiosResponse} from "axios";
import {TVDetail, Response} from "../../../types";

const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<Response<TVDetail>>, AxiosError>('onTheAirTv', onTheAirApi);
}

export default useOnTheAirTv;
