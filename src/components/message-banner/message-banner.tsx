import React from "react";
import "./message-banner.scss"

export interface MessageBannerProps {
    message: string
}

const MessageBanner = ({message}: MessageBannerProps) => {
    return <div className="message-banner"><span>{message}</span></div>
}

export default MessageBanner;