import React from 'react'

const Disclosures = ({ nextStep, prevStep, values }) => {
    // handle continue 
    const handleContinue = (e) => {
        e.preventDefault()
        nextStep()
    }
    // handleBack
    const handleBack = (e) => {
        e.preventDefault()
        prevStep();
    }
    // console.log(values.is_control_person, values.is_politically_exposed, values.immediate_family_exposed, values.is_affiliated_exchange_or_finra,)
    return (
        <div className='detail-section'>
            <h3>Disclosures</h3>
            <div className='checkbox-section'>
                <input
                    type="checkbox"
                    onChange={e => values.setIsControlPerson(!values.is_control_person)}
                />
                <label className='label'>Is control person</label>
            </div>
            <div className='checkbox-section'>
                <input
                    type="checkbox"
                    onChange={e => values.setIsAffiliatedExchangeOrFinra(!values.is_affiliated_exchange_or_finra)}
                />
                <label className='label'>Is affiliated exchange or finra</label>
            </div>
            <div className='checkbox-section'>
                <input
                    type="checkbox"
                    onChange={e => values.setIsPoliticallyExposed(!values.is_politically_exposed)}
                />
                <label className='label'>Is politically exposed</label>
            </div>
            <div className='checkbox-section'>
                <input
                    type="checkbox"
                    onChange={e => values.setImmediateFamilyExposed(!values.immediate_family_exposed)}
                />
                <label className='label'>Immediate family exposed</label>
            </div>
            <div className='form-group'>
                <label className='label'>Employment type</label>
                <select className='form-control' defaultValue={values.employment_status} onChange={e => values.setEmploymentStatus(e.target.value)}>
                    <option>Employment type</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="employed">Employed</option>
                    <option value="student">Student</option>
                    <option value="retired">Retired</option>
                </select>
            </div>
            <div className='form-group'>
                <label className='label'>Employer name</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.employer_name}
                    onChange={e => values.setEmployerName(e.target.value)}
                    placeholder='Employer name'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Employer address</label>
                <textarea
                    type="text"
                    className='form-control'
                    defaultValue={values.employer_address}
                    onChange={e => values.setEmployerAddress(e.target.value)}
                >

                </textarea>
            </div>
            <div className='form-group'>
                <label className='label'>Employment position</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.employment_position}
                    onChange={e => values.setEmploymentPosition(e.target.value)}
                    placeholder='Employment position'
                />
            </div>
            <button className='btn' onClick={handleBack}>Back</button>
            <button className='btn' onClick={handleContinue}>Next</button>
        </div >
    )
}

export default Disclosures
