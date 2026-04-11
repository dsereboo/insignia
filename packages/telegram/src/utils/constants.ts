export const TELEGRAM_API_BASE_URL = 'https://api.telegram.org'

export const BOT_SCOPE_TYPES = {
    DEFAULT: 'default',
    PRIVATE_CHATS: 'all_private_chats',
    ALL_CHAT_GROUPS: 'all_group_chats',
    ALL_CHAT_ADMINISTRATOR: 'all_chat_administrators',
    CHAT: 'chat',
    CHAT_ADMINISTRATORS: 'chat_administrators',
    CHAT_MEMBER: 'chat_member'
} as const

export const METHOD_NAMES = {
    SET_COMMANDS: '/setMyCommands',
    DELETE_COMMANDS: '/deleteMyCommands'
} as const

export const PHOTO_TYPES = {
    STATIC: "static",
    ANIMATED: "animated"
}

export const MENU_BUTTON_COMMAND_TYPES ={
    COMMANDS: "commands",
    WEB_APP: "web_app",
    DEFAULT: "default"
}as const
