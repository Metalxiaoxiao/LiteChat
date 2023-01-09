import { useEffect } from 'react';
import StorageUtil from './storage';
  const FirstCom = (props) => {
    useEffect(() => {
        StorageUtil.getItem("LoginState").then(
          (response) => {
            if(response == "logined"){
              props.navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'IndexPage'
                  },
                ],
              })
            }else{
                props.navigation.reset({
                    index: 0,
                    routes: [
                      {
                        name: 'LoginPage'
                      },
                    ],
                  })
            }
          })
      }, [])
    return;
  };
  
  export default FirstCom;