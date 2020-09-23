import { useLocation } from 'react-router-dom';
import qs from 'qs';

const useQueryParams = () => {
  const location = useLocation();

  const params = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  return params;
};

export default useQueryParams;
