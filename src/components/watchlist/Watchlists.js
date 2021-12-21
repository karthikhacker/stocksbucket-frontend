import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '../../icons/search-solid.svg';
import CloseIcon from '../../icons/times-solid.svg';
import PlusIcon from '../../icons/plus-solid.svg';
import { Link } from 'react-router-dom';
import Loading from '../Loading';
import { useDispatch, useSelector } from 'react-redux';
import { getWatchlists, getCurrentWatchlistId, getWatchlist, addTickersToWatchlist, removeAssetFromWatchlist } from '../../actions/watchlistsAction';
import { getTicker, clearTicker, clearTickerError } from '../../actions/tickerAction';

const Watchlists = () => {
    const dispatch = useDispatch();
    const watchlistsData = useSelector(state => state.watchlists);
    const tickerData = useSelector(state => state.ticker);
    const { watchlists, watchlistsLoading, currentId, watchlistLoading, watchlistsError, assets, assetLoading, assetError } = watchlistsData;
    const { ticker, tickerLoading, tickerError } = tickerData;
    const [active, setActive] = useState(0);
    const [activeId, setActiveId] = useState(0);
    const id = active === 0 ? currentId : activeId;
    const [open, setOpen] = useState(false);
    const ref = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (open && ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('click', handler);
        return () => {
            document.removeEventListener('click', handler);
        }
    }, [open])
    useEffect(() => {
        dispatch(getWatchlists())
        dispatch(getCurrentWatchlistId())
    }, [])
    useEffect(() => {
        if (id !== '') {
            dispatch(getWatchlist(id))
        }
    }, [id])

    // handle Search 
    const handleSearch = (e) => {
        const symb = e.target.value.toUpperCase();
        if (symb !== "") {
            dispatch(getTicker(symb))
            setOpen(true);
        } else {
            dispatch(clearTicker())
            dispatch(clearTickerError())
        }
    }
    //handle click 
    const handleClick = (symb) => {
        console.log(symb, id);
        dispatch(addTickersToWatchlist(symb, id));
    }
    // handle delete 
    const handleDelete = (symb) => {
        console.log(symb);
        dispatch(removeAssetFromWatchlist(symb, id))
    }
    //show Asset msg 
    const showAssetMsg = () => {
        return (
            <div className="show-asset-msg">
                <h2>No assets</h2>
                <p>Add assets using searchbar. </p>
            </div>
        )
    }
    // create asset
    const createAsset = (asset) => {
        return (
            <div className='asset' key={asset.id}>
                <div className="asset-name">
                    <Link className="link" to={`/asset/details/${asset.id}`}>{asset.name}</Link>
                </div>
                <div className="price-section">
                    <div className="percentage-section">
                        <p className="percentage">0.23 %</p>
                        <i className="fas fa-chevron-up"></i>
                    </div>
                    <div className="asset-price-section">
                        <p className="price">2564</p>
                        <span onClick={() => handleDelete(asset.symbol)} className="close-btn"><i className="fas fa-times"></i></span>
                    </div>
                </div>
            </div>
        )
    }
    // render Assets 
    const renderAssets = () => {
        return assets.length !== undefined && assets.length > 0 ? assets.map((asset) => createAsset(asset))
            : showAssetMsg()
    }
    const storedAsset = assets !== undefined && assets.length > 0 ? assets.find(a => a.id === ticker.id) : null;
    const storedAssetVal = storedAsset ? true : false;
    //create content
    const createContent = (watch, index) => {
        return (
            <div className={active === index ? "content active-content" : "content"} key={index}>
                <div className="form-group" >
                    <input type="text" ref={ref} onChange={handleSearch} className="form-control" placeholder="Seach for tickers" />
                    <img src={SearchIcon} className="search-icon" alt="search-icon" />
                </div>
                {open &&
                    <ul className="list-group">
                        {ticker.name &&
                            <li className="list-group-item">
                                <span>{ticker.name}</span>
                                {storedAssetVal ?
                                    <i className="fas fa-check"></i> :
                                    <img src={PlusIcon} className="plus-icon" alt="plus-icon" onClick={() => handleClick(ticker.symbol)} />
                                }
                            </li>
                        }
                        {tickerError && <li className="list-group-item center">{tickerError}</li>}
                    </ul>
                }
                <div className="assets">
                    {assetLoading ? <Loading /> : renderAssets()}
                </div>
            </div >
        )
    }
    //renderContent 
    const renderContent = () => {
        return watchlists.length > 0 && watchlists.map((watch, index) => createContent(watch, index))
    }
    //handle active 
    const handleActive = (index, id) => {
        setActive(index);
        setActiveId(id);
    }
    //create tab 
    const createTab = (watch, index) => {
        return (
            <div className={active === index ? "tab active" : "tab"} key={index} onClick={() => handleActive(index, watch.id)}>
                {watch.name}
            </div>
        )
    }
    //render watchlists 
    const renderWatchlists = () => {
        return watchlists.length > 0 ? watchlists.map((watch, index) => createTab(watch, index))
            : <div className="watchlist-user-msg">
                <h2>You dont have any watchlist</h2>
                <p> <Link className="link" to="/create/watchlist">Create a watchlist</Link> </p>
            </div>
    }
    //console.log(assets);
    return (
        <div className="container">
            <div className="tabs">
                <div className="tab-header">
                    {watchlistsLoading ? <Loading /> : renderWatchlists()}
                </div>
                <div className="tab-content">
                    {watchlistLoading ? <Loading /> : renderContent()}
                </div>
            </div>
        </div>
    )
}

export default Watchlists
