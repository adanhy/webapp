import styled from 'styled-components';
import { TextField, Button, DialogTitle, IconButton, DialogActions, SvgIcon } from '@mui/material';

export const XIconWrapper = styled(SvgIcon)`
  svg path {
    fill: #adb2b8;
  }
`;

export const DialogInput = styled(TextField)`
  && {
    border-radius: 4px;
    border: solid 1px #565d68;
    background-color: rgba(0, 0, 0, 0.08);
    font-size: 16px;
    font-family: Lato;
    color: #adb2b8;
    height: 42px;
    width: 100%;
    margin: 0;
  }
`;

export const InputWrapper = styled.div`
  && {
    padding: 0 2rem;
    margin-bottom: 2rem;
    .MuiOutlinedInput-root {
      height: 100%;
    }
  }
`;

export const DialogButton = styled(Button)`
  && {
    width: 79px;
    height: 40px;
    border-radius: 8px;
  }
`;

export const DialogMainTitle = styled(DialogTitle)`
  && {
    font-family: Lato;
    font-size: 1.2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.09;
    letter-spacing: normal;
    text-align: left;
    color: white;
    display: inline;
  }
`;

export const CloseButton = styled(IconButton)`
  && {
    width: 50px;
    height: 50px;
  }
`;

export const ActionsContainer = styled(DialogActions)`
  && {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    padding: 0 2rem;
    margin-bottom: 2rem;
  }
`;
