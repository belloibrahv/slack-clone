import { gql, useQuery } from "@apollo/client";

const allUserQuery = gql`
  query {
    allUser {
      id
      email
      username
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(allUserQuery);

  console.log(data.allUser);

  if (loading) return <div>Loading Request...</div>;
  if (error) return <div>Error: {error.message}</div>;

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

export default Home;
