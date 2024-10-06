/* eslint-disable react/prop-types */

const Category = ({ name = "" }) => {
  return (
    <button className="bg-white text-black h-[60px] w-[150px] border border-gray-400 rounded-md">
      {name}
    </button>
  );
};

export default Category;
