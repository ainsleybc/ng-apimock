export module HttpMethods {
    export const GET = 'GET';
    export const POST = 'POST';
    export const PUT = 'PUT';
    export const DELETE = 'DELETE';
}

export module HttpHeaders {
    export const CONTENT_TYPE_APPLICATION_JSON = { 'Content-Type': 'application/json' };
    export const CONTENT_TYPE_BINARY = { 'Content-Type': 'application/octet-stream' };
}

export module HttpStatusCode {
    export const OK = 200;
    export const CONFLICT = 409;
}
