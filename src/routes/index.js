import {useAuthStore} from '../store/UserStore';
import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const {isLoggedIn} = useAuthStore();

  return isLoggedIn ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
