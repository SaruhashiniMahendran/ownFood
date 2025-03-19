import { useRouteError } from "react-router";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="about">
      <div>
        <h1>
          {err.status} {err.statusText}
        </h1>
      </div>
    </div>
  );
};

export default Error;
