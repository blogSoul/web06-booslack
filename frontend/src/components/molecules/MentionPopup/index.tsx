import Autocomplete from '@atoms/Autocomplete';
import axios from 'axios';
import React, { Dispatch, useEffect, useState } from 'react';
import MentionPopupTemplate from './MentionPopupTemplate';
import { StyledPopup } from './styles';

interface Props {
  input: string;
  isOpen: boolean;
  value: any;
  setValue: Dispatch<any>;
  close: () => void;
}

const MentionPopup = ({
  input,
  isOpen,
  value,
  setValue,
  close,
}: Props): JSX.Element => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios({
        method: 'GET',
        url: `api/users/workspaces?workspaceId=${1}`, // workspaceId that this channel belongs to
        baseURL: '/',
      });
      setUsers(data.users);
    };
    getUsers();
  }, []);

  // Close when value is selected
  useEffect(() => {
    if (value) {
      close();
    }
  }, [value]);

  return (
    <StyledPopup isOpen={isOpen} onClose={close}>
      <Autocomplete
        input={input}
        filterList={users}
        filter={(user) => user.name.includes(input)}
        setValue={setValue}
        ResultTemplate={MentionPopupTemplate}
      />
    </StyledPopup>
  );
};

export default MentionPopup;