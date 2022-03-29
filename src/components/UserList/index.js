import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { actions, UserContext } from '../../store';

function UserList() {

    const [state, dispatch] = useContext(UserContext);
    const { users, user } = state;

    const history = useHistory();

    const handleEditClick = (user) => {
        dispatch(actions.setUser(user));
        history.push(`/edit/${user.id}`);
    }

    const handleDeleteClick = (user) => {
        dispatch(actions.deleteUser(user));
    }

    return (
        <div className="data">
            <h2>List Users</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Gender</th>
                        <th>Date of Birth</th>
                        <th>Phone number</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Description</th>
                        <th>Courses</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.gender}</td>
                            <td>{user.dob}</td>
                            <td>{user.phone}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>{user.description}</td>
                            <td>{user.courses.join(', ')}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        handleEditClick(user)
                                    }}
                                    className="btn-control btn-control--edit"
                                >
                                    Edit
                                </button>
                                &nbsp;&nbsp;
                                <button
                                    onClick={() => {
                                        handleDeleteClick(user);
                                    }}
                                    className="btn-control btn-control--delete"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UserList;