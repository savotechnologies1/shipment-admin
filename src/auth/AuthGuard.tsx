import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../store/typedReduxHooks";
import { getToken } from "../utils/tokenHelper";

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export function AuthGuard({ children }: Props) {
  const isAuthorized = useAppSelector((state) => state.user.isAuthorized);
  const token = getToken();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (isAuthorized !== undefined) {
      setChecking(false);
    }
  }, [isAuthorized]);

  if (checking) return <div>Loading...</div>;

  if (!isAuthorized && !token) {
    return <Navigate to="/sign-in" replace />;
  }

  return <>{children}</>;
}
