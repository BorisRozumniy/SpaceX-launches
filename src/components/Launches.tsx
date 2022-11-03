import { AnyVariables, useQuery } from "urql";

const LaunchesQuery = `
query {
  launchesPast {
    id
    mission_name
  }
}
`;

type Launch = {
  id: string;
  mission_name: string;
};

type LaunchesPast = {
  launchesPast: Launch[];
};

export const Launches = () => {
  const [result, reexecuteQuery] = useQuery<LaunchesPast, AnyVariables>({
    query: LaunchesQuery,
  });

  console.log(result);

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <ul>
      {data?.launchesPast.map(({ mission_name, id }) => (
        <li key={id}>{mission_name}</li>
      ))}
    </ul>
  );
};
