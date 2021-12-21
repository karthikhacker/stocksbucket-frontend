import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Documents = ({ nextStep, prevStep, values }) => {
    const [error, setError] = useState(null);
    const [preview, setPreview] = useState(null);
    const [mime_type, setMimeType] = useState('');
    const [content, setContent] = useState('');


    // handle continue 
    const handleContinue = (e) => {
        e.preventDefault();
        if (values.document_type === '') {
            values.setDocumentTypeError('Doc type is required.')
        } else if (mime_type === '') {
            setError('document is required')
        } else if (content === '') {
            setError('Doc is required')
        } else {
            const { document_type, document_sub_type } = values;
            const docData = {
                mime_type,
                content,
                document_type,
                document_sub_type,
                createdAt: Date.now()
            }
            //console.log(docData);
            values.setDocuments([docData])
            nextStep()
        }
    }
    // handleBack
    const handleBack = (e) => {
        e.preventDefault()
        prevStep();
    }
    //handle file 
    const handleFile = (e) => {
        const selected = e.target.files[0];
        // console.log(selected);
        const allowedTypes = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];
        if (selected && allowedTypes.includes(selected.type)) {
            // console.log('selected');
            let reader = new FileReader();
            reader.readAsDataURL(selected);

            reader.onloadend = () => {
                setPreview(selected);
                setMimeType(selected.type);
                setContent(reader.result.substring(27));
                setError(null)
            }
        } else {
            setError('File not supported.')
            setPreview(null)
        }
    }
    console.log(content);
    return (
        <div className='detail-section'>
            <h3>Documents</h3>
            <div className='form-group'>
                <label className='label'>Select document type</label>
                <select className='form-control' onChange={e => values.setDocumentType(e.target.value)}>
                    <option>Select a document type</option>
                    <option value="identity_verification">Identity verification</option>
                    <option value="address_verification	">Address verification</option>
                    <option value="date_of_birth_verification">Date of birth verification</option>
                    <option value="tax_id_verification">Tax ID verification</option>
                    <option value="account_approval_letter">407 approval letter</option>
                    <option value="w8ben">W-8 BEN tax form</option>
                </select>
            </div>
            {values.document_type_error && <span className='account-error-msg'>{values.document_type_error}</span>}
            <div className='form-group'>
                <label className='label'>Document sub type</label>
                <input
                    type="text"
                    className='form-control'
                    defaultValue={values.document_sub_type}
                    onChange={e => values.setDocumentSubType(e.target.value)}
                    placeholder="Document sub type"
                />
            </div>
            <div className='form-group'>
                <button className='file-btn'>
                    <i className="fas fa-cloud-upload-alt"></i>
                    Choose a file to upload
                </button>
                <input
                    type="file"
                    onChange={handleFile}
                />
            </div>
            <p>{preview ? preview.name : null}</p>
            {error ? <span className='file-error'>{error}</span> : null}
            <br />
            <button className='btn' onClick={handleBack}>Back</button>
            <button className='btn' onClick={handleContinue}>Next</button>
        </div>
    )
}

export default Documents
