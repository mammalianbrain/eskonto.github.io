this["JST"] = this["JST"] || {};

this["JST"][["accept_escrow.hbs"]] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<h4>Enter into Escrow agreement with "
    + escapeExpression(((stack1 = ((stack1 = depth0.user),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " for ";
  if (stack2 = helpers.amount) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.amount; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " BTC</h4>\n\n<a href=\"#\" id=\"accept\" class=\"js btn btn-primary\">Accept</a>";
  return buffer;
  });

this["JST"][["create_escrow.hbs"]] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form id=\"create\" class=\"form-horizontal\">\n  <fieldset>\n    <legend>Create a new Escrow</legend>\n\n    <div class=\"control-group\">\n      <div class=\"controls\">\n        <p>I would like to:</p>\n        <label for=\"payer\">\n          <input type=\"radio\" id=\"payer\" class=\"radio inline\" name=\"escrow[role]\" value=\"payer\" /> Send\n        </label>\n\n        <label for=\"payee\">\n          <input type=\"radio\" id=\"payee\" class=\"radio inline\" name=\"escrow[role]\" value=\"payee\" /> Receive\n        </label>\n      </div>\n    </div>\n\n    <div class=\"control-group\">\n      <label for=\"description\" class=\"control-label\">Description</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"description\" name=\"escrow[description]\" />\n      </div>\n    </div>\n\n    <div class=\"control-group\">\n      <label for=\"amount\" class=\"control-label\">Amount</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"amount\" name=\"escrow[amount]\" />\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Create\" />\n    <img src=\"dist/img/spinner.gif\" id=\"spinner\" />\n  </div>\n</form>\n\n<div id=\"escrow-modal\" class=\"modal hide fade\" data-backdrop=\"static\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h3>Confirm Email Sent</h3>\n  </div>\n  <div class=\"modal-body\">\n    <h5>Please send the following text to the person you wish join you in this escrow agreement</h5>\n\n    <div class=\"alert alert-warning\">\n      <strong>Make a note of the payment verification code as you will need this to collect the funds</strong>\n    </div>\n\n    <textarea class=\"input-xxlarge\" rows=\"14\" id=\"escrow-email\"></textarea>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"/escrows\" class=\"btn btn-primary\">Confirm</a>\n  </div>\n</div>";
  });

