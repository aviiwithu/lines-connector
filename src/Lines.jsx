import { ConnectProvider, Connect } from "react-connect-lines";
import Category from "./Category";

const Lines = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "50px",
      }}
    >
      <ConnectProvider>
        <Connect
          id="element-1"
          connectWith={[
            { id: "element-2", color: "red", stroke: "dashed" },
            { id: "element-3", edge: "step" },
          ]}
        >
          <Category name="Element 1" />
        </Connect>

        <Connect id="element-2">
          <Category name="Element 2" />
        </Connect>

        <Connect id="element-3">
          <Category name="Element 3" />
        </Connect>
      </ConnectProvider>
    </div>
  );
};
export default Lines;
