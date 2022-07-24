import { createContext, useState } from "react";

export const User = createContext();

const Auth = ({ children }) => {
  const [user, setUser] = useState(false);
  return <User.Provider value={{ user, setUser }}>{children}</User.Provider>;
};

export default Auth;


//*****************************************  
//? context oluşturmak için önce bir komponent oluştur.
//? daha sonra bir değişkene createContext() ile context oluştur.
//? bu contexti .provider ile olusturdugun component içinde kullan.
//? içine value={{}} ile globale atmak istediğin değişkenkeleri gönder.
//? componente ve .providera children ı ata. 
//? kullanmak istediğin yerde useContext() in içine olusturlan variable at.
//? bu variable ı componenti import ederek kullan.



