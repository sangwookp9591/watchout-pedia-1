import { useQuery } from 'react-query';
import { topRatedApi } from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {Response, MovieDetail} from "../../../types";

const useTopRateMovie = () => {
  return useQuery<AxiosResponse<Response<MovieDetail>>, AxiosError>('topRate', topRatedApi);
}

export default useTopRateMovie;
