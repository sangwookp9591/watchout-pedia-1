import { useQuery } from 'react-query';
import { upcomingApi } from '../../../apis/movieApi';
import {Response, MovieDetail} from "../../../types";
import {AxiosError, AxiosResponse} from "axios";

const useLatestMovie = () => {
  return useQuery<AxiosResponse<Response<MovieDetail>>, AxiosError>('upcomingMovie', upcomingApi);
}

export default useLatestMovie;
