import React from "react";
import E from "./E";

const D = props => {
  const [res, setLocation] = React.useState({ load: false, location: "" });
  const [showE, setShowE] = React.useState(false);
  const importCom = url => {
    import("./F").then(res => {
      setLocation({ load: true, location: res.default });
    });
  };

  return (
    <React.Fragment>
      <div>
        <button
          onClick={() => {
            setShowE(!showE);
          }}
        >
          not splite one
        </button>
        {showE && <E />}
      </div>
      <div>
        <button onClick={importCom}>splite one</button>
        {res.load && <res.location />}
      </div>
    </React.Fragment>
  );
};
export default D;
