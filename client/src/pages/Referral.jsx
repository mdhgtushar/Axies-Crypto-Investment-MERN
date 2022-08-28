import React from "react";
import Main from "../layout/Main";

const Referral = () => {
  return (
    <Main>
      <div class="container-fluid mt-5">
        <div class="row">
          <div></div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="page-title-box d-flex align-items-center justify-content-between">
              <h4 class="mb-0 font-size-18"></h4>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="row justify-content-center">
              <div class="col-sm-4">
                <div class="card">
                  <div class="card-body border-bottom">
                    <p class="card-title mb-0">
                      <b>Referral Setting</b>
                    </p>
                  </div>
                  <div class="card-body">
                    <form method="post">
                      <p>
                        Please make sure to follow the proper instructions, here
                        are some of the steps to follow.
                      </p>
                      <ul>
                        <li>
                          You can't refer <code>yourself</code> or a person who
                          was registered after you.
                        </li>
                        <li>
                          Once you have added your <code>referer</code>, its
                          permanent it can't be changed.
                        </li>
                        <li>
                          Get referral code from the <code>user</code> who
                          referred you.
                        </li>
                        <li>
                          Paste the <code>code</code> below and submit.
                        </li>
                      </ul>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        class="form-control form-control-lg"
                        placeholder="referral code"
                      />
                      <button class="btn btn-lg btn-success mt-3">
                        <i class="fa fa-check"></i> submit
                      </button>
                    </form>
                  </div>
                </div>

                <p>
                  Share <code>Future Invest Pro </code>
                  with your friends and family, On each purchase you will get
                  <b>
                    <code>10%</code>
                  </b>{" "}
                  commission, don't forget Your referral code is
                  <b class="text-danger">"md_hg"</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Referral;
