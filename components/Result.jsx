import { useSelector, useDispatch } from "react-redux";
import { clearData } from "../redux/swapiSlice";

export default function Result() {
  const { data, loading, error } = useSelector((state) => state.swapi);
  const dispatch = useDispatch();
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
      <div style={{ minHeight: "400px", border: "1px solid #ddd" }}>
        {JSON.stringify(data, null, 2)}
      </div>
      <button onClick={() => dispatch(clearData())}>Clear</button>
    </>
  );
}
