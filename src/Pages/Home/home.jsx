import "./home.scss";
import Salad from "../../Components/Salad";
import { saladContext } from "../../App";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const { salad } = useContext(saladContext);
  const [search, setSearch] = useState("");
  const filteredSalads = salad.filter(e=> e.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <header className="HomeHeader">
        <div className="HeaderLogo">SALAD <i class="fas fa-seedling"></i>
        <input 
        type="text"
        value={search}
        placeholder="Search salads..."
        onChange={(e)=>{setSearch(e.target.value)}}
        />
        </div>
        <div className="Links">
          <Link className="Link">About Us</Link>
          <Link to="/ingredients" className="Link">Our Ingredients</Link>
          <Link className="Link">Contact</Link>
          <Link to="/create_salad" className="Link LinkSalad">Create Your Salad</Link>
        </div>
      </header>
      <div className="Home">
        {filteredSalads.map((e) => {
          return <Salad salad={e}></Salad>;
        })}
      </div>
    </div>
  );
};

export default Home;