this["JST"][["escrow.hbs"]] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <h4>Escrow Address: ";
  if (stack1 = helpers.address) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.address; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h4>\n      ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, depth0.is_payer, {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <h4>Escrow with: "
    + escapeExpression(((stack1 = ((stack1 = depth0.payee),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <h4>Escrow with: "
    + escapeExpression(((stack1 = ((stack1 = depth0.payer),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h4>\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers.unless.call(depth0, depth0.is_originator, {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p>Please verify the escrow with the code you were emailed.</p>\n          <p><a href=\"/escrows/";
  if (stack1 = helpers.uuid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.uuid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/verify\" class=\"btn btn-primary\">Verify</a></p>\n        ";
  return buffer;
  }

function program11(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, depth0.is_payer, {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, depth0.is_payee, {hash:{},inverse:self.noop,fn:self.program(14, program14, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <div class=\"alert alert-error\">\n            <strong>Please verify the balance matches the funds you expect</strong>\n          </div>\n          <a href=\"/escrows/";
  if (stack1 = helpers.uuid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.uuid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/release\" id=\"release\" class=\"btn btn-primary\">Release Funds</a>\n        ";
  return buffer;
  }

function program14(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <div class=\"alert\">\n            <strong>Waiting for payment from: "
    + escapeExpression(((stack1 = ((stack1 = depth0.payer),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</strong>\n          </div>\n        ";
  return buffer;
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  stack1 = helpers['if'].call(depth0, depth0.is_payer, {hash:{},inverse:self.noop,fn:self.program(17, program17, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        ";
  stack1 = helpers['if'].call(depth0, depth0.is_payee, {hash:{},inverse:self.noop,fn:self.program(19, program19, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program17(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <p>The funds have now been made available to "
    + escapeExpression(((stack1 = ((stack1 = depth0.payee),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n        ";
  return buffer;
  }

function program19(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <a href=\"/escrows/";
  if (stack1 = helpers.uuid) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.uuid; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/redeem\" class=\"btn btn-primary\">Redeem Funds</a>\n        ";
  return buffer;
  }

function program21(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n      <div class=\"span3\">\n        <div class=\"well\">\n          <h4>Balance</h4>\n          <h4>";
  if (stack1 = helpers.balance) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.balance; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " BTC</h4>\n        </div>\n      </div>\n    ";
  return buffer;
  }

  buffer += "<div class=\"container-fluid\">\n  <div class=\"row-fluid\">\n    <div class=\"span9\">\n      <p><a href=\"/escrows\" class=\"btn\">Back to My Escrows</a></p>\n\n      <h2>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n\n      ";
  stack1 = helpers['if'].call(depth0, depth0.address, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      \n      ";
  stack1 = helpers['if'].call(depth0, depth0.accepted, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers['if'].call(depth0, depth0.verify, {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n      ";
  stack1 = helpers['if'].call(depth0, depth0.accepted, {hash:{},inverse:self.noop,fn:self.program(11, program11, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      \n      ";
  stack1 = helpers['if'].call(depth0, depth0.released, {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </div>\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.address, {hash:{},inverse:self.noop,fn:self.program(21, program21, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </div>\n</div>";
  return buffer;
  });

this["JST"][["escrows.hbs"]] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2, options;
  buffer += "\n      <tr>\n        <td>\n          ";
  options = {hash:{
    'format': ("DD/MM/YY hh:mm")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.dateFormat),stack1 ? stack1.call(depth0, depth0.created_at, options) : helperMissing.call(depth0, "dateFormat", depth0.created_at, options)))
    + "\n        </td>\n        <td>\n          <a href=\"/escrows/";
  if (stack2 = helpers.uuid) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.uuid; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">";
  if (stack2 = helpers.description) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.description; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</a>\n        </td>\n        <td>\n          ";
  if (stack2 = helpers.amount) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.amount; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " BTC\n        </td>\n        <td>\n          ";
  if (stack2 = helpers.address) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.address; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n        </td>\n        <td>\n          ";
  stack2 = helpers['if'].call(depth0, depth0.is_payer, {hash:{},inverse:self.program(4, program4, data),fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </td>\n        <td>\n          ";
  if (stack2 = helpers.status) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.status; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\n        </td>\n      </tr>\n    ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            "
    + escapeExpression(((stack1 = ((stack1 = depth0.payee),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n          ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            "
    + escapeExpression(((stack1 = ((stack1 = depth0.payer),stack1 == null || stack1 === false ? stack1 : stack1.email)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n          ";
  return buffer;
  }

  buffer += "<a class=\"btn btn-primary\" href=\"/escrows/new\">New Escrow</a>\n\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th>Created</th>\n      <th>Description</th>\n      <th>Amount</th>\n      <th>Address</th>\n      <th>With</th>\n      <th>Status</th>\n  </thead>\n  <tbody>\n    ";
  stack1 = helpers.each.call(depth0, depth0.escrows, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </tbody>\n</table>";
  return buffer;
  });

this["JST"][["login.hbs"]] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form class=\"form-horizontal\">\n  <fieldset>\n  <div class=\"control-group\">\n    <label for=\"user_email\" class=\"control-label\">Email</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"user_email\" name=\"user[email]\" />\n    </div>\n  </div>\n\n  <div class=\"control-group\">\n    <label for=\"user_password\" class=\"control-label\">Password</label>\n    <div class=\"controls\">\n      <input type=\"password\" id=\"user_password\" name=\"user[password]\" />\n    </div>\n  </div>  \n\n  <div class=\"form-actions\">\n    <input name=\"commit\" class=\"btn btn-primary\" type=\"submit\" value=\"Sign in\" />\n    <img src=\"dist/img/spinner.gif\" id=\"spinner\" />\n  </div>\n</form>";
  });

this["JST"][["redeem_escrow.hbs"]] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form id=\"redeem\" class=\"form-horizontal\">\n  <fieldset>\n    <legend>Please enter your payment invitation to extract the private key</legend>\n\n    <div class=\"control-group\">\n      <label class=\"control-label\">Invite Code</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"einvp\" name=\"escrow[einvp]\" class=\"input-xxlarge\" />\n      </div>\n    </div>\n  </fieldset>\n\n  <fieldset>\n    <div class=\"control-group\">\n      <label class=\"control-label\">Address</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"redeem-address\" name=\"escrow[redeem-address]\" class=\"input-xxlarge\" />\n      </div>\n    </div>\n\n    <div class=\"control-group\">\n      <label class=\"control-label\">Private Key</label>\n\n      <div class=\"controls\">\n        <input type=\"text\" id=\"redeem-wif\" name=\"escrow[redeem-wif]\" class=\"input-xxlarge\" />\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Redeem\" />\n    <a href=\"/escrows\" class=\"btn\">Back</a>\n  </div>\n</form>";
  });

this["JST"][["sign_up.hbs"]] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form class=\"form-horizontal\">\n  <fieldset>\n  <div class=\"control-group\">\n    <label for=\"user_email\" class=\"control-label\">Email</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"user_email\" name=\"user[email]\" />\n    </div>\n  </div>\n\n  <div class=\"control-group\">\n    <label for=\"user_password\" class=\"control-label\">Password</label>\n    <div class=\"controls\">\n      <input type=\"password\" id=\"user_password\" name=\"user[password]\" />\n    </div>\n  </div>\n\n  <div class=\"control-group\">\n    <label for=\"user_password_confirmation\" class=\"control-label\">Password Confirmation</label>\n    <div class=\"controls\">\n      <input type=\"password\" id=\"user_password_confirmation\" name=\"user[password_confirmation]\" />\n    </div>\n  </div>  \n\n  <div class=\"form-actions\">\n    <input name=\"commit\" class=\"btn btn-primary\" type=\"submit\" value=\"Sign up\" />\n    <img src=\"dist/img/spinner.gif\" id=\"spinner\" />\n  </div>\n</form>";
  });

this["JST"][["verify_escrow.hbs"]] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [3,'>= 1.0.0-rc.4'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "payee";
  }

function program3(depth0,data) {
  
  
  return "payer";
  }

  buffer += "<h4>Enter your Payment Invitation to verify the Escrow</h4>\n\n<form id=\"verify\" class=\"form-horizontal\" data-role=\"";
  stack1 = helpers['if'].call(depth0, depth0.is_payee, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\">\n  <fieldset>\n    <div class=\"control-group\">\n      <label class=\"control-label\">Payment Invitation</label>\n      <div class=\"controls\">\n        <input type=\"text\" id=\"verify-code2\" class=\"input-xlarge\" />\n      </div>\n    </div>\n  </fieldset>\n\n  <div class=\"form-actions\">\n    <input type=\"submit\" class=\"btn btn-primary\" value=\"Verify\">\n  </div>\n</form>\n\n<div id=\"verify-modal\" class=\"modal hide fade\" data-backdrop=\"static\">\n  <div class=\"modal-header\">\n    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n    <h3>Verification Result</h3>\n  </div>\n  <div class=\"modal-body\">\n    <p id=\"verification\"> ... not yet verified ... </p>\n  </div>\n  <div class=\"modal-footer\">\n    <a href=\"javascript:void(0)\" class=\"btn btn-primary\">Close</a>\n  </div>\n</div>";
  return buffer;
  });