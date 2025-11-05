import React, { useEffect } from 'react'
import useAuthStore from '../../stores/useAuthStore'
import UserDao from '../../daos/UserDao'

const Profile: React.FC = () => {
    const { user } = useAuthStore()

    useEffect(() => {
        if (user) {
            const newUser = {
                displayName: user?.displayName,
                email: user?.email,
                photoURL: user?.photoURL
            }
            UserDao.createUser(newUser);
        }
    }, [user])

    return (
        <div className="container-page">
            <div >
                <h1>Bienvenido</h1>
                <h2>{user?.displayName}</h2>
            </div>
        </div>
    )
}

export default Profile