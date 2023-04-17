import AddIcon from '@mui/icons-material/Add';
import React from "react";
import "./css/SidebarOptions.css";

function SidebarOptions() {
  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <img
          src="https://thumbs.dreamstime.com/b/history-etched-old-paper-scroll-vintage-clock-36388818.jpg"
          alt="history img"
        />
        <p>History</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKRxBXuVmtyc00jKVHRcWg1BuJTRk4W7ubuJ0tBllQbA&usqp=CAU&ec=48665701"
          alt="" />

        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://www.valueresearchonline.com/content-assets/images/34983_stock-investing-and-psychology__w660__.jpg"
          alt=""
        />
        <p>Psychology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://img.freepik.com/free-vector/casserole-pot_1284-11444.jpg?w=2000"
          alt=""
        />
        <p>Cooking</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61-psIi1cbL._SX466_.jpg"
          alt=""
        />
        <p>Music</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://scijinks.gov/science/science-03.png"
          alt=""
        />
        <p>Science</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://blog.ipleaders.in/wp-content/uploads/2020/01/Health-Insurance.jpg"
          alt=""
        />
        <p>Health</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://static.hbo.com/2022-12/black-adam-ka-1920.jpg"
          alt=""
        />
        <p>Movies</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsHIc4_FKS269tdFdkarXdxlfWau5M9ZbX2qlKjDqbQ&usqp=CAU&ec=48665701"
          alt=""
        />
        <p>Technology</p>
      </div>

      <div className="sidebarOption">
        <img
          src="https://www.mentalup.co/img/blog/the-importance-of-education.jpg"
          alt=""
        />
        <p>Education</p>
      </div>
      <div className="sidebarOption">
        <AddIcon/>
        <p className="text">Discover Spaces</p>
      </div>
    </div>
  );
}

export default SidebarOptions;