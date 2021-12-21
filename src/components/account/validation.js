const validate = (values) => {
    let errors = {};
    if (!values.email) {
        errors.email = "Eamil is required";
    } else if (!/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/i.test(values.email)) {
        errors.email = "Not an valid email"
    }
    if (!values.phone_number) {
        errors.phone_number = 'Phone number is required';
    } else if (!/^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/i.test(values.phone_number)) {
        errors.phone_number = 'Not an valid phone number';
    }

    if (!values.street_address) {
        errors.street_address = 'Street address is required';
    }
    if (!values.city) {
        errors.city = 'City is required';
    }

    if (!values.state) {
        errors.state = 'State is required';
    }
    if (!values.postal_code) {
        errors.postal_code = 'Postalcode is required';
    }
    return errors;
}
export default validate;