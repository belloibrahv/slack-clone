import { gql, useQuery } from "@apollo/client";

const Home = () => {
  const { loading, error, data } = useQuery(allUserQuery);

  if (loading) return <div>Loading Request...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data.allUser);

  return (
    <div>
      <div>
        {data.allUser.map(({ id, email, username }) => {
          return (
            <div>
              <span key={id}>{email}</span>
              <>------------------------</>
              <span key={id}>{username}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const allUserQuery = gql`
  query {
    allUser {
      id
      email
      username
    }
  }
`;

export default Home;
