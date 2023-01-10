import fs from 'fs'
import { Buffer } from 'buffer'

class PATH {
    static gfwlist = 'gfwlist.txt'
    static human_readable = 'human-readable.txt'
}

const human_readable = fs.readFileSync(PATH.human_readable).toString();

fs.writeFileSync(PATH.gfwlist,Buffer.from(human_readable).toString('base64').replace(/(.{64})/g,"$1\n"))