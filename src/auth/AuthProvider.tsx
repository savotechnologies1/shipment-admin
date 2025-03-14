import { useCheckToken } from "./http/useCheckToken";

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const { isLoading } = useCheckToken();

  if (isLoading) return <div>Loading...</div>;
  return children;
}
