import React from "react";

const Form = () => {
  return (
    <>
      <div className="container my-5">
        <form>
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-md-5">
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-5">
              <input type="text" className="form-control" />
            </div>

            <div className="col-md-2 ">
              <input type="submit" className="form-control btn btn-primary" value="Add" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Form;
