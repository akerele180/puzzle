/* eslint-disable react/prop-types */

const SolidButton = (props) => {
  return (
    <button
      type={props.type}
      className={`text-white font-semibold w-1/3 md:w-2/6 hover:shadow-lg py-2 px-3 rounded flex items-center justify-center text-xs sm:text-base bg-${props.color}`}
      disabled={props.loadingState}
    >
      {props.buttonName}
    </button>
  );
};

const LinkAsButton = (props) => {
  return <div></div>;
};

const OutlineButton = (props) => {
  return (
    <button
      type={props.type}
      className="{`bg-[#6366F1] text-white font-semibold w-1/3 md:w-2/6 hover:shadow-lg py-2 px-3 rounded flex items-center justify-center text-xs sm:text-base`}"
      disabled={props.loadingState}
    >
      {props.buttonName}
    </button>
  );
};

export { OutlineButton, LinkAsButton };
export default SolidButton;
