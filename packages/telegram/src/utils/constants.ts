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
    DELETE_COMMANDS: '/deleteMyCommands',
    GET_COMMANDS: '/getMyCommands',
    SET_NAME: "/setMyName",
    GET_NAME: "/getMyName",
    SET_DESCRIPTION: "/setMyDescription",
    GET_DESCRIPTION: "/getMyDescription",
    SET_SHORT_DESCRIPTION: "/setMyShortDescription",
    GET_SHORT_DESCRIPTION: "/getMyShortDescription",
    SET_PROFILE_PHOTO:"/setMyProfilePhoto",
    REMOVE_PROFILE_PHOTO:"/removeMyProfilePhoto",
    SET_CHAT_MENU_BUTTON:"/setChatMenuButton",
    GET_CHAT_MENU_BUTTON:"/getChatMenuButton"
} as const

export const PHOTO_TYPES = {
    STATIC: 'static',
    ANIMATED: 'animated'
} as const

export const MENU_BUTTON_COMMAND_TYPES = {
    COMMANDS: 'commands',
    WEB_APP: 'web_app',
    DEFAULT: 'default'
} as const
