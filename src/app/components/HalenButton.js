const HalenButton = (props) => {
  return (
    <button
      type="button"
      className="halen-btn px-3 py-2 uppercase text-md font-medium text-center text-white rounded-sm focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      {props.label}
    </button>
  );
};

export default HalenButton;
