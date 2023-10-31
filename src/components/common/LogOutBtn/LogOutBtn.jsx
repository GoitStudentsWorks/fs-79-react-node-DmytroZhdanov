import { useDispatch } from 'react-redux';

import ErrorHandler from 'components/common/ErrorHandler/ErrorHandler';
import { LogoutTextP, SvgLogout, LogoutButton } from './LogoutBtn.styled';

import { useLogoutMutation } from 'src/redux/api';
import { initialState, setCredentials } from 'src/redux/auth/authSlice';
import sprite from 'src/assets/images/sprite/sprite.svg';

export default function LogOutBtn(props) {
  const dispatch = useDispatch();
  const [logout, { isLoading, isError, error }] = useLogoutMutation();

  const handleLogOut = async () => {
    try {
      await logout();
      dispatch(setCredentials(initialState));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <LogoutButton {...props} onClick={handleLogOut}>
        <LogoutTextP>Logout</LogoutTextP>

        <SvgLogout>
          <use href={`${sprite}#logout`}></use>
        </SvgLogout>
      </LogoutButton>

      <ErrorHandler isLoading={isLoading} isError={isError} error={error} />
    </>
  );
}
