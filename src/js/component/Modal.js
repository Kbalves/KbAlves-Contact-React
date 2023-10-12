import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useActionData, withRouter } from "react-router-dom";
import PropTypes from "prop-types";

export const Modal = (props) => {
  const { store, actions } = useContext(Context);
  const [state, setState] = useState({});
  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      style={{ display: props.show ? "inline-block" : "none" }}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Are you sure?</h5>
            {props.onClose ? (
              <button
                onClick={() => props.onClose()}
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            ) : (
              ""
            )}
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this contact??</p>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => props.onClose()}
              type="button"
              className="btn btn-primary"
            >
              Cancel!
            </button>
            <button
              onClick={() => {
                actions.deleteContact(props.id);
                props.onClose();
              }}
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Delete!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  history: PropTypes.object,
  onClose: PropTypes.func,
  show: PropTypes.bool,
};

Modal.defaultProps = {
  show: false,
  onClose: null,
};
