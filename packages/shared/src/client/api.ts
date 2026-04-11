import type { HTTPMethods } from '../types'
import { HTTP_METHODS } from '../utils/constants'

export interface RequestConfig {
    headers?: Record<string, string>
    params?: Record<string, string | number | boolean>
    body?: unknown
}

export interface HttpResponse<T = unknown> {
    data: T
    status: number
    ok: boolean
    headers: Record<string, string>
}

export class HTTPClient {
    private baseURL: string
    private defaultHeaders: Record<string, string>
    private timeout: number

    constructor(baseURL: string, defaultHeaders: Record<string, string> = {}, timeout = 10000) {
        this.baseURL = baseURL
        this.defaultHeaders = defaultHeaders
        this.timeout = timeout
    }

    private buildURL(path: string, params?: Record<string, string | number | boolean>) {
        const url = new URL(path, this.baseURL)

        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, value.toString())
            })
        }

        return url
    }

    private async request<T>(
        method: HTTPMethods,
        path: string,
        config: RequestConfig = {}
    ): Promise<HttpResponse<T>> {
        const { params, headers: configHeaders } = config
        const url = this.buildURL(path, params)

        const controller = new AbortController()
        const timer = setTimeout(() => controller.abort(), this.timeout)

        try {
            const response = await fetch(url.toString(), {
                method,
                headers: { ...this.defaultHeaders, ...configHeaders },
                body: config.body ? JSON.stringify(config.body) : undefined,
                signal: controller.signal
            })
            const data = await response.json()

            return {
                data,
                ok: response.ok,
                status: response.status,
                headers: Object.fromEntries(response.headers.entries())
            }
        } catch (error) {
            if (error instanceof Error && error.name === 'AbortError') {
                throw new Error(`Request timed out after ${this.timeout}ms`)
            }
            throw error
        }
        finally{
            clearTimeout(timer)
        }
    }

    public get<T>(path: string, config?: Omit<RequestConfig, 'body'>) {
        return this.request<T>(HTTP_METHODS.GET, path, config)
    }

    public post<T>(path: string, body: unknown, config?: Omit<RequestConfig, 'body'>) {
        return this.request<T>(HTTP_METHODS.POST, path, { ...config, body })
    }
    public put<T>(path: string, body: unknown, config?: Omit<RequestConfig, 'body'>) {
        return this.request<T>(HTTP_METHODS.PUT, path, { ...config, body })
    }

    public patch<T>(path: string, body: unknown, config?: Omit<RequestConfig, 'body'>) {
        return this.request<T>(HTTP_METHODS.PATCH, path, { ...config, body })
    }

    public delete<T>(path: string, config?: Omit<RequestConfig, 'body'>) {
        return this.request<T>(HTTP_METHODS.DELETE, path, config)
    }
}
