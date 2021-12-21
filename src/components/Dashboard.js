import React from 'react'
import CreateAccount from './account/CreateAccount'
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <div className="kyc-msg">
                <Link to="/create/account">Create account</Link>
            </div>
        </div>
    )
}

export default Dashboard
