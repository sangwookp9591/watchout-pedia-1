import { useQuery } from 'react-query';
import { similarApi } from '../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, Response} from "../../types";

const useSimilarMovie = (id: string) => {
  const { isLoading, isError, data } = useQuery<AxiosResponse<Response<MovieDetail>>, AxiosError>(['movieSimilar', id], () => similarApi(id));

  return {
    isLoading,
    isError,
    data: data?.data
  }
}

export default useSimilarMovie;
