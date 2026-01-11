import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchSwapi } from "../redux/swapiSlice";

export default function SearchForm() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(fetchSwapi(data.query));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <span>https://swapi.py4e.com/api</span>
      <input
        type="text"
        placeholder="/people/1/"
        {...register("query", { required: true })}
      />
      <button type="submit">Search</button>
    </form>
  );
}
