const Form = () => (
    <form className="p-2 m-3 ">
        <div className="input-group">
        <span className="input-group-text">https://www.swapi.tech/api/</span>
        <input type="text" className="form-control" placeholder="people/1" />
        <button type="submit" className="btn btn-primary">Get info</button>
        </div>
    </form>
)
 export default Form;