import "./App.css";
import profile from './images/pic1.jpg';
import profile1 from './images/pic2.jpg'
import SingleComment from "./SingleComment";
import UserCard from "./UserCard";
/* used semantic UI library for styling */

function App() {
  return (
    <div className="ui comments">
      <div className="ui three stackable cards">
      <UserCard title="Trainer 1">
        <SingleComment name="Preeti Singh" date="Today at 6:00 PM" text='Reactjs tutorial!' picture={profile}/>
      </UserCard>
      <UserCard title="Trainer 2">
      <SingleComment name="Niharika" date="Today at 7:00 PM" text='Angular tutorial!' picture={profile1}/>
      </UserCard>
      <UserCard title="Trainer 3">
      <SingleComment name="Aparna" date="Today at 8:00 PM" text='UI tutorial!' picture={profile1}/>
      </UserCard>
      <UserCard title="Trainer 4">
      <SingleComment name="Radhika" date="Today at 9:00 PM" text='SCSS tutorial!' picture={profile1}/>
      </UserCard>
      <UserCard title="Trainer 4">
      <SingleComment name="Radhika" date="Today at 9:00 PM" text='SCSS tutorial!' picture={profile1}/>
      </UserCard>
      <UserCard title="Trainer 4">
      <SingleComment name="Radhika" date="Today at 9:00 PM" text='SCSS tutorial!' picture={profile1}/>
      </UserCard>
      

      </div>
    </div>
  );
}

export default App;
