const LOCAL_STORAGE_KEY="my_secure_key"

export const isAuthenticated = () => localStorage.getItem(LOCAL_STORAGE_KEY) !== null

export const getLoggerUser = () => JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))

export const login = user => localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))

export const logout = () => localStorage.removeItem(LOCAL_STORAGE_KEY)