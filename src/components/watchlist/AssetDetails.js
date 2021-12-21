import React, { useState, useEffect } from 'react'
import Loading from '../Loading';
import Modal from './Modal';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAsset } from '../../actions/assetAction';

const AssetDetails = () => {
    const dispatch = useDispatch();
    const assetData = useSelector(state => state.asset);
    const { asset, assetDetailLoading, assetDetailError } = assetData;
    const params = useParams();
    const [open, setOpen] = useState(false);
    const [toggle, setToggle] = useState(true);

    //console.log(params.id);
    useEffect(() => {
        dispatch(getAsset(params.id))
    }, [params.id])

    //handleBuy 
    const handleBuy = () => {
        setOpen(true);
        setToggle(true)
    }
    //handleSell
    const handleSell = () => {
        setOpen(true)
        setToggle(false);
    }
    console.log(asset);
    return (
        <div className="container">
            {assetDetailLoading ? <Loading /> : (
                <div className="asset-navbar">
                    <div className="asset-brand">
                        <h4>{asset.name} ({asset.exchange})</h4>
                        <span className="asset-price"><i className="fas fa-dollar-sign"></i> 2563</span>
                        <span className="asset-indicator"><i className="fas fa-chevron-up"></i></span>
                        <span className="asset-percentage">0.54%</span>
                    </div>
                    <div className="asset-action">
                        <button className="btn btn-buy" onClick={handleBuy}>Buy</button>
                        <button className="btn btn-sell" onClick={handleSell}>Sell</button>
                    </div>
                </div>
            )}
            {open && <Modal name={asset.name} exchange={asset.exchange} setOpen={setOpen} toggle={toggle} />}
        </div>
    )
}

export default AssetDetails
