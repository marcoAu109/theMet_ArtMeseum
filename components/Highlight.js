import { useEffect } from "react";
import { useRouter } from "next/router";

// Here you would fetch and return the user
const useUser = () => ({ user: null, loading: false });

export default function Highlight({ highlight }) {
  const { user, loading } = useUser();
  const router = useRouter();
  useEffect(() => {
    if (!(user || loading)) {
      router.push(`/artwork?title=true&q=${highlight}`);
    }
  }, [user, loading]);

  return <p>Redirecting...</p>;
}
