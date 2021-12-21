import React from 'react'

const Agreements = ({ nextStep, prevStep, values }) => {


    // handle continue 
    const handleContinue = (e) => {
        e.preventDefault();
        if (values.margin_agreement === '') {
            values.setMarginAgreementError('Margin agreement is required');
        } else if (values.account_agreement === '') {
            values.setAccountAgreementError('Account agreement is required')
        } else if (values.customer_agreement === '') {
            values.setCustomerAgreementError('Customer agreement is required')
        } else if (values.revision === '') {
            values.setRevisionError('Revision is required')
        } else {
            nextStep();
        }
    }
    // handleBack
    const handleBack = (e) => {
        e.preventDefault()
        prevStep();
    }
    console.log(values.agreements);
    return (
        <div className='detail-section'>
            <h3>Agreements</h3>
            <div className='form-group'>
                <label className='label'>Agreement</label>
                <select className='form-control' defaultValue={values.margin_agreement} onChange={e => values.setMarginAgreement(e.target.value)}>
                    <option>Select an agreement type</option>
                    <option value="margin_agreement">Margin agreement</option>
                </select>
            </div>
            {values.margin_agreement_error && <span className='account-error-msg'>{values.margin_agreement_error}</span>}
            <div className='form-group'>
                <label className='label'>Agreement</label>
                <select className='form-control' defaultValue={values.account_agreement} onChange={e => values.setAccountAgreement(e.target.value)}>
                    <option>Select an agreement type</option>
                    <option value="account_agreement">Account agreement</option>
                </select>
            </div>
            {values.account_agreement_error && <span className='account-error-msg'>{values.account_agreement_error}</span>}
            <div className='form-group'>
                <label className='label'>Agreement</label>
                <select className='form-control' defaultValue={values.customer_agreement} onChange={e => values.setCustomerAgreement(e.target.value)}>
                    <option>Select an agreement type</option>
                    <option value="customer_agreement">Customer agreement</option>
                </select>
            </div>
            {values.customer_agreement_error && <span className='account-error-msg'>{values.customer_agreement_error}</span>}

            <div className='form-group'>
                <label className='label'>Ip address</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.ip_address}
                    onChange={e => values.setIpAddress(e.target.value)}
                    placeholder='Ip address'
                />
            </div>
            {values.ip_address_error && <span className='account-error-msg'>{values.ip_address_error}</span>}
            <div className='form-group'>
                <label className='label'>Revision</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.revision}
                    onChange={e => values.setRevision(e.target.value)}
                    placeholder='Revision'
                />
            </div>
            {values.revisionError && <span className='account-error-msg'>{values.revisionError}</span>}
            <br />
            <button className='btn' onClick={handleBack}>Back</button>
            <button className='btn' onClick={handleContinue}>Next</button>
        </div>
    )
}

export default Agreements
