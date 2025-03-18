import React from "react";

function MenuPanel() {
  return (
    <>
      <div
        className={`h-screen bg-slate-500 flexc flex-col !justify-start py-10 w-60`}
      >
        <h1 className={`font-bold`}>MenuPanel</h1>
        <div
          className={`flexc flex-col w-full !items-start px-5 text-white mt-5`}
        >
          <div className={`my-1`}>menu1</div>
          <div className={`my-1`}>menu2</div>
          <div className={`my-1`}>menu3</div>
          <div className={`my-1`}>menu4</div>
          <div className={`my-1`}>menu5</div>
        </div>
      </div>
    </>
  );
}

export default MenuPanel;
