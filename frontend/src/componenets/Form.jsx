import React from "react";

function Form() {
  const labelStyle = {
    fontFamily: "Satoshi Variable",
    fontWeight: 700,
    fontSize: "20px",
  };
  const inputStyle = {
    width: "376px",
    height: "58px",
    transform: "rotate(0deg)",
    opacity: 1,
    borderRadius: "10px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "rgba(34, 34, 34, 1)",
  };
  const styleRange = {
  width: '183px',
  height: '58px',
  transform: 'rotate(0deg)',
  opacity: 1,
  borderRadius: '10px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgba(188, 188, 188, 1)',
};
const textAreaStyle = {
  width: '768px',
  height: '169px',
  transform: 'rotate(0deg)',
  opacity: 1,
  position: 'absolute',
  top: '475px',
  left: '40px',
  borderRadius: '10px',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'rgba(188, 188, 188, 1)',
};
const buttonStyle = {
  width: '232px',
  height: '59px',
  transform: 'rotate(0deg)',
  opacity: 1,
  position: 'absolute',
  top: '683px',
  left: '40px',
  borderRadius: '10px',
  gap: '10px',
  borderWidth: '1.5px',
  borderStyle: 'solid',
  borderColor: 'rgba(34, 34, 34, 1)',
  paddingTop: '16px',
  paddingRight: '60px',
  paddingBottom: '16px',
  paddingLeft: '60px',
  background: 'rgba(255, 255, 255, 1)',
  boxShadow: '0px 0px 4px 0px rgba(0, 0, 0, 0.25)',
};




  return (
    <div className="container">
      <h4
        className="text-center"
        style={{
          fontFamily: "Satoshi Variable",
          fontWeight: 700,
          fontSize: "24px",
        }}
      >
        Create job opening
      </h4>
      <form>
        <div className="row">
          <di className="col-6">
            <div className="mb-1">
              <label
                for="exampleInputEmail1"
                class="form-label"
                style={labelStyle}
              >
                Job Title
              </label>
              <input
                style={inputStyle}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
             <div className="mb-3">
              <label
                for="locationInput"
                class="form-label"
                style={labelStyle}
              >
                location
              </label>
              <input
                style={inputStyle}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="row">
                <div className="col-6">
                    <div class="mb-3">
                        <label
                        for="exampleInputEmail1"
                        class="form-label"
                        style={labelStyle}
                        >
                        Experience
                        </label>
                        <input
                        style={styleRange}
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        />
                    </div>
                </div>
                <div className="col-6">
                    <div class="ml-3 mb-3">
                        <label
                        for="exampleInputEmail1"
                        class="form-label"
                        style={labelStyle}
                        >
                        Location
                        </label>
                        <input
                        style={styleRange}
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        />
                    </div>
                </div>
            </div>
          </di>

          <div className="col-6">
            <div class="mb-3">
              <label
                for="exampleInputPassword1"
                class="form-label"
                style={labelStyle}
              >
                Password
              </label>
              <input
                style={inputStyle}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

             <div className="mb-1">
              <label
                for="exampleInputEmail1"
                class="form-label"
                style={labelStyle}
              >
                Job Title
              </label>
              <input
                style={inputStyle}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-1">
              <label
                for="exampleInputEmail1"
                class="form-label"
                style={labelStyle}
              >
                Job Title
              </label>
              <input
                style={inputStyle}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </div>
        <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" style={labelStyle}>Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={textAreaStyle}></textarea>
</div>

        <button type="submit" class="btn btn-primary" style={buttonStyle}>
          Save as Draft
        </button>

         <button type="submit" class="btn btn-primary" style={buttonStyle}>
          publish
        </button>
      </form>
    </div>
  );
}

export default Form;
