
import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
  
export default function LoginData() {
  const [open, setOpen] = React.useState(false);
  
  const handleClickToOpen = () => {
    setOpen(true);
  };
  
  const handleToClose = () => {
    setOpen(false);
  };
  
  return (
    <div stlye={{}}>
       <div className="container my-4 text-center">
        <h4 >For Login Please Enter your email Below</h4>
      <Button variant="outlined" color="primary" 
              onClick={handleClickToOpen} className="my-4">
       hey User Login Here!
      </Button>
      <Dialog open={open} onClose={handleToClose} className="w-100 p-3 " style={{height:'600px', width:'100%'}}>
        <DialogTitle  className="text-center my-4">{"How are you?"}</DialogTitle>
        <DialogContent >
          <DialogContentText> 
  <div className="input-group my-4" >
    <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
    <input id="email" type="text" className="form-control" name="email" placeholder="Email" />
  </div>
  <div className="input-group my-2">
    <span className="input-group-addon"><i className="glyphicon glyphicon-lock "></i></span>
    <input id="password" type="password" className="form-control" name="password" placeholder="Password" style={{ height: '50px',width: '400px'}}   />
  </div>
          <button className="btn btn-primary my-4">Login</button>
          <a href="/" className="mx-2">forget passWord</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleToClose} 
                  color="primary" autoFocus className="my-4 mx-16">
            Back to Page
          </Button>
        </DialogActions>
      </Dialog>
      </div>
        </div>
     
  
  );
}