/* eslint-disable react/prop-types */
const InputField = (props) => {
  return (
    <>
      <label
        htmlFor={props.htmlFor}
        className={`dark:text-white text-sm font-semibold leading-loose mb-1 block`}
      >
        {props.labelName}
      </label>
      <input
        type={props.inputType}
        className={`border border-grey px-4 py-2 rounded block w-full focus:border-${props.color} placeholder:italic placeholder:text-xs sm:placeholder:text-base text-xs sm:text-base`}
        placeholder={props.placeholder}
      />
    </>
  );
}

export default InputField;