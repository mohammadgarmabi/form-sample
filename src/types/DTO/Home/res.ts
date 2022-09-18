interface IFromResponse {
  data: {
    collectUserInfoEnabled: boolean;
    conversationClearEnabled: boolean;
    conversationDownloadsEnabled: boolean;
    conversationTranscripts: {
      emailAddress: string;
      emailEnabled: boolean;
      emailFrequency: "WEEKLY" | "DAILY";
    };
    initMessage: boolean;
    showLiveChatIcon: boolean;
  };
}

export type { IFromResponse };
