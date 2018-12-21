import { message } from 'antd';
export const dva = {
  config: {
    onError(err) {
      err.preventDefault();
      /*let errorMessage = err.message;
      if (errorMessage instanceof Array){
        errorMessage.forEach(e=>message.error(e))
      } else {
        message.error(err.message)
      }*/
    },
  }
};

