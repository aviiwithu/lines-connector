import { ArcherContainer, ArcherElement } from "react-archer";
import Category from "./Category";

const rootStyle = {};
const rowStyle = {
  margin: "200px 0",
  display: "flex",
  justifyContent: "space-between",
};
const boxStyle = { padding: "10px", border: "1px solid black" };

const Archer = () => {
  return (
    <div>
      <ArcherContainer strokeColor="red">
        <div style={rowStyle}>
          <ArcherElement
            id="element2"
            relations={[
              {
                targetId: "element4",
                targetAnchor: "left",
                sourceAnchor: "right",
                style: { strokeDasharray: "5,5" },
              },
            ]}
          >
            <div>
              <Category name="Elemet 2" />
            </div>
          </ArcherElement>

          <ArcherElement id="element3">
            <div>
              <Category name="Elemet 3" />
            </div>
          </ArcherElement>

          <ArcherElement id="element4">
            <div>
              <Category name="Elemet 4" />
            </div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    </div>
  );
};

export default Archer;
