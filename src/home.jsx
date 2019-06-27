import React, { Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import NorLazy from "./NorLazy";
const LazyLoading = lazy(() => {
  import("./LazyLoading");
});
const Home = props => {
  const [state, setstate] = React.useState(false);
  const [nor, setnor] = React.useState(false);
  return (
    <React.Fragment>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Link to="/a">a</Link>
        <Link to="/b">Router async ->b</Link>
        <Link to="/c">Router async ->c</Link>
        <Link to="/d">Component async ->d</Link>
      </div>
      <button
        onClick={() => {
          setstate(!state);
        }}
      >
        Lazy load
      </button>
      {state && (
        <Suspense fallback={<div>loading</div>}>
          <LazyLoading />
        </Suspense>
      )}
      <button
        onClick={() => {
          setnor(!nor);
        }}
      >
        Nor Lazy load
      </button>
      {nor && <NorLazy />}
    </React.Fragment>
  );
};
export default Home;
