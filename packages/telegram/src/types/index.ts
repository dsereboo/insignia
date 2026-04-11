import { BOT_SCOPE_TYPES, MENU_BUTTON_COMMAND_TYPES, PHOTO_TYPES } from '../utils/constants.js'

export interface BotCommand {
    command: string
    description: string
}

export type BotScopeTypes = (typeof BOT_SCOPE_TYPES)[keyof typeof BOT_SCOPE_TYPES]

export type BotCommandScope =
    | BotCommandScopeDefault
    | BotCommandScopeAllPrivateChats
    | BotCommandScopeAllGroupChats
    | BotCommandScopeAllChatAdministrators
    | BotCommandScopeChat
    | BotCommandScopeChatAdministrators
    | BotCommandScopeChatMember

export interface BotCommandScopeDefault {
    type: Extract<BotScopeTypes, 'default'>
}

export interface BotCommandScopeAllPrivateChats {
    type: Extract<BotScopeTypes, 'all_private_chats'>
}

export interface BotCommandScopeAllGroupChats {
    type: Extract<BotScopeTypes, 'all_group_chats'>
}

export interface BotCommandScopeAllChatAdministrators {
    type: Extract<BotScopeTypes, 'all_chat_administrators'>
}

export interface BotCommandScopeChat {
    type: Extract<BotScopeTypes, 'chat'>
    chat_id: string | number
}

export interface BotCommandScopeChatAdministrators {
    type: Extract<BotScopeTypes, 'chat_administrators'>
    chat_id: string | number
}

export interface BotCommandScopeChatMember {
    type: Extract<BotScopeTypes, 'chat_member'>
    chat_id: string | number
    user_id: number
}

export interface SetMyCommands {
    commands: Array<BotCommand>
    scope?: BotCommandScope
    //replace with ISO-639-1 code
    language_code?: string
}

export type DeleteMyCommands = Omit<SetMyCommands, 'commands'>
export type GetMyCommands = Omit<SetMyCommands, 'commands'>

export interface SetMyName {
    name?: string
    //replace with ISO-639-1 code
    language_code?: string
}

export interface GetMyName {
    //replace with ISO-639-1 code
    language_code?: string
}

export interface SetMyDescription {
    description?: string
    //replace with ISO-639-1 code
    language_code?: string
}

export interface GetMyDescription {
    //replace with ISO-639-1 code
    language_code?: string
}

export interface SetMyShortDescription {
    short_description?: string
    //replace with ISO-639-1 code
    language_code?: string
}

export interface GetMyDescription {
    //replace with ISO-639-1 code
    language_code?: string
}

export type PhotoTypes = (typeof PHOTO_TYPES)[keyof typeof PHOTO_TYPES]

export interface InputProfilePhotoStatic {
    type: PhotoTypes
    photo: string
}

export interface InputProfilePhotoAnimated {
    type: PhotoTypes
    animation: string
    main_frame_timestamp?: number
}

export type InputProfilePhoto = InputProfilePhotoStatic | InputProfilePhotoAnimated

export interface SetMyProfilePhoto {
    photo: InputProfilePhoto
}

export type MenuButtonCommandType =
    (typeof MENU_BUTTON_COMMAND_TYPES)[keyof typeof MENU_BUTTON_COMMAND_TYPES]

export type MenuButton = MenuButtonCommands | MenuButtonWebApp | MenuButtonDefault

export interface MenuButtonCommands {
    type: Extract<MenuButtonCommandType, 'commands'>
}

export interface WebAppInfo {
    url: `https://${string}`
}

export interface MenuButtonWebApp {
    type: Extract<MenuButtonCommandType, 'web_app'>
    text: string
    web_app: WebAppInfo
}

export interface MenuButtonDefault {
    type: Extract<MenuButtonCommandType, 'default'>
}

export interface SetChatMenuButton {
    chat_id: number
    menu_button: MenuButton
}

export interface GetChatMenuButton {
    chat_id: number
}

export interface GetChatMemberCount {
    chat_id: number | string
    user_id: number
}

export interface GetChatMember {
    chat_id: number | string
}