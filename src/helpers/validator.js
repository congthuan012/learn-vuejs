export const validator = {
      validateEmail(email) {
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                  return 'Please enter a valid email address';
            } else {
                  return undefined;
            }
      },
      isRequired(value) {
            return value?undefined:'Field is required';
      }
}