import PropTypes from "prop-types";
import CategoryCard from "./CategoryCard";
const JobsCategory = ({ categoriesData }) => {
  // console.log(categoriesData);
  // console.log(typeof categoriesData);

  return (
    <div className="mb-12">
      <h1 className="text-5xl font-bold text-center mb-5">Jobs Category</h1>
      <p className="text-base font-medium text-center opacity-70 mb-5">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {categoriesData.map((categoryItem) => (
          <CategoryCard
            key={categoryItem.id}
            categoryItem={categoryItem}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

JobsCategory.propTypes = {
  categoriesData: PropTypes.array.isRequired,
};

export default JobsCategory;
