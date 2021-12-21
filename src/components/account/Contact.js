import React from 'react'

const Contact = ({ values, nextStep }) => {
    //console.log(values)
    // hanlde continue
    const handleContinue = (e) => {
        e.preventDefault();
        if (values.email_address === '') {
            values.setEmailError('Email address is required')
        } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(values.email_address)) {
            values.setEmailError("Not an valid email")
        } else if (values.phone_number === '') {
            values.setPhoneNumberError('Phone number is requrired');
        } else if (!/^([0|\+[0-9]{1,5})?([7-9][0-9]{9})$/i.test(values.phone_number)) {
            values.setPhoneNumberError('Not an valid phone number')
        } else if (values.street_address === '') {
            values.setStreetAddressError('Street address is required.')
        } else if (values.city === '') {
            values.setCityError('City is required');
        } else if (values.country === "") {
            values.setCityError("Country is required")
        } else {
            nextStep()
        }

    }
    // console.log(values.street_address)
    return (
        <div className="detail-section">
            <h3>Contact</h3>
            <div className='form-group'>
                <label className='label'>Email address</label>
                <input type="email"
                    className='form-control'
                    placeholder="Email address"
                    defaultValue={values.email_address}
                    onChange={(e) => values.setEmailAddress(e.target.value)}
                />
            </div>
            {values.email_address_error && <span className='account-error-msg'>{values.email_address_error}</span>}
            <div className="form-group">
                <label className='label'>Phone number</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder="Phone number include country code"
                    defaultValue={values.phone_number}
                    onChange={(e) => values.setPhoneNumber(e.target.value)}
                />
            </div>
            {values.phone_number_error && <span className='account-error-msg'>{values.phone_number_error}</span>}
            <div className="form-group">
                <label className='label'>Street Address</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder="Street address"
                    defaultValue={values.street_address}
                    onChange={(e) => values.setStreetAddress([e.target.value])}
                />
            </div>
            {values.street_address_error && <span className='account-error-msg'>{values.street_address_error}</span>}
            <div className="form-group">
                <label className='label'>City</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder="City"
                    defaultValue={values.city}
                    onChange={(e) => values.setCity(e.target.value)}
                />
            </div>
            {values.cityError && <span className='account-error-msg'>{values.cityError}</span>}
            <div className="form-group">
                <label className='label'>State</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder="State"
                    defaultValue={values.state}
                    onChange={(e) => values.setState(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className='label'>Postalcode</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder="Postalcode"
                    defaultValue={values.postal_code}
                    onChange={(e) => values.setPostalcode(e.target.value)}
                />
            </div>
            <div className="form-group">
                <label className='label'>Country</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder="Country"
                    defaultValue={values.country}
                    onChange={(e) => values.setCountry(e.target.value)}
                />
            </div>
            {values.countryError && <span className='account-error-msg'>{values.countryError}</span>}
            <button onClick={handleContinue} className='btn btn-sm'>Next</button>
        </div>
    )
}

export default Contact
