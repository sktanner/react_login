
function Signup({setPassword, setUsername, toggle, submitForm}){
    return (
        <form>
        <h1>Signup</h1>
        <label>Username: </label>
        <input onChange={(e)=>{setUsername(e.target.value)}}></input>
        <br />
        <label>Password: </label>
        <input onChange={(e)=>{setPassword(e.target.value)}}></input>
        <label>Confirm: </label>
        <input></input>
        <a onClick={toggle}>Already have an account?</a>
        <button>Signup</button>
      </form>
    )
}

export default Signup