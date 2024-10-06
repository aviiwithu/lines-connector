import React, { useState } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import Category from "./Category";

const LinesConnect = () => {
  const [subCat, setSubCat] = useState([]);
  const [assetList, setAssetList] = useState([]);
  const [activeId, setActiveId] = useState({
    catId: null,
    subcatId: null,
    assetId: null,
  });

  const listData = [
    {
      id: "cat1",
      label: "Category 1",
      parentId: null,
      relation: [],
      data: [
        {
          id: "subcat11",
          label: "sub Category 1-1",
          relation: [],
          data: [],
        },
        {
          id: "subcat12",
          label: "sub Category 1-2",
          data: [
            {
              id: "asset121",
              label: "Asset 1-2-1",
              data: [],
              relation: [],
            },
            {
              id: "asset122",
              label: "Asset 1-2-2",
              data: [],
              relation: [],
            },
            {
              id: "asset123",
              label: "Asset 1-2-3",
              data: [],
              relation: [],
            },
            {
              id: "asset124",
              label: "Asset 1-2-4",
              data: [],
              relation: [],
            },
          ],
          relation: [],
        },
        {
          id: "subcat13",
          label: "sub Category 1-3",
          data: [
            {
              id: "asset131",
              label: "Asset 1-3-1",
              data: [],
              relation: [],
            },
            {
              id: "asset132",
              label: "Asset 1-3-2",
              data: [],
              relation: [],
            },
          ],
          relation: [],
        },
      ],
    },
    {
      id: "cat2",
      label: "Category 2",
      data: [],
      relation: [],
    },
    {
      id: "cat3",
      label: "Category 3",
      data: [],
      relation: [],
    },
  ];

  const handleCatClick = (catId, data) => {
    setSubCat(data);
    setAssetList([]);
    setActiveId((prev) => {
      const returnVal = { ...prev, catId, subcatId: null, assetId: null };
      return returnVal;
    });
  };
  const handleSubcatClick = (subcatId, data) => {
    setAssetList(data);
    setActiveId((prev) => {
      const returnVal = { ...prev, subcatId, assetId: null };
      return returnVal;
    });
  };
  return (
    <div className="h-full  border border-1">
      <ArcherContainer strokeColor="#031ea3" endMarker={false}>
        <div className=" grid grid-cols-3 h-screen w-full divide-x-2">
          <div className="flex flex-col justify-center items-center gap-3 px-8 py-4 h-full ">
            {listData.map((el) => {
              let relations = el.data.map((subcat) => {
                return {
                  targetId: subcat.id,
                  targetAnchor: "left",
                  sourceAnchor: "right",
                  style: { strokeDasharray: "2,2" },
                };
              });

              if (activeId.subcatId) {
                relations = el.data
                  .filter((subcat) => subcat.id === activeId.subcatId)
                  .map((subcat) => {
                    return {
                      targetId: subcat.id,
                      targetAnchor: "left",
                      sourceAnchor: "right",
                      style: { strokeDasharray: "2,2" },
                    };
                  });
              }

              return (
                <ArcherElement key={el.id} id={el.id} relations={relations}>
                  <div
                    className="w-fit"
                    onClick={() => {
                      const mappedData = el.data.map((subCat) => {
                        return {
                          ...subCat,
                          parentId: el.id,
                        };
                      });
                      handleCatClick(el.id, mappedData);
                    }}
                  >
                    <Category name={el.label} />
                  </div>
                </ArcherElement>
              );
            })}
          </div>

          <div className="flex justify-center items-center flex-col gap-3 h-full px-8 py-4 ">
            {subCat.map((el) => {
              const relations = el.data.map((asset) => {
                return {
                  targetId: asset?.id,
                  targetAnchor: "left",
                  sourceAnchor: "right",
                  style: { strokeDasharray: "2,2" },
                };
              });

              return (
                <ArcherElement
                  key={el.id}
                  id={el.id}
                  relations={activeId.subcatId ? relations : undefined}
                >
                  <div
                    className="w-fit"
                    onClick={() => {
                      const mappedData = el.data.map((subCat) => {
                        return {
                          ...subCat,
                          parentId: el.id,
                        };
                      });
                      handleSubcatClick(el.id, mappedData);
                    }}
                  >
                    <Category name={el.label} />
                  </div>
                </ArcherElement>
              );
            })}
          </div>

          <div className="flex flex-col justify-center items-center gap-3 h-full px-8 py-4  ">
            {assetList.map((el) => {
              return (
                <ArcherElement key={el.id} id={el.id}>
                  <div className="w-fit">
                    <Category name={el.label} />
                  </div>
                </ArcherElement>
              );
            })}
          </div>
        </div>
      </ArcherContainer>
    </div>
  );
};

export default LinesConnect;
