import Label from '@atoms/Label';
import LabeledDefaultButton from '@atoms/LabeledDefaultButton';
import ChatHeader from '@molecules/ChatHeader';
import ChatInputBackground from '@organisms/ChatInputBackground';
import ChatContent from '@organisms/ChatContent';
import React from 'react';
import { Container, MarginedDiv } from './style';

const WorkspaceContent = (): JSX.Element => {
  const ChannelTitle: JSX.Element = <Label text="# channel name" />;
  const ExplainContent: JSX.Element | null = (
    <Label color="grey" text="channel explain " />
  );

  const Title: JSX.Element = (
    <MarginedDiv>
      {ChannelTitle}
      {ExplainContent}
    </MarginedDiv>
  );
  const InputBar: JSX.Element = <ChatInputBackground />;
  const RightButton = <LabeledDefaultButton onClick={() => {}} text="button" />;
  return (
    <Container>
      <ChatHeader title={Title} content={null} rightButton={RightButton} />
      <ChatContent inputBar={InputBar} />
    </Container>
  );
};

export default WorkspaceContent;
