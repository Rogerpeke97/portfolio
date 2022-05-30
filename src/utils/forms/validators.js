export function validateName(name){
  return name.length > 5
}

export function validateReason(reason){
  return reason.length > 10
}

export function validateEmail(email) {
  return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
}