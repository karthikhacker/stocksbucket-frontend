import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../../actions/accountAction';


const TrustedContacts = ({ prevStep, values }) => {
    const dispatch = useDispatch();
    const accData = useSelector(state => state.acc);

    // handleBack
    const handleBack = (e) => {
        e.preventDefault()
        prevStep();
    }
    const {
        email_address,
        phone_number,
        street_address,
        city,
        state,
        postal_code,
        country,
        given_name,
        family_name,
        date_of_birth,
        tax_id,
        tax_id_type,
        country_of_citizenship,
        country_of_birth,
        country_of_tax_residence,
        visa_type,
        visa_expiration_date,
        date_of_departure_from_usa,
        permanent_resident,
        funding_source,
        annual_income_min,
        annual_income_max,
        liquid_net_worth_min,
        liquid_net_worth_max,
        total_net_worth_min,
        total_net_worth_max,
        is_control_person,
        is_affiliated_exchange_or_finra,
        is_politically_exposed,
        immediate_family_exposed,
        employment_status,
        employer_name,
        employer_address,
        employment_position,
        margin_agreement,
        account_agreement,
        customer_agreement,
        ip_address,
        revision,
        documents
    } = values;
    //handle account 
    const handleAccount = (e) => {
        e.preventDefault();
        const contact = {
            email_address,
            phone_number,
            street_address,
            city,
            state,
            postal_code,
            country
        }
        const identity = {
            given_name,
            family_name,
            date_of_birth,
            tax_id,
            tax_id_type,
            country_of_citizenship,
            country_of_birth,
            country_of_tax_residence,
            visa_type,
            visa_expiration_date,
            date_of_departure_from_usa,
            permanent_resident,
            funding_source,
            annual_income_min,
            annual_income_max,
            liquid_net_worth_min,
            liquid_net_worth_max,
            total_net_worth_min,
            total_net_worth_max
        }
        const disclosures = {
            is_control_person,
            is_affiliated_exchange_or_finra,
            is_politically_exposed,
            immediate_family_exposed,
            employment_status,
            employer_name,
            employer_address,
            employment_position
        }
        const agreements = [
            {
                agreement: margin_agreement,
                signed_at: new Date(),
                ip_address,
                revision
            },
            {
                agreement: account_agreement,
                signed_at: new Date(),
                ip_address,
                revision
            },
            {
                agreement: customer_agreement,
                signed_at: new Date(),
                ip_address,
                revision
            }
        ]
        console.log(contact, identity, agreements, disclosures, documents);
        dispatch(createAccount(contact, identity, disclosures, agreements, documents))

    }
    console.log(accData);
    return (
        <div className='detail-section'>
            <h3>Trusted Contacts</h3>
            <div className='form-group'>
                <label className='label'>Given name</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.given_name}
                    onChange={e => values.setGivenName(e.target.value)}
                    placeholder='Given name'
                />
            </div>
            <div className='form-group'>
                <label className='label'>Family name</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.family_name}
                    onChange={e => values.setFamilyName(e.target.value)}
                    placeholder='Family name'
                />
            </div>
            <button className='btn' onClick={handleBack}>Back</button>
            <button className='btn' onClick={handleAccount}>Submit</button>
        </div>
    )
}

export default TrustedContacts
