import axios from "axios";
import React, { useEffect, useState } from "react";
import Main from "../layout/Main";
export default function Dashboard() {
  const [data, setData] = useState([]);

  const getDashboard = async () => {
    setTimeout(async () => {
      const receiveData = await axios.get(
        "http://localhost:5000/api/user/dashboard"
      );
      if (receiveData) {
        setData(receiveData.data);
        console.log(receiveData, "dataget");
      }
    }, 1000);
  };
  useEffect(() => {
    getDashboard();
  }, []);
  return (
    <Main>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box">
              <h4 className="page-title">Dashboard</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card widget-inline">
              <div className="card-body p-0">
                <div className="row no-gutters">
                  <div className="col-sm-6 col-xl-4">
                    <div className="card shadow-none m-0">
                      <div className="card-body text-center">
                        <h3>
                          <span>
                            {data.avilable_balance ? (
                              data?.avilable_balance + " $ "
                            ) : (
                              <div
                                className="spinner-grow spinner-grow-sm"
                                role="status"
                              ></div>
                            )}
                          </span>
                        </h3>

                        <p className="text-muted font-15 mb-0">
                          Available Balance
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-xl-4">
                    <div className="card shadow-none m-0 border-left">
                      <div className="card-body text-center">
                        <h3>
                          <span>
                            {data.total_deposits ? (
                              data?.total_deposits + " $ "
                            ) : (
                              <div
                                className="spinner-grow spinner-grow-sm"
                                role="status"
                              ></div>
                            )}
                          </span>
                        </h3>
                        <p className="text-muted font-15 mb-0">
                          Total Deposits
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-sm-6 col-xl-4">
                    <div className="card shadow-none m-0 border-left">
                      <div className="card-body text-center">
                        <h3>
                          <span>
                            {data.total_withdrows ? (
                              data?.total_withdrows + " $ "
                            ) : (
                              <div
                                className="spinner-grow spinner-grow-sm"
                                role="status"
                              ></div>
                            )}
                          </span>
                        </h3>
                        <p className="text-muted font-15 mb-0">
                          Total withdraws
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8">
            <div className="card border border-danger text-danger">
              <div className="card-body">
                <p className="text-center">
                  <iframe
                    src="https://embed.lottiefiles.com/animation/108032"
                    className="border-0"
                  ></iframe>
                  <br />
                  <b>
                    You don't have any active subscriptions yet, Kindly purchase
                    a new subscription to generate profits
                    <a href="/customer/subscription/add/">
                      <i href="fa fa-coins"></i> Here
                    </a>
                    .
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card">
              <div className="card-body">
                <h4 className="header-title mb-4">THIS MONTH</h4>

                <div className="row text-center mt-2 py-2">
                  <div className="col-3">
                    <h3 className="font-weight-normal">
                      <span>0</span>
                    </h3>
                    <p className="text-muted mb-0">Pending</p>
                  </div>
                  <div className="col-3">
                    <h3 className="font-weight-normal">
                      <span>0</span>
                    </h3>
                    <p className="text-muted mb-0"> In-progress</p>
                  </div>
                  <div className="col-3">
                    <h3 className="font-weight-normal">
                      <span>0</span>
                    </h3>
                    <p className="text-muted mb-0"> Completed</p>
                  </div>
                  <div className="col-3">
                    <h3 className="font-weight-normal">
                      <span>0</span>
                    </h3>
                    <p className="text-muted mb-0"> Rejected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}
