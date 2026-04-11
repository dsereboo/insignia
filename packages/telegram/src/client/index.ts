import type { DeleteMyCommands, SetMyCommands } from '../types/index.js'
import { METHOD_NAMES, TELEGRAM_API_BASE_URL } from '../utils/constants.js'
import { HTTPClient } from '@insignia/shared'

export class TelegramClient {
    private client: HTTPClient

    constructor(token: string) {
        this.client = new HTTPClient(`${TELEGRAM_API_BASE_URL}/bot${token}`)
    }

    public async setMyCommands(request: SetMyCommands): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.SET_COMMANDS, request)
        return response.data
    }

    public async deleteMyCommands(request: DeleteMyCommands): Promise<boolean> {
        const response = await this.client.post<boolean>(METHOD_NAMES.DELETE_COMMANDS, request)
        return response.data
    }

    public async getMyCommands() {}

    public async setMyName() {}

    public async getMyName() {}

    public async setMyDescriptions() {}

    public async getMyDescriptions() {}

    public async setMyShortDescription() {}

    public async getMyShortDescription() {}

    public async setMyProfilePhoto() {}

    public async removeMyProfilePhoto() {}

    public async setChatMenuButton() {}

    public async getChatMenuButton() {}
}
