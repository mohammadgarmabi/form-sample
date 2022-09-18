interface IFromRequest {
  is_allow_download: boolean;
  is_allow_clear: boolean;
  is_live_chat_icon: boolean;
  is_request_user: boolean;
  is_receive_email: boolean;
  email: string;
  frequency: "WEEKLY" | "DAILY";
}

export type { IFromRequest };
