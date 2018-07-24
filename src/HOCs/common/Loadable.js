// Module dependencies
import LoadableVisibility from 'react-loadable-visibility/react-loadable';

import Loader from '../../components/common/Loader';

// HOC
const withLoadable = loader =>
  LoadableVisibility({
    delay: 200,
    loader,
    loading: Loader,
    timeout: 10000
  });

// Module exports
export default withLoadable;
