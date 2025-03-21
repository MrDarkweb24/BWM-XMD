const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KiSBT8l3qVHikUASM6YkERULyBKLoxDyUUgnKnuEiH/75B2x3TDzuzvTxVVFF5sjLznDcQJ0GBF/gOxm8gzYMKEdwtyT3FYAyk0vNwDijgIoLAGNBLvVFDJlC5Unfn9umebk0Z1VkcOkTIeDfeHkKmFcMwpF/BgwJpeQ4D5w+A/XvRBJAsoHo84HOs1LsTq3vq1bL9bX8nOZvZubIXWTkI+Vfw6BBRkAfxRU59HOEchQt836Ag/x59RRsx+9o53SJTk64tfRd658m84C11nZt0QqtKsJQW9kpkjt+jPxBXhYU8Jpsb9nBgWwK946ONcykG9ObIjabqfODMDsbuKmpP+kVwibGruTgmAbl/W3dnWnlB0zaMAbMZu9/fmutyP4XHfDbVatywo1Y7wkiMcvXyPeKsV6Wt0Bf4fsQoidf4p/aK40N6uNW2utpMhbV50qU25pvtV+Kb/DMrt/+jeybbSo+rSeJNV/lswK8za2jSWsi14cWIldLY65IdDdgrzX+PvkiMzW4k+T3VXNunhmWl/X4268sSk7CzfdL3Vhe2DltRu91+0UekzP/Ecru9n3sYKYtbv7BcaPYVoU8fnSqeelXWv9TS2pP2i3S1PnFi/2IfnMo7LZl2ZWThJOmFt+t6gax03oPzc91AnDfWcjQRX99fdMN3zQVj+KBAji9BQXJEgiTu9pihQAHkViZ2ckze5QWDDeHi/ppviZHBa3g861VzllV1suKNY4Zqe7KaQkGB/mT4CiiQ5omDiwK7alCQJL8vcVGgCy7A+O+fFIhxQ57GdeUGkAJekBfEiss0TJD76ernIXKcpIyJeY+dSbfAORjTv7YxIUF8KTodyxjljh9UeOIjUoCxh8ICPyjg4ipwcIcHisg4OL5/3uq4kYvbC8Nq3IvYUfaT+PkL5BALBci8OAzHvwzPDP2CIDd44XlB4FwWMQLDAwoEHz3T3fmthZxS+ZeZNFF1qUaQiL2imZ9sIffJ8N2Gp/Y4xy4Yk7zEFDgj51amu+SG4z/gRm4i2Ktea9NBWFeiz4qH7LDPpV4pf8F9egrGb7/m1CRxOzx+AU2TW+0BBaL3CAbdyxl2CCEc0NyIg2N2+Ffxo+6ERGn6I8akw/0QvbvhYoKCsABjMNF68FoeVXnBuYI+VBRRu4iTS6fqp0mfaX+mCXpyP11UOzWU/cXycEq3oin3dj7P+0Mx841YWe9j3d61++3rv4CAMTjUbD6CTr/WcBnp8bq3D2P+LjHeYFXUxDc0BfVUnqsiM4JRFFzPqcwNlq1lrRq3p2fNcb8TVJnlU7Yhw3bpR8z8MK1fu2rPsHwt5qzbzSKzl/mCGRg6CmVuyZSJvZ21omZYdjzi+Wypo7s+06utY7qCgwzVKUfT9qTlIxGxabWsiXw66+pxPceWPoFY3D778H0OhB/zN3jvkLePaHkBfh9nMeos+i9zvqacflBfMD4G5G+SJLl2sxmZOd2whmZeZxGyRNnf3IbeRsPiIrFOzTU83SHNQws8Hj8pkIaIeEkegTFAsZsngQsoEKKCiL8adRdEuCAoSsEYckOGHfKjEU+B6C6mqUkQ+exvIHafYmbg8Q+W0s5L+wcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

