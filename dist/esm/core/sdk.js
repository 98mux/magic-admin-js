import '../utils/shim.js';
import { TokenModule } from '../modules/token/index.js';
import { UsersModule } from '../modules/users/index.js';
import { UtilsModule } from '../modules/utils/index.js';
export class MagicAdminSDK {
    constructor(secretApiKey, options) {
        this.secretApiKey = secretApiKey;
        const endpoint = options?.endpoint ?? 'https://api.magic.link';
        this.apiBaseUrl = endpoint.replace(/\/+$/, '');
        // Assign API Modules
        this.token = new TokenModule(this);
        this.users = new UsersModule(this);
        this.utils = new UtilsModule(this);
    }
}
//# sourceMappingURL=sdk.js.map