import { useState } from 'react';
import Banner from './componentes/Banner/Banner.js';
import Form from './componentes/Form/Form.js';
import Team from './componentes/Team/Team.js';

function App() {

  const teams = [
          {
              name:'Programação',
              primaryColor:'#57C278',
              secondaryColor:'#D9F7E9',
          },
          {
              name:'Front-End',
              primaryColor:'#B2CFFA',
              secondaryColor:'#E8FBFF',
          },
          {
              name:'Data Science',
              primaryColor: '#A6D157',
              secondaryColor:'#F0F8E2' ,
          },
          {
              name:'DevOps',
              primaryColor:'#ED6B69',
              secondaryColor:'#FDE7EB',
          },
          {
              name:'UX e Design',
              primaryColor:'#DB6EBF',
              secondaryColor:'#FAE9F5',
          },
          {
              name:'Mobile',
              primaryColor: '#FFBA05',
              secondaryColor:'#FFF5D9',
          },
          {
              name:'Inovação e Gestão',
              primaryColor:'#FF8A29',
              secondaryColor:'FFEEDF',
          },
  ] 

  const [members, setMembers] = useState([]);

  const newMemberAdd = (member) => {
    setMembers([...members, member])
  }

  return (
    <div className="App">
      <Banner />
      <Form teams= {teams.map(team => team.name)} newMember = {member => newMemberAdd(member)}></Form>
      {teams.map(team => <Team 
        key={team.name} 
        name={team.name} 
        primaryColor={team.primaryColor} 
        secondaryColor={team.secondaryColor}
        members={members.filter(member => member.team === team.name)}
      />)}
      
    </div>
  );
}
export default App;
