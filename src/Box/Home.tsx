import Button from "../Components/Button";
import images from '../Images/images.png';
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="StarterImage">
        <img src={images} alt="ToDoImage" height={154} width={223}/>
      </div>
      <div>
        <h6>Get Things Done With ToDo</h6>
        <p> Creating lists and finishing task have never been so easy Make your Life easier with TODO </p>
      </div>
      <div>
        <Button onClick={() => console.log("Button clicked")}>
          Get Started 
        </Button>
      </div>
    </div>
  );
};

export default Home;