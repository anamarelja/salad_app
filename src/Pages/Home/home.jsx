import "./home.scss";
import Salad from "../../Components/Salad";
import { saladContext } from "../../App";
import { useContext } from "react";

const Home = () => {
  const { salad, setSalad } = useContext(saladContext);

  return (
    <div className="Home">
      {salad.map((e) => {
        return <Salad salad={e}></Salad>;
      })}
    </div>
  );
};

export default Home;
