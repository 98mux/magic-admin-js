import { BaseModule } from '../base-module.js';
import { createExpectedBearerStringError } from '../../core/sdk-exceptions.js';
export class UtilsModule extends BaseModule {
    /**
     * Parse a raw DID Token from the given Authorization header.
     */
    parseAuthorizationHeader(header) {
        if (!header.toLowerCase().startsWith('bearer ')) {
            throw createExpectedBearerStringError();
        }
        return header.substring(7);
    }
}
//# sourceMappingURL=index.js.map