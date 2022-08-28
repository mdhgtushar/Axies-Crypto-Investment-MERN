import React from 'react'
export default function ApiAccess() {
    return (
        <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="page-title-box">
                    <h4 class="page-title">API Access</h4>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8">
                <div class="card">
                    <div class="card-body">
                        <label>API Url</label>
                        <div class="row">
                            <div class="col-lg-12">
                                <input type="text" readonly class="form-control" value="http://minacriss.org"/>
                            </div>
                        </div>
                        <label>Username</label>
                        <div class="row">
                            <div class="col-lg-12">
                                <input type="text" readonly class="form-control" value="asdfqwerasdf"/>
                            </div>
                        </div>
                        <label>Api Key</label>
                        <div class="row">
                            <div class="col-lg-10">
                                <input type="text" readonly class="form-control" value="XK30FF0-HP96QM4-AT99LA4-SURLNQE"/>
                            </div>
                            <div class="col-lg-2">
                                <a href="https://minacriss.org/user/generatoruserapi" class="btn btn-success">Regenerate</a>
                            </div>
                        </div>
                        <hr/>
                        <label>Allowed Ips</label>
                        <div class="row">
                            <div class="col-lg-12">
                            <form method="post" action="https://minacriss.org/user/apiallow_ip">
                                <input type="hidden" name="_token" value="nK2Wj2tL72TiGsKqUcEFDY5NZle6pN6Jf2rhyQF6"/>                      
                                          <div class="form-group mb-3">
                                <textarea class="form-control" name="allow_ip"
                                          rows="5"></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
