import React from "react";

export default function Button(props) {
  const { buttonText, alternateClass, customClick } = props;

  // Define a class string that includes the base button class and the alternate class if provided
  const buttonClass = `dark:bg-DarkBlue dark:text-white bg-VeryLightGray text-VeryDarkBlue md:px-12 py-2 text-center inline-block font-light ${alternateClass}`;

  return (
    <div>
      <button className={buttonClass} onClick={customClick}>
        {buttonText}
      </button>
    </div>
  );
}
