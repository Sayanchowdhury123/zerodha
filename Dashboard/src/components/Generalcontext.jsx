import { createContext, useContext, useState } from "react";
import Buyactionwindow from "./Buyactionwindow";
import { ExpandOutlined } from "@mui/icons-material";
import Sellactionwindow from "./Sellactionwindow";

const generalcontext = createContext();

export const Generalcontextprovider = ({children}) => {
    const[isbuywindowopen,setisbuywindowopen] = useState(false);
    const[issellwindowopen,setissellwindowopen] = useState(false);
    const[selectedstockuid,setselectedstockuid] = useState("");
    const[drop,setdrop] = useState(false);
  


    const openbuywindow = (uid) => {
        setisbuywindowopen(true)
    
        setselectedstockuid(uid);
        
    }


    const closebuywindow = () => {
        setisbuywindowopen(false)
     
        setselectedstockuid("")
        
    }

  const opensellwindow = (uid) => {
   setissellwindowopen(true);
   setselectedstockuid(uid)
  }


  const closesellwindow = () => {
    setissellwindowopen(false);
    setselectedstockuid("")
  }


  const handledrop = () => {
    setdrop(true)
}
const cancel = () => {
    setdrop(false)
}

    return(


<generalcontext.Provider value={{openbuywindow,closebuywindow,opensellwindow,closesellwindow,drop,handledrop,cancel}}>
                   {children}
                   {isbuywindowopen && <Buyactionwindow uid={selectedstockuid} /> }
                  {issellwindowopen && <Sellactionwindow uid={selectedstockuid} />}
    </generalcontext.Provider>

 


  

    )
}

export const useGeneral = () => useContext(generalcontext);