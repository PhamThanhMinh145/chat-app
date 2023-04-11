import React from "react";
import { Channel, MessageActionsBox, MessageDeleted, MessageOptions, MessageSimple, MessageStatus, MessageText, useChatContext} from "stream-chat-react";

import { MessageTimestamp } from 'stream-chat-react'
import { ChannelInner, CreateChannel, EditChannel, TeamMessage } from "./";
const ChannelContainer = ({
  isCreating,
  setIsCreating,
  isEditing,
  setIsEditing,
  createType,
}) => {
  const { channel } = useChatContext();
  if (isCreating) {
    return (
      <div className="channel__container">
        <CreateChannel createType={createType} setIsCreating={setIsCreating} />
      </div>
    );
  }

  //  empty state xảy ra khi tạo chat and khi ko có message

  const EmptyState = () => {
    <div className="channel-empty__container">
      <p className="channel-empty__first">
        This is the beginning of your chat history.
      </p>
      <p className="channel-empty__second">
        Send messages, attachments, links, emojis, and more!
      </p>
    </div>;
  };

  if (isEditing) {
    return (
      <div className="channel__container">
        <EditChannel setIsEditing={setIsEditing} />
      </div>
    );
  }
  return (
    <div className="channel__container">
      <Channel
        EmptyStateIndicator={EmptyState}
        Message={(messageProps, i) => (
          <MessageSimple key={i} {...messageProps} />
        )}
      >
        <ChannelInner setIsEditing={setIsEditing}/>
      </Channel>
    </div>
  );
};

export default ChannelContainer;
