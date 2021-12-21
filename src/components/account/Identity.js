import React from 'react'

const Identity = ({ nextStep, prevStep, values }) => {
    //console.log(values.tax_id_type);
    // handle continue 
    const handleContinue = (e) => {
        e.preventDefault()
        if (values.given_name === '') {
            values.setGivenNameError('Name is required');
        } else if (values.family_name === '') {
            values.setFamilyNameError('Famil name is required');
        } else if (values.date_of_birth === '') {
            values.setDateOfBirthError('Date of birth is required');
        } else if (values.country_of_tax_residence === '') {
            values.setCountryOfTaxResidenceError('Country of tax residency is required.')
        } else if (values.funding_source === '') {
            values.setFundingSourceError('Funding source is required');
        } else {
            nextStep()
        }
    }
    // handleBack
    const handleBack = (e) => {
        e.preventDefault()
        prevStep();
    }
    const taxType = [
        'USA_SSN',
        'ARG_AR_CUIT',
        'AUS_TFN',
        'AUS_ABN',
        'BOL_NIT',
        'BRA_CPF',
        'CHL_RUT',
        'COL_NIT',
        'CRI_NITE',
        'DEU_TAX_ID',
        'DOM_RNC',
        'ECU_RUC',
        'FRA_SPI',
        'GBR_UTR',
        'GBR_NINO',
        'GTM_NIT',
        'HND_RTN',
        'HUN_TIN',
        'IDN_KTP',
        'IND_PAN',
        'ISR_TAX_ID',
        'ITA_TAX_ID',
        'JPN_TAX_ID',
        'MEX_RFC',
        'NIC_RUC',
        'NLD_TIN',
        'PAN_RUC',
        'PER_RUC',
        'PRY_RUC',
        'SGP_NRIC',
        'SGP_FIN',
        'SGP_ASGD',
        'SGP_ITR',
        'SLV_NIT',
        'SWE_TAX_ID',
        'URY_RUT',
        'VEN_RIF',
        'NOT_SPECIFIED'
    ]
    const visa = [
        'B1',
        'B2',
        'DACA',
        'E1',
        'E2',
        'E3',
        'F1',
        'G4',
        'H1B',
        'J1',
        'L1',
        'Other',
        'O1',
        'TN1'
    ]
    //console.log(values.funding_source)
    return (
        <div className="detail-section">
            <h3>Identity</h3>
            <div className='form-group'>
                <label className='label'>Given name</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Given Name'
                    defaultValue={values.given_name}
                    onChange={(e) => values.setGivenName(e.target.value)}
                />
            </div>
            {values.given_name_error && <span className='account-error-msg'>{values.given_name_error}</span>}
            <div className='form-group'>
                <label className='label'>Famil name</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Family name'
                    defaultValue={values.family_name}
                    onChange={e => values.setFamilyName(e.target.value)}
                />
            </div>
            {values.family_name_error && <span className='account-error-msg'>{values.family_name_error}</span>}
            <div className='form-group'>
                <label className='label'>Date of birth</label>
                <input
                    type="date"
                    className='form-control'
                    placeholder='Family name'
                    defaultValue={values.date_of_birth}
                    onChange={e => values.setDateOfBirth(e.target.value)}
                />
            </div>
            {values.date_of_birth_error && <span className='account-error-msg' >{values.date_of_birth_error}</span>}
            <div className='form-group'>
                <select className='form-control' onChange={e => values.setTaxIdType(e.target.value)}>
                    <option>Select tax type</option>
                    {taxType.map(typ => (
                        <option key={typ} value={typ}>{typ}</option>
                    ))}
                </select>
            </div>
            <div className='form-group'>
                <label className='label'>Tax id</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Tax id'
                    defaultValue={values.tax_id}
                    onChange={e => values.setTaxId(e.target.value)}
                    disabled={values.tax_id_type == '' ? true : false}
                />
            </div>
            <div className='form-group'>
                <label className='label'>Country of citizenship</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Country of citizenship'
                    defaultValue={values.country_of_citizenship}
                    onChange={e => values.setCountryOfCitizenship(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='label'>Country of Birth</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Country of Birth'
                    defaultValue={values.country_of_birth}
                    onChange={e => values.setCountryOfBirth(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='label'>Country of tax residence</label>
                <input
                    type="text"
                    className='form-control'
                    placeholder='Country of tax resident'
                    defaultValue={values.country_of_tax_residence}
                    onChange={e => values.setCountryOfTaxResidence(e.target.value)}
                />
            </div>
            {values.country_of_tax_residency_error && <span className='account-error-msg'>{values.country_of_tax_residency_error}</span>}
            <div className='form-group'>
                <label className='label'>Visa type</label>
                <select className='form-control' onChange={e => values.setVisaType(e.target.type)}>
                    <option>Visa type</option>
                    {visa.map(v => (
                        <option key={v} option={v}>{v}</option>
                    ))}
                </select>
            </div>
            <div className='form-group'>
                <label className='label'>Visa expiration date</label>
                <input
                    type="date"
                    className='form-control'
                    defaultValue={values.visa_expiration_date}
                    onChange={e => values.setVisaExpirationDate(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='label'>Date of deperature from usa</label>
                <input
                    type="date"
                    className='form-control'
                    defaultValue={values.date_of_deperature_from_usa}
                    onChange={e => values.setDateOfDeperatureFromUsa(e.target.value)}
                />
            </div>
            <div className='form-group'>
                <label className='label'>permanent residence</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.permanent_resident}
                    onChange={e => values.setPermanentResident(e.target.value)}
                    placeholder="Permanent Residence"
                />
            </div>
            <div className='form-group'>
                <label className='label'>Funding source</label>
                <select className='form-control' onChange={e => values.setFundingSource([e.target.value])}>
                    <option>Select funding source</option>
                    <option value="employment_income">Employment income</option>
                    <option value="investments">Investments</option>
                    <option value="inheritance">Inheritance</option>
                    <option value="business_income">Business income</option>
                    <option value="savings">Savings</option>
                    <option value="family">Family</option>
                </select>
            </div>
            {values.funding_source_error && <span className='account-error-msg'>{values.funding_source_error}</span>}
            <div className='form-group'>
                <label className='label'>Annual income min</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.annual_income_min}
                    onChange={e => values.setAnnualIncomeMin(e.target.value)}
                    placeholder='Annual income min'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Annual income max</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.annual_income_max}
                    onChange={e => values.setAnnualIncomeMax(e.target.value)}
                    placeholder='Annual income max'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Liquid net worth min</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.liquid_net_worth_min}
                    onChange={e => values.setLiquidNetWorthMin(e.target.value)}
                    placeholder='liquid net worth min'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Liquid net worth max</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.liquid_net_worth_max}
                    onChange={e => values.setLiquidNetWorthMax(e.target.value)}
                    placeholder='liquid net worth max'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Total net worth min</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.total_net_worth_min}
                    onChange={e => values.setTotalNetWorthMin(e.target.value)}
                    placeholder='Total net worth min'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Total net worth max</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.total_net_worth_max}
                    onChange={e => values.setTotalNetWorthMax(e.target.value)}
                    placeholder='Total net worth max'
                />
            </div>
            <button className='btn' onClick={handleBack}>Back</button>
            <button className='btn' onClick={handleContinue}>Next</button>
        </div>
    )
}

export default Identity
