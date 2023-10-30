import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from 'components/Loader/Loader';
import BasicModalWindow from 'components/common/BasicModalWindow/BasicModalWindow';
import TimerWarning from 'components/common/TimerWarning/TimerWarning';
import ErrorMessage from 'components/common/ErrorMessage/ErrorMessage';
import { initialState, setCredentials } from 'src/redux/auth/authSlice';

export default function ErrorHandler({ isLoading, isError, error }) {
  const [showTimerWarning, setShowTimerWarning] = useState(false);
  const [showError, setShowError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let id;

    if (isLoading) {
      id = setTimeout(setShowTimerWarning, 5000, true);
    } else {
      setShowTimerWarning(false);
    }

    return clearTimeout(id);
  }, [isLoading]);

  useEffect(() => {
    if (isError) {
      setShowError(true);
      setTimeout(() => setShowError(false), 2000);
    }
  }, [isError]);

  useEffect(() => {
    if (error?.status === 401) {
      dispatch(setCredentials(initialState));
    }
  }, [dispatch, error]);

  return (
    <>
      {isLoading && <Loader />}

      {isLoading && showTimerWarning && (
        <BasicModalWindow onClose={() => setShowTimerWarning(false)}>
          <TimerWarning />
        </BasicModalWindow>
      )}

      {showError && (
        <BasicModalWindow onClose={() => setShowError(false)}>
          <ErrorMessage message={error?.data?.message} />
        </BasicModalWindow>
      )}
    </>
  );
}

ErrorHandler.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  error: PropTypes.shape({
    data: PropTypes.shape({
      message: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.number.isRequired,
  }),
};

// ============================== USAGE EXAMPLE ==============================

// export default function Component() {
//
//   const { data, isFetching, isError, error } = use.......Query();
//   OR
//   const [function, { data, isLoading, isError, error }] = useLazy.......Query();
//   OR
//   const [function, { data, isLoading, isError, error }] = use.......Mutation();
//
//
//   REST OF YOUR CODE...
//
//
//   return (
//     <>
//       YOUR COMPONENTS.....
//       <ErrorHandler isLoading={isFetching || isLoading} isError={isError} error={error} />
//     </>
//   )
// }

// ============================== /USAGE EXAMPLE ==============================