import React from "react";

const EmployeeItem: React.FC<{
  classNameRow: string;
  classNameCol: string;
  employeeData: {
    id: number;
    name: string;
    email: string;
    phone: string;
    skype: string;
    active: boolean;
    storeId: number;
    managerId: number;
  };
}> = (props) => {
  return (
    <div className={props.classNameRow}>
      <div className={props.classNameCol}>{props.employeeData.id}</div>
      <div className={props.classNameCol}>{props.employeeData.name}</div>
      <div className={props.classNameCol}>{props.employeeData.email}</div>
      <div className={props.classNameCol}>{props.employeeData.phone}</div>
      <div className={props.classNameCol}>{props.employeeData.skype}</div>
      <div className={props.classNameCol}>{props.employeeData.active}</div>
      <div className={props.classNameCol}>{props.employeeData.storeId}</div>
      <div className={props.classNameCol}>{props.employeeData.managerId}</div>
    </div>
  );
};

export default EmployeeItem;
