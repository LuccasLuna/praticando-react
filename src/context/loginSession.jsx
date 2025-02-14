import { createContext, useContext, useEffect, useState } from "react";
import { http } from "../http";
// import { useNavigate } from "react-router-dom";

const sessionContext = createContext({
  userName: null,
  login: (email, password) => null,
  token: null,
  // permission: null,
  logout: () => null,
  isUserLogged: false
});

export const useSessionContext = () => {
  return useContext(sessionContext)
}

export const SessionProvider = ({ children }) => {

  const [userName, setUserName] = useState(null)
  const [token, setToken] = useState(null)
  // const [permission, setPermission] = useState(null)
  const [isUserLogged, setIsUserLogged] = useState(false)

  // toda vez que o componente é montado verifica se existe um token no sessionStorage, caso tenha seta o token e o isUserLogged para true
  useEffect(() => {
    const token = sessionStorage.getItem('access_token')
    if (token) {
      setToken(token)
      setIsUserLogged(true)
    }
  }, [])

  const logout = () => {
    sessionStorage.removeItem('access_token')
    sessionStorage.removeItem('refresh_token')
    setToken(null)
    setUserName(null)
    // setPermission(null)
  };

  const login = async (email, password, navigate) => {

    return http.post('/auth/login', {
      email,
      senha: password
    })

    .then(response => {
      console.log(response.data)
      sessionStorage.setItem('access_token', response.data.access_token)
      sessionStorage.setItem('refresh_token', response.data.refresh_token)
      setToken(response.data.access_token)
      // setPermission(response.data.permission)
      setUserName(response.data.nome)
      setIsUserLogged(true)
      navigate('/dashboard')
    }

    )
    .catch(error => {
      console.error(error)
    })


  }
  return <sessionContext.Provider value={{ login, logout, isUserLogged}}>
    {children}
  </sessionContext.Provider>
}