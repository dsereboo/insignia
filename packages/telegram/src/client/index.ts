import type {
    BotCommand,
    BotDescription,
    BotName,
    BotShortDescription,
    DeleteMyCommands,
    GetChatMenuButton,
    GetMyCommands,
    GetMyDescription,
    GetMyName,
    MenuButton,
    SetChatMenuButton,
    SetMyCommands,
    SetMyDescription,
    SetMyName,
    SetMyProfilePhoto,
    SetMyShortDescription
} from '../types'
import { METHOD_NAMES, TELEGRAM_API_BASE_URL } from '../utils/constants'
import { HTTPClient, type IHTTPClient } from '@insignia/shared'

export class TelegramClient {
    private client: IHTTPClient

    constructor(token: string, client?: IHTTPClient) {
        this.client = client ?? new HTTPClient(`${TELEGRAM_API_BASE_URL}/bot${token}`)
    }

    public async setMyCommands(request: SetMyCommands): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.SET_COMMANDS, request)
        return response.data
    }

    public async deleteMyCommands(request: DeleteMyCommands): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.DELETE_COMMANDS, request)
        return response.data
    }

    public async getMyCommands(request: GetMyCommands): Promise<Array<BotCommand>> {
        const response = await this.client.post<Array<BotCommand>>(
            METHOD_NAMES.GET_COMMANDS,
            request
        )
        return response.data
    }

    public async setMyName(request: SetMyName): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.SET_NAME, request)
        return response.data
    }

    public async getMyName(request: GetMyName): Promise<BotName> {
        const response = await this.client.post<BotName>(METHOD_NAMES.GET_NAME, request)
        return response.data
    }

    public async setMyDescription(request: SetMyDescription): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.SET_DESCRIPTION, request)
        return response.data
    }

    public async getMyDescription(request: GetMyDescription): Promise<BotDescription> {
        const response = await this.client.post<BotDescription>(
            METHOD_NAMES.GET_DESCRIPTION,
            request
        )
        return response.data
    }

    public async setMyShortDescription(request: SetMyShortDescription): Promise<boolean> {
        const response = await this.client.post<boolean>(
            METHOD_NAMES.SET_SHORT_DESCRIPTION,
            request
        )
        return response.data
    }

    public async getMyShortDescription(request: GetMyDescription): Promise<BotShortDescription> {
        const response = await this.client.post<BotShortDescription>(
            METHOD_NAMES.GET_SHORT_DESCRIPTION,
            request
        )
        return response.data
    }

    public async setMyProfilePhoto(request: SetMyProfilePhoto): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.SET_PROFILE_PHOTO, request)
        return response.data
    }

    public async removeMyProfilePhoto(): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.REMOVE_PROFILE_PHOTO, {})
        return response.data
    }

    public async setChatMenuButton(request: SetChatMenuButton): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.SET_CHAT_MENU_BUTTON, request)
        return response.data
    }

    public async getChatMenuButton(request: GetChatMenuButton): Promise<Array<MenuButton>> {
        const response = await this.client.post<Array<MenuButton>>(
            METHOD_NAMES.GET_CHAT_MENU_BUTTON,
            request
        )
        return response.data
    }
}
