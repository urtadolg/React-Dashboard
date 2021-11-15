import React from "react";

import styles from "./NewEmployee.module.scss";
import BodyContainer from "../../components/ui/BodyContainer";
import Button from "../../components/ui/Button";

const NewEmployee = () => {
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <BodyContainer iconName="home" title="New Employee">
      <form className={styles.formContainer} onSubmit={onSubmitHandler}>
        <label htmlFor="fullName">Name:</label>
        <div className={styles.fullName}>
          <input type="text" id="firstName" placeholder="First Name" />
          <input type="text" id="LastName" placeholder="Last Name" />
        </div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="phone">Phone number:</label>
        <div className={styles.phoneNumber}>
          <input type="text" id="areaCode" placeholder="Area code" />
          <input type="text" id="phoneNumber" placeholder="Phone number" />
        </div>
        <label htmlFor="skype">Skype:</label>
        <input type="skype" id="skype" />
        <div className={styles.situationContainer}>
          <div>
            <label htmlFor="active">Situation:</label>
            <select id="active" name="active">
              <option value={undefined}></option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div>
            <label htmlFor="store">Store</label>
            <select id="store" name="store">
              <option value={undefined}></option>
              <option value={0}>Store 1</option>
              <option value={1}>Store 2</option>
              <option value={2}>Store 3</option>
            </select>
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <select id="role" name="role">
              <option value={undefined}></option>
              <option value={0}>Salesman</option>
              <option value={1}>Manager</option>
            </select>
          </div>
        </div>
        <div className={styles.btn}>
          <Button type="button">Cancel</Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </BodyContainer>
  );
};

export default NewEmployee;
