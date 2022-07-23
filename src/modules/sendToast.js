// importa o mensageiro do toastify:
import { toast } from 'react-toastify';

const sendToast = (type = undefined, message = '', autoClose = undefined) => {
  // Remove todas as mensagens do toastify:
  toast.clearWaitingQueue();
  toast.dismiss();

  // verifica o tipo de toast desejado:
  switch (type) {
    case 'error':
      if (autoClose) {
        toast.error(message, { autoClose });
      } else toast.error(message);
      break;

    case 'success':
      if (autoClose) {
        toast.success(message, { autoClose });
      } else toast.success(message);
      break;

    case 'loading':
      toast.loading(message);
      break;

    case 'info':
      if (autoClose) {
        toast.info(message, { autoClose });
      } else toast.info(message);
      break;

    case 'warning':
      if (autoClose) {
        toast.warning(message, { autoClose });
      } else toast.warning(message);
      break;

    default:
  }
};

export default sendToast;
