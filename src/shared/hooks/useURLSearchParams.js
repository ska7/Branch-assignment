import { useSearchParams } from 'react-router-dom';

const useURLSearchParams = (param) => {
  const [searchParams] = useSearchParams();
  const searchParam = searchParams.get(param);

  return searchParam;
};

export default useURLSearchParams;
