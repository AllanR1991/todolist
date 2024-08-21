import "./style.css";

export function Task() {
  return (
    <div className="container__task">
      <input
        className="container__task--checkbox"
        type="checkbox"
        id="checkTask"
        name="checkTask"        
        defaultChecked={false}
      ></input>
      <p className="container__task--description">dsad</p>
      <div className="container__button">
        <div className="botton__delete" onClick={()=>{alert("dsad")}}>
          <img
            className="botton__alterate--image"
            src={require("../../Images/deleteBlack.png")}
            alt=""
          />
        </div>
        <div className="botton__alterate" onClick={()=>{alert("dsad")}}>
          <img
            className="botton__alterate--image"
            src={require("../../Images/editBlack.png")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
