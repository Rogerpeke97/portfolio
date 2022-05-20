
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import Api from '../api/Api';
import Button from './buttons/Button';
import PopUpSnackBar from './popups/PopUpSnackBar';
import FormWarning from './forms/FormWarning';

function Form() {

  const api = new Api();

  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.email)
    const validName = form.name.length > 5 ? /^[a-zA-Z0-9.\s]*$/.test(form.name) : false
    const validReason = form.reason.length > 10 ? /^[a-zA-Z0-9.\s]*$/.test(form.reason) : false
    const allFieldsValid = validEmail && validName && validReason
    setForm({
      ...form,
      isValidEmail: validEmail,
      isValidName: validName,
      isValidReason: validReason
    })
    return allFieldsValid
  }

  function validateEmail(email) {
    setForm({
      ...form,
      isValidEmail: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    })
  }

  function validateName(name) {
    setForm({
      ...form,
      isValidName: name.length > 5 ? /^[a-zA-Z0-9.]/.test(name) : false
    })
  }

  function validateReason(reason) {
    setForm({
      ...form,
      isValidReason: reason.length > 10 ? /^[a-zA-Z0-9.]/.test(reason) : false
    })
  }

  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    isValidName: true,
    isValidEmail: true,
    isValidReason: true,
    isSubmitted: false,
    popUpMessage: ''
  });

  const [showMessage, setShowMessage] = useState(false);

  function handleChange(event, inputName) {
    const value = event.target.value;
    setForm({ ...form, [inputName]: value });
  }

  function handleSubmit(event) {
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
    <div>
      <form className="grid ma-1" onSubmit={handleSubmit}>
        <fieldset disabled={isLoading} style={{ border: 'none' }}>
          <div className="flex align-items-center">
            <div className="flex-child justify-left align-items-center">
              <FontAwesomeIcon className="pr-1" icon={faAngleRight} />
              <input className="pa-1 ma-1" placeholder="Name" type="text" value={form.name}
                onChange={event => handleChange(event, "name")} onBlur={event => validateName(event.target.value)} />
            </div>
          </div>
          {form.isValidName
            ? <div></div>
            : <FormWarning IconWarning={faExclamationCircle}
              Message={"Please enter at least 5 characters as a minumum and no symbols or special characters"} />
          }
          <div className="flex align-items-center">
            <div className="flex-child justify-left align-items-center">
              <FontAwesomeIcon className="pr-1" icon={faAngleRight} />
              <input className="pa-1 ma-1" placeholder="E-mail" type="text" value={form.email}
                onChange={event => handleChange(event, "email")} onBlur={event => validateEmail(event.target.value)} />
            </div>
          </div>
          {form.isValidEmail
            ? <div></div>
            : <FormWarning IconWarning={faExclamationCircle}
              Message={"Please enter a valid email address"} />
          }
          <div className="flex align-items-center">
            <div className="flex-child justify-left align-items-center">
              <FontAwesomeIcon className="pr-1" icon={faAngleRight} />
              <textarea className="pa-1 ma-1" placeholder="Reason" type="text" value={form.reason}
                onChange={event => handleChange(event, "reason")} onBlur={event => validateReason(event.target.value)} />
            </div>
          </div>
          {form.isValidReason
            ? <div></div>
            : <FormWarning IconWarning={faExclamationCircle}
              Message={"Please enter at least 10 characters as a minumum and no symbols or special characters"} />
          }
          <div className="flex align-items-center mt-2 ml-3">
            <div className="flex-child justify-left align-items-center">
              <Button className="pa-1 ma-1 mr-2 icon-custom"
                type="submit" ButtonText={"Submit"} shadow
                isLoading={isLoading} disabled={!form.isValidName && !form.isValidEmail && !form.isValidReason} />
            </div>
          </div>
        </fieldset>
      </form>
      {/* <PopUpSnackBar onClick={(newVal) => setShowMessage(newVal)}
        Message={form.popUpMessage} IconName={faExclamationCircle} Display={showMessage} /> */}
    </div>
  )
}


export default Form;