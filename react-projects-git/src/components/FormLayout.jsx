import { useState } from "react";
function FormLayout(props) {

  const [name, setName] = useState("");

  const [lname, setLName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [cpassword, setCPassword] = useState("");

  const [phone, setPhone] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();

    console.log(

      `Name: ${name}\nLast Name:${lname}\nEmail: ${email}\nphone: ${phone}\nPassword: ${password}\nConfirm Password: ${cpassword}`

    );

  };
  return (
    <div className="container text-white font-weight-bold">
      <form onSubmit={submitHandler}>
        <h2 className="text-center text-white">REGISTER</h2>
        <div className="form-group row">
          <div className="col-md-6 p-0">
            <label for="fname">{props.fname}</label>
            <input type="text" id="fname" name="firstname" value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          <div className="col-md-6 pr-0">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname"
              value={lname} onChange={(e) => setLName(e.target.value)}
            />
          </div>

        </div>
        <div className="form-group row">
          <label for="email">Email</label>
          <input type="text" id="email" name="email"
            value={email} onChange={(e) => setEmail(e.target.value)} />
          <label for="phone">Phone Number</label>
          <input type="text" id="phone" name="phone"
            value={phone} onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group row">
          <label for="pwd">Password</label>
          <input type="text" id="pwd" name="pwd"
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group row">
          <label for="cpwd">Confirm Password</label>
          <input type="text" id="cpwd" name="cpwd"
            value={cpassword} onChange={(e) => setCPassword(e.target.value)}
          />
        </div>

        <div className="center">
          <input type="submit" value="REGISTER NOW" />
        </div>
      </form>
    </div>

  )

}

export default FormLayout;