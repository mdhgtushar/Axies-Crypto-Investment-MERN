import React from "react";
import Main from "../layout/Main";

const Profile = () => {
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
              <div class="col-md-8">
                <div class="card">
                  <div class="card-body">
                    <div class="mb-2 text-center">
                      <img
                        src="/static/core/no-user.png"
                        class="rounded-circle"
                      />
                    </div>
                    <hr />

                    <form method="post" enctype="multipart/form-data">
                      <div id="div_id_profile_image" class="form-group">
                        {" "}
                        <label for="id_profile_image" class="">
                          Profile image
                        </label>{" "}
                        <div class="">
                          {" "}
                          <input
                            type="file"
                            name="profile_image"
                            accept="image/*"
                            class="clearablefileinput form-control-file"
                            id="id_profile_image"
                          />{" "}
                          <small
                            id="hint_id_profile_image"
                            class="form-text text-muted"
                          >
                            size of logo must be 100*100 and format must be png
                            image file
                          </small>{" "}
                        </div>{" "}
                      </div>{" "}
                      <div id="div_id_first_name" class="form-group">
                        {" "}
                        <label for="id_first_name" class="">
                          First name
                        </label>{" "}
                        <div class="">
                          {" "}
                          <input
                            type="text"
                            name="first_name"
                            value="Md Hg"
                            maxlength="150"
                            class="textinput textInput form-control"
                            id="id_first_name"
                          />{" "}
                        </div>{" "}
                      </div>{" "}
                      <div id="div_id_last_name" class="form-group">
                        {" "}
                        <label for="id_last_name" class="">
                          Last name
                        </label>{" "}
                        <div class="">
                          {" "}
                          <input
                            type="text"
                            name="last_name"
                            value="Tushar"
                            maxlength="150"
                            class="textinput textInput form-control"
                            id="id_last_name"
                          />{" "}
                        </div>{" "}
                      </div>{" "}
                      <div id="div_id_phone_number" class="form-group">
                        {" "}
                        <label for="id_phone_number" class="">
                          Phone number
                        </label>{" "}
                        <div class="">
                          {" "}
                          <input
                            type="text"
                            name="phone_number"
                            maxlength="30"
                            class="textinput textInput form-control"
                            id="id_phone_number"
                          />{" "}
                        </div>{" "}
                      </div>
                      <button type="submit" class="btn btn-primary">
                        <i class="fa fa-check"></i> Submit
                      </button>
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

export default Profile;
