import PropTypes from "prop-types";
const CategoryCard = ({ categoryItem }) => {
  const { logo, category_name, availability } = categoryItem;
  return (
    <>
      <div className="card bg-primary text-primary-content h-48">
        <div className="card-body">
          <img className="w-10 h-10" src={logo}></img>
          <h2 className="card-title">{category_name}</h2>
          <p>{availability}</p>
        </div>
      </div>
    </>
  );
};
CategoryCard.propTypes = {
  categoryItem: PropTypes.object,
};

export default CategoryCard;
