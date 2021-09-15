import PropTypes from "prop-types";

function Filter({ filter, onChange }) {
  return (
    <>
      <p>Find Contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      ></input>
    </>
  );
}

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;
