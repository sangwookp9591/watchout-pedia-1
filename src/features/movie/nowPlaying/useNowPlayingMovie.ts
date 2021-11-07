import { useQuery } from 'react-query';
import { nowPlayingApi } from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, Response} from "../../../types";

const useNowPlayingMovie = () => {
  return useQuery<AxiosResponse<Response<MovieDetail>>, AxiosError>('nowPlayingMovie', nowPlayingApi);
}

export default useNowPlayingMovie;
