import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={`/admin`} component={AdminLayout} />

      {/* Cambia la redirección para que el perfil sea la página principal */}
      <Redirect from={`/`} to="admin/inicio" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
