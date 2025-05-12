import Card from "../Card/Card";
import "./Team.css";

const Team = (props) => {
  return (
    (props.members.length > 0) && <section className="team" style={{ backgroundColor: props.secondaryColor }}>
      <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
      <div className="members">
        {props.members.map((member) => (
          <Card
            bgColor = {props.primaryColor}
            key={member.name}
            name={member.name}
            area={member.area}
            image={member.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Team;
