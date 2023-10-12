import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState(store.upDateContactInfo.full_name);
  const [email, setEmail] = useState(store.upDateContactInfo.email);
  const [phone, setPhone] = useState(store.upDateContactInfo.phone);
  const [address, setAddress] = useState(store.upDateContactInfo.address);
  return (
    <div className="container">
      <div>
        <h1 className="text-center mt-5">Add contact</h1>
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="phone"
              className="form-control"
              placeholder="Phone"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              className="form-control"
              placeholder="Address"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            />
          </div>

          <button
            onClick={() => {
              if (store.upOrDelete == "create") {
                actions.newContact(name, email, address, phone);
                actions.getContacts();
              } else if (store.upOrDelete == "update") {
                actions.upDateContactInfo(
                  name,
                  email,
                  address,
                  phone,
                  store.upDateContactInfo.id
                );
                actions.getContacts();
              }
            }}
            type="button"
            className="btn btn-primary form-control"
          >
            Save Contact
          </button>
          <Link className="mt-3 w-100 text-center" to="/">
            Back to your agenda
          </Link>
        </form>
      </div>
    </div>
  );
};
