import { useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { similarApi } from '../../apis/tvApi';
import {Response, TVDetail} from '../../types';

const useSimilarTv = (id: string) => {
  const { isLoading, isError, data } = useQuery<AxiosResponse<Response<TVDetail>>, AxiosError>(['movieSimilar', id], () => similarApi(id));

  return {
    isLoading,
    isError,
    data: data?.data
  }
}

export default useSimilarTv;
