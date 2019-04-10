import React from "react";

const DownIcon = props => {
  return (
    <div
      onClick={props.onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBattom: "-34px",
        transform: "translateY(-45px)"
      }}
    >
      <div>
        <img src={props.icon} style={{maxWidth: 30}} alt="#"/>
      </div>
    </div>
  );
};

export default DownIcon;
