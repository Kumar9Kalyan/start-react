import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //   const [data, setData] = React.useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/kumar9kalyan")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div>Github</div>
      <img src={data.avatar_url} width={200} alt="My image" />
      <div>{data.name}</div>
      <div>{data.login}</div>
      <div>{data.organizations_url}</div>
    </>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/kumar9kalyan");
  return response.json();
};
