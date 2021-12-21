import React, { useState } from 'react'

const Modal = ({ name, exchange, setOpen, toggle }) => {
    const [active, setActive] = useState(1);
    const [option, setOption] = useState(false);


    console.log(active);
    return (
        <div className="modal">
            <div className={toggle ? "modal-header buy" : "modal-header sell"}>
                <div className="left-header">
                    <h5> {toggle ? ' Buy - ' : ' Sell - '} {name} ({exchange})</h5>
                    <span className="modal-price"><i className="fas fa-dollar-sign"></i> 2563</span>
                    <span className="modal-indicator"><i className="fas fa-chevron-up"></i></span>
                    <span className="modal-percentage">0.54%</span>
                </div>
                <span className="modal-btn-close" onClick={() => setOpen(false)}><i className="fas fa-times"></i></span>
            </div>
            <div className="modal-body">
                <div className="modal-tabs">
                    <ul className="modal-tab-header">
                        <li className={active === 1 ? "modal-tab active" : "modal-tab"} onClick={() => setActive(1)}>Regular</li>
                        <li className={active === 2 ? "modal-tab active" : "modal-tab"} onClick={() => setActive(2)}>Cover</li>
                        <li className={active === 3 ? "modal-tab active" : "modal-tab"} onClick={() => setActive(3)}>Amo</li>
                    </ul>
                    <div className="modal-tab-content">
                        <div className={active === 1 ? "modal-content active-content" : "modal-content"}>
                            <div className="radio-container">
                                <div className="form-group">
                                    <label className="radio">
                                        <input type="radio" className="radio-input" />
                                        <div className="radio-circle"></div>
                                        Interaday MIS
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="radio">
                                        <input type="radio" className="radio-input" />
                                        <div className="radio-circle"></div>
                                        Longterm CNC
                                    </label>
                                </div>
                            </div>
                            <div className="price-container">
                                <div className="form-group">
                                    <label className="label-price">Qty</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="label-price">Price</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="label-price">Trigger price</label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="market-section">
                                <ul className="menubar">
                                    <li className="more-option">
                                        <span className="btn-more" onClick={() => setOption(!option)}>More {!option ? <i class="fas fa-chevron-down"></i> : <i class="fas fa-chevron-up"></i>}</span>
                                        {option &&
                                            <ul className="dropdown">
                                                <li className="di">
                                                    <div className="form-group">
                                                        <label className="radio">
                                                            <input type="radio" className="radio-input" />
                                                            <div className="radio-circle"></div>
                                                            Day
                                                        </label>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="radio">
                                                            <input type="radio" className="radio-input" />
                                                            <div className="radio-circle"></div>
                                                            Immediate or cancel
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className="dq">
                                                    <div className="form-group">
                                                        <label className="label-qty">disclosed qty</label>
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </li>
                                            </ul>
                                        }
                                    </li>
                                    <li className="ml">
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                Market
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                Limit
                                            </label>
                                        </div>
                                    </li>
                                    <li className="sl">
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                SL
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                SL-M
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>{/* market section */}
                        </div>
                        <div className={active === 2 ? "modal-content active-content" : "modal-content"}>
                            <div className="radio-container">
                                <div className="form-group">
                                    <label className="radio">
                                        <input type="radio" className="radio-input" />
                                        <div className="radio-circle"></div>
                                        Interaday MIS
                                    </label>
                                </div>
                            </div>
                            <div className="price-container">
                                <div className="form-group">
                                    <label className="label-price">Qty</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="label-price">Price</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="label-price">Trigger price</label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="market-section">
                                <ul className="menubar">
                                    <li className="more-option">
                                        <span className="btn-more" onClick={() => setOption(!option)}>More {!option ? <i class="fas fa-chevron-down"></i> : <i class="fas fa-chevron-up"></i>}</span>
                                        {option &&
                                            <ul className="dropdown">
                                                <li className="di">
                                                    <div className="form-group">
                                                        <label className="radio">
                                                            <input type="radio" className="radio-input" />
                                                            <div className="radio-circle"></div>
                                                            Day
                                                        </label>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="radio">
                                                            <input type="radio" className="radio-input" />
                                                            <div className="radio-circle"></div>
                                                            Immediate or cancel
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className="dq">
                                                    <div className="form-group">
                                                        <label className="label-qty">disclosed qty</label>
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </li>
                                            </ul>
                                        }
                                    </li>
                                    <li className="ml">
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                Market
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                Limit
                                            </label>
                                        </div>
                                    </li>
                                    <li className="sl">
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                SL
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                SL-M
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>{/* market section */}
                        </div>
                        <div className={active === 3 ? "modal-content active-content" : "modal-content"}>
                            <div className="radio-container">
                                <div className="form-group">
                                    <label className="radio">
                                        <input type="radio" className="radio-input" />
                                        <div className="radio-circle"></div>
                                        Interaday MIS
                                    </label>
                                </div>
                                <div className="form-group">
                                    <label className="radio">
                                        <input type="radio" className="radio-input" />
                                        <div className="radio-circle"></div>
                                        Longterm CNC
                                    </label>
                                </div>
                            </div>
                            <div className="price-container">
                                <div className="form-group">
                                    <label className="label-price">Qty</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="label-price">Price</label>
                                    <input type="number" className="form-control" />
                                </div>
                                <div className="form-group">
                                    <label className="label-price">Trigger price</label>
                                    <input type="number" className="form-control" />
                                </div>
                            </div>
                            <div className="market-section">
                                <ul className="menubar">
                                    <li className="more-option">
                                        <span className="btn-more" onClick={() => setOption(!option)}>More {!option ? <i class="fas fa-chevron-down"></i> : <i class="fas fa-chevron-up"></i>}</span>
                                        {option &&
                                            <ul className="dropdown">
                                                <li className="di">
                                                    <div className="form-group">
                                                        <label className="radio">
                                                            <input type="radio" className="radio-input" />
                                                            <div className="radio-circle"></div>
                                                            Day
                                                        </label>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="radio">
                                                            <input type="radio" className="radio-input" />
                                                            <div className="radio-circle"></div>
                                                            Immediate or cancel
                                                        </label>
                                                    </div>
                                                </li>
                                                <li className="dq">
                                                    <div className="form-group">
                                                        <label className="label-qty">disclosed qty</label>
                                                        <input type="number" className="form-control" />
                                                    </div>
                                                </li>
                                            </ul>
                                        }
                                    </li>
                                    <li className="ml">
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                Market
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                Limit
                                            </label>
                                        </div>
                                    </li>
                                    <li className="sl">
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                SL
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label className="radio">
                                                <input type="radio" className="radio-input" />
                                                <div className="radio-circle"></div>
                                                SL-M
                                            </label>
                                        </div>
                                    </li>
                                </ul>
                            </div>{/* market section */}
                            {/* market section*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="modal-footer">
                <div className="margin-section">
                    <span className="margin">Margin required</span>
                    <span className="margin-amount"><i class="fas fa-dollar-sign"></i> 3512</span>
                </div>
                <div className="action">
                    <button className="btn-action btn-submit">Submit</button>
                    <button className="btn-action btn-cancel" onClick={() => setOpen(false)}>Cancel</button>
                </div>
            </div>
        </div >
    )
}

export default Modal
