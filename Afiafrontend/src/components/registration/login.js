import form from 'react-bootstrap/form'

const login = () => {

    return(
      
      <div className="container">

      <form className="register">

             <h3>Login</h3>

             <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="your username..."></input>
             </div>

             <div className="form-group">
                <label>Email</label>
                <input type="email" aria-required className="form-control" placeholder="e.g yourname@gmail.com "></input>
             </div>

             <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Input password..."></input>
             </div>

             <button type="submit" className="btn btn-yellow btn-lg btn-block">Register</button>
             <p className="forgot-password text-right">
                 Don't have account? Visit the <a href="#">Signup</a> page to creat one
             </p>
          </form>

      </div>

    	)

}
export default login