import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes = () => {
  const singed = true;

  return singed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
