import React from "react";

function Alert({ type, title, content, show, onClose }) {
  let classes = "absolute invisible";  

  if(show) {
    switch (type) {
      case 'succes':
        classes = "transition-slow transition-timing-ease-out transition-property-all transition-delay-long mx-20px lg:mx-0 text-display mb-20px bg-green-2 border border-green-1 text-green-1 px-4 py-3 rounded relative opacity-100";
        break;
      case 'error':
        classes = "transition-slow transition-timing-ease-out transition-property-all transition-delay-long mx-20px lg:mx-0 text-display mb-20px bg-red-2 border border-red-1 text-red-1 px-4 py-3 rounded relative opacity-100";
        break;
      default:
        break;
    }

    return(
      <section id="alert" className={classes}
        role="alert">
        <strong className="font-bold">{title}&nbsp;</strong>
        <span className="block sm:inline">
          {content}
        </span>
        <span onClick={() => onClose() } className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg className="fill-current h-6 w-6" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
        </span>
      </section>
    )
  }

  return null;
}

export default Alert;