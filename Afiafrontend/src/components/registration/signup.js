import Form from 'react-bootstrap/form'

const register = ()=> {
    return (
        <div className='container'>

          <form className="register">

             <h3>Register</h3>

             <div className="form-group">
                <label>First name</label>
                <input type="text" aria-required className="form-control" placeholder="First name..."></input>
             </div>

             <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name..."></input>
             </div>

             <div className="form-group">
                <label>Email</label>
                <input type="email" aria-required className="form-control" placeholder="e.g yourname@gmail.com "></input>
             </div>

             <div className="form-group">
                <label>Phone/mobile number</label>
                <input type="number" aria-required className="form-control" placeholder="e.g +234-12222222 "></input>
             </div>

             <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="First name..."></input>
             </div>

             <button type="submit" className="btn btn-yellow btn-lg btn-block">Register</button>
             <p className="forgot-password text-right">
                 Already registered? Visit the <a href="#">Login</a> page 
             </p>
          </form>
            
        </div>
    )
}

export default register
