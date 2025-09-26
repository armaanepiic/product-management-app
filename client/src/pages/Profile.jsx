import { useLocation, useParams, useSearchParams } from "react-router";

export default function Profile() {
  const { profileId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  console.log(location);

  return (
    <div>
      <p>{`Profile ID: ${profileId}`}</p>
      <p>{`Search params: ${searchParams.get("mode")}`}</p>
      <button
        onClick={() => {
          setSearchParams({ user: "Kamrul Hasan" });
        }}
      >
        Set User in Search Query
      </button>
    </div>
  );
}
