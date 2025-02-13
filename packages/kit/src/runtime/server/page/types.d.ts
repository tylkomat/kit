import { SSRNode, CspDirectives } from 'types';
import { HttpError } from '../../control.js';

export interface Fetched {
	url: string;
	method: string;
	request_body?: string | null;
	response_body: string;
	response: Response;
}

export interface FetchState {
	fetched: Fetched[];
	cookies: string[];
	new_cookies: string[];
}

export type Loaded = {
	node: SSRNode;
	data: Record<string, any> | null;
	server_data: any;
};

type CspMode = 'hash' | 'nonce' | 'auto';

export interface CspConfig {
	mode: CspMode;
	directives: CspDirectives;
	reportOnly: CspDirectives;
}

export interface CspOpts {
	dev: boolean;
	prerender: boolean;
}

export interface SerializedHttpError extends Pick<HttpError, 'message' | 'status'> {
	name: 'HttpError';
	stack: '';
	__is_http_error: true;
}
