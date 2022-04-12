import "./projects.css";
import {Link} from 'react-router-dom'


const Project = ({item}) => {
  console.log({item})
  return (
    
    <div className="p">
    {/* <div className="p-bg"></div> */}
       <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-name">{item.title}/</div>
        <div  className="p-detail">
      {/* <div className="name">{item.title}</div> */}
      <a href={item.source}>Soure Code</a>
   </div> 
      </div> 
      <a href={item.link} target="_blank" rel="noreferrer">
        <img src={item.img} alt="" className="p-img"/>
      </a>
      
      
    </div>
       
   
  
   
  );
};

export default Project;