import React from "react";

const Card = props => {
  //destructuring or you can put these 3 in the props as const Card = ({id, name, email})
  const { name, email } = props;
  return (
    <div className="tc bg-light-grey dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${props.id}?200x200`} />
      <div>
        <h2 className="roboname">{name}</h2>
        <p className="roboemail">{email}</p>
      </div>
    </div>
  );
};

export default Card;
