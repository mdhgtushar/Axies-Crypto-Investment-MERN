import React from "react";
import axios from "axios";
import Main from "../layout/Main";

const AddDeposit = () => {
  const addDepo = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const ammount = e.target.ammount.value;
    const trns_id = e.target.trns_id.value;
    const depoObj = { ammount, trns_id };

    const getdata = await axios.post(
      "http://localhost:5000/api/user/deposits/add",
      depoObj
    );
    if (getdata) {
      alert(getdata.data.message);
    }
  };
  return (
    <Main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="page-title-box">
              <h4 class="page-title">Dashboard</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="row">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body border-bottom">
                    <p class="card-title mb-0">
                      <b>New Subscription</b>
                    </p>
                  </div>
                  <div class="card-body">
                    <form method="post" id="form" onSubmit={addDepo}>
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="ammount"
                          id="ammount"
                          placeholder="Enter amount of TRONS"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          type="text"
                          class="form-control"
                          name="trns_id"
                          id="tx_id"
                          placeholder="Enter HashTX or TXID provided over transaction"
                        />
                      </div>
                      <div>
                        <button type="submit" class="btn btn-primary">
                          <i class="fa fa-check-circle"></i> Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div class="col-sm-8">
                <div class="card">
                  <div class="card-body border-bottom">
                    <p class="card-title mb-0">
                      <b>Trust Wallet</b>
                    </p>
                  </div>
                  <div class="card-body border-bottom">
                    <h5>Wallet Information</h5>
                    <p class="mb-0">
                      Please deliver your{" "}
                      <code>
                        <i class="fa fa-coins"></i> TRONS
                      </code>{" "}
                      on this address
                      <b class="text-warning">
                        <code>TFshVaGtgcFCmbTpUmGA9ebVXDWZbqFTCJ</code>
                      </b>
                    </p>
                  </div>
                  <div class="card-body">
                    <div>
                      <h1>Admin Wallet Address</h1>

                      <div>TFshVaGtgcFCmbTpUmGA9ebVXDWZbqFTCJ</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default AddDeposit;
