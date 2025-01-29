import './page.css';

export default function Config() {
  return (
    <section className="configuration">
        <form className="configurar" method="POST" encType="multipart/form-data">
            <div className="option">
                <label htmlFor="avatar" className="avatar">Select new avatar</label>
                <input type="file" name="avatar" className="avatar" id="avatar" accept=".jpg, .gif" />
            </div>
            <div className="option">
                <label htmlFor="">First Name: </label>
                <input type="text" name="firstName" defaultValue="{{ userLogin.firstName }}" required/>
            </div>
            <div className="option">
                <label htmlFor="">Last Name: </label>
                <input type="text" name="lastName" defaultValue="{{ userLogin.lastName }}" required/>
            </div>
            <div className="option">
                <label htmlFor="">Country: </label>
                <select name="country" id="">
                    <option> country.name capfirst </option>
                    <option> country.name|capfirst </option>
                </select>
            </div>
            <div className="option">
                <label htmlFor="">Address: </label>
                <input type="text" name="address" defaultValue="{{ userLogin.address }}" required/>
            </div>
            <div className="option">
                <label htmlFor="">Phone: </label>
                <input type="text" name="phone" pattern="[0-9]*" defaultValue="123456789" required/>
            </div>
            <button type="submit" className="btn">Save</button>
        </form>
    </section>
  )
} 