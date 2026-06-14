import Fortify from './Fortify'
import Passkeys from './Passkeys'
import Mcp from './Mcp'
import Passport from './Passport'

const Laravel = {
    Fortify: Object.assign(Fortify, Fortify),
    Passkeys: Object.assign(Passkeys, Passkeys),
    Mcp: Object.assign(Mcp, Mcp),
    Passport: Object.assign(Passport, Passport),
}

export default Laravel