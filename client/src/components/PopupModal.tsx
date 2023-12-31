import ReactDOM from 'react-dom';
import { ModalContainer, Overlay } from './PopupModal.styled';
import { useEffect } from 'react';

/*
  TODO: Create a how-to document for modal/popup/tooltip creation, usePopupModal hook.
  * Reference: https://blog.logrocket.com/learn-react-portals-example
  * https://niharraoteblog.netlify.app/guide-to-react-portals
  * https://react.dev/reference/react-dom/createPortal
  * https://www.w3.org/WAI/ARIA/apg/#dialog_modal
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PopupModal = ({ children }: any) => {
  let mount = document.getElementById('portal-root');
  if (!mount) {
    mount = document.createElement('div');
    mount.id = 'portal-root';
    document.body.appendChild(mount);
  }

  const el = document.createElement('div');

  useEffect(() => {
    mount?.appendChild(el);
    return () => {
      mount?.removeChild(el);
    };
  }, [el, mount]);

  if (!mount) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    mount
  );
};

export default PopupModal;
