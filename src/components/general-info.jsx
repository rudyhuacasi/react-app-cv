import '../styles/general-info.css'

function generalInfo() {

  return (
    <>
    <form class="row g-3">
        <div class="form-floating mb-3">
            <input type="name" class="form-control" id="floatingPassword" placeholder="Password" required/>
            <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating mb-3">
            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
            <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
            <label for="floatingPassword">Password</label>
        </div>
        <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
        </div>
    </form>
    </>
  )
}
export default generalInfo