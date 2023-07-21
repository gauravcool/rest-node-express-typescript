const getTimeStamp = (): string => {
    return new Date().toISOString();
}

const warn = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.warn(`[${getTimeStamp()}] [WARN][${namespace}] ${message}`, object);
    } else {
        console.warn(`[${getTimeStamp()}] [WARN][${namespace}] ${message}`);
    }
}

const error = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [ERROR][${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [ERROR][${namespace}] ${message}`);
    }
}

const debug = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [DEBUG][${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [DEBUG][${namespace}] ${message}`);
    }
}

const info = (namespace: string, message: string, object?: any) => {
    if (object) {
        console.log(`[${getTimeStamp()}] [INFO][${namespace}] ${message}`, object);
    } else {
        console.log(`[${getTimeStamp()}] [INFO][${namespace}] ${message}`);
    }
}

export default {
    info,
    debug,
    warn,
    error
};