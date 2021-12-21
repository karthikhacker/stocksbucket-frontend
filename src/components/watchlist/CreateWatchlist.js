import React, { useState } from 'react'
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { createWatchlist } from '../../actions/watchlistsAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateWatchlist = () => {
    const dispatch = useDispatch();
    const watchlistsData = useSelector(state => state.watchlists);
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const { watchlists, watchlistsLoading } = watchlistsData;

    const notify = () => toast.success("Watchlist added");

    //handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === '') {
            setError("Name is required")
        } else if (watchlists.length >= 5) {
            setError('You can have only 5 watchlists')
        } else {
            console.log(name);
            dispatch(createWatchlist(name));
            setName('');
            setError('')
            notify()
        }
    }
    return (
        <div className="container">
            <div className="create-watchlist">
                <h3>Create watchlist</h3>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} className="form-control" placeholder="Add your watchlist name" />
                        {watchlistsLoading ? <Loading /> :
                            <button className="btn-add-watchlist">
                                Submit
                            </button>
                        }
                    </div>
                    {error && <span className="error-name">{error}</span>}
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CreateWatchlist
