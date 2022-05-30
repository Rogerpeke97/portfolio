
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faExclamationCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import Api from '../api/Api';
import PopUpSnackBar from './popups/PopUpSnackBar';
import FormWarning from './forms/FormWarning';
import { validateEmail, validateName, validateReason } from '../utils/forms/validators'
import IconButton from './buttons/IconButton';

function Form() {

  const api = new Api();

  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    const areAllFieldsValid = validateEmail(form.email) && validateName(form.name) && validateReason(form.reason)
    setForm({
      ...form,
      isValidEmail: validateEmail(form.email),
      isValidName: validateName(form.name),
      isValidReason: validateReason(form.reason),
    })
    return areAllFieldsValid
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    isValid: {
      name: true,
      email: true,
      reason: true,
    },
    isSubmitted: false,
    popUpMessage: ''
  });

  const [showMessage, setShowMessage] = useState(false);

  function validateChange(event, inputName) {
    const value = event.target.value;
    let isInputValid
    if(inputName === 'email') {
      isInputValid = validateEmail(value)
    }
    if(inputName === 'name') {
      isInputValid = validateName(value)
    }
    if(inputName === 'reason') {
      isInputValid = validateReason(value)
    }
    console.log(isInputValid, inputName)
    setForm({ ...form, [inputName]: value, isValid: {...form.isValid, [inputName]: isInputValid}});
  }

  function submitContactForm(event) {
    event.preventDefault()
    const canSubmit = validateForm()
    const { email, name, reason } = form
    if (canSubmit) {
      setIsLoading(true)
      api.post('/contact_form', { email, name, reason })
        .then(res => {
          setShowMessage(true)
          setForm({
            ...form,
            isSubmitted: res.success,
            popUpMessage: res.message
          })
        }).catch(err => {
          setForm({
            ...form,
            isSubmitted: false,
            popUpMessage: err.message
          })
        }).finally(() => { setIsLoading(false) })
    }
  }

  return (
    <>
      <form className="m-1 p-2" onSubmit={submitContactForm}>
        <fieldset disabled={isLoading} style={{ border: 'none' }}>
          <div className="flex items-center my-4">
            <FontAwesomeIcon className="pr-1" icon={faAngleRight} />
            <input className="p-1 m-1" placeholder="Name" type="text" value={form.name}
              onChange={event => validateChange(event, "name")} onBlur={event => validateChange(event, "name")} />
          </div>
          <FormWarning show={!form.isValid.name} IconWarning={faExclamationCircle}
              Message={"Please enter at least 5 characters as a minumum and no symbols or special characters"} />
          <div className="flex items-center my-4">
            <FontAwesomeIcon className="pr-1" icon={faAngleRight} />
            <input className="p-1 m-1" placeholder="E-mail" type="text" value={form.email}
              onChange={event => validateChange(event, "email")} onBlur={event => validateChange(event, "email")} />
          </div>
          <FormWarning show={!form.isValid.email} IconWarning={faExclamationCircle}
              Message={"Please enter a valid email address"} />
          <div className="flex items-center my-4">
            <FontAwesomeIcon className="pr-1" icon={faAngleRight} />
            <textarea className="p-1 m-1" placeholder="Reason" type="text" value={form.reason}
              onChange={event => validateChange(event, "reason")} onBlur={event => validateChange(event, "reason")} />
          </div>
          <FormWarning show={!form.isValid.reason} IconWarning={faExclamationCircle}
              Message={"Please enter at least 10 characters as a minumum and no symbols or special characters"} />
          <IconButton className="ml-3"
            type="submit" ButtonText={"Submit"} IconName={faPaperPlane}
            isLoading={isLoading} disabled={!form.isValid.name && !form.isValid.email && !form.isValid.reason} />
        </fieldset>
      </form>
      {/* <PopUpSnackBar onClick={(newVal) => setShowMessage(newVal)}
        Message={form.popUpMessage} IconName={faExclamationCircle} Display={showMessage} /> */}
    </>
  )
}


export default Form;