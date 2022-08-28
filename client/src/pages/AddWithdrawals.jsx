import React from "react";
import axios from "axios";
import Main from "../layout/Main";

const AddWithdrawals = () => {
  const addDepo = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const ammount = e.target.ammount.value;
    const wallet_adress = e.target.wallet_adress.value;
    const depoObj = { ammount, wallet_adress };

    const getdata = await axios.post(
      "http://localhost:5000/api/user/widthdrows/add",
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
              <h4 class="page-title">Widthdrawal Request</h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="col-sm-5">
                <div class="card">
                  <div class="card-body border-bottom">
                    <p class="card-title mb-0">
                      <b>Request for Withdrawal</b>
                    </p>
                    <p class="mb-0 card-title-desc">
                      Fill the details below and wait for <code>24 hours</code>{" "}
                      to get withdrawal
                      <code>approval</code> from <code>administration</code>.
                    </p>
                  </div>
                  <div class="card-body">
                    <form method="post" onSubmit={addDepo}>
                      <div class="mb-2">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          name="ammount"
                          id="ammount"
                          placeholder="Enter Amount to Withdraw"
                        />
                      </div>
                      <div class="mb-4">
                        <input
                          type="text"
                          class="form-control form-control-lg"
                          name="wallet_adress"
                          id="wallet_adress"
                          placeholder="Enter your wallet address"
                        />
                      </div>
                      <div>
                        <button type="submit" class="btn btn-lg btn-primary">
                          <i class="fa fa-check-circle"></i> Submit
                        </button>
                      </div>
                    </form>
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

export default AddWithdrawals;
