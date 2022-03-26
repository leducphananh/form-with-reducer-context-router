import './App.css';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

function App() {
  return (
    <div className="main">
      <UserForm />

      <UserList />
    </div>
  );
}

export default App;
