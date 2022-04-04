import React, { Suspense } from 'react';

const UserList = React.lazy(() => import('../../components/UserList'));

function Home() {
    return (
        <Suspense fallback={<div>List users is loading...</div>}>
            <UserList />
        </Suspense>
    );
}

export default Home;