export const getAuthToken = () => localStorage.getItem('authToken');
export const saveAuthToken = newToken => localStorage.setItem('authToken', newToken);
export const deleteAuthToken = () => localStorage.removeItem('authToken');

export const isUserLoggedIn = () => getAuthToken();
