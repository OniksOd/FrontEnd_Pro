import { useSelector, useDispatch } from "react-redux";
import { clearData } from "../redux/swapiSlice";

export default function Result() {
  const { data, loading, error } = useSelector((state) => state.swapi);
  const dispatch = useDispatch();
  const onClickHandler = () => dispatch(clearData());

  if (loading) return <p>Loading...</p>;
  if (error) return <p> {error}</p>;
  if (!data)
    return (
      <div style={{ minHeight: "400px", border: "1px solid #ddd" }}>
        Enter request and press Search
      </div>
    );

  return (
    <>
      <pre style={{ minHeight: "400px", border: "1px solid #ddd" }}>
        {JSON.stringify(data, null, 4)}
      </pre>
      <button onClick={onClickHandler}>Clear</button>
    </>
  );
}
