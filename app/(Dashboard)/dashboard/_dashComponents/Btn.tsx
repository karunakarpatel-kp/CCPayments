import React from "react";

interface BtnProps {
  active: boolean;
  title: string;
  iconName: any;
  incomingBtnClickHandler: (a: string) => any;
}

const Btn = (props: BtnProps) => {
  const { title, active, iconName, incomingBtnClickHandler } = props;

  const onBtnClickHandler = (incomingTitle: string) => {
    incomingBtnClickHandler(incomingTitle);
  };

  return (
    <>
      <button
        onClick={() => onBtnClickHandler(title)}
        type="button"
        className={
          `p-3  text-lg font-semibold w-11/12 rounded-sm hover:bg-brandColor ` +
          `${
            active
              ? "bg-brandColor text-white hover:bg-slate-100 hover:text-brandColor"
              : " text-brandColor bg-slate-200 hover:text-white"
          }`
        }
      >
        <span className="grid grid-cols-12 border-0 border-red-500 ">
          <span className="mr-8 col-span-4 border-0 flex justify-end text-right align-middle">
            {/* <FaHome fontSize={28} className={`${active} ? 'text-white' : 'text-black'`} /> */}
            {iconName}
          </span>
          <span className="col-span-8 border-0 border-green-800 flex justify-start align-middle">{title}</span>
        </span>
      </button>
    </>
  );
};

export default Btn;
