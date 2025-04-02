"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pic = __importStar(require("./queries/profilePicture"));
const user = __importStar(require("./queries/user"));
const calendar = __importStar(require("./queries/calendar"));
const client_1 = require("./client");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // console.log(await prisma.user.findMany({}));
        // await prisma.profilePicture.findMany().then(r => console.log(r)).catch(e => console.error(e))
        // pic.addProfilePicture("db/mockData/default-profile.jpg")
        // pic.removeProfilePicture("default-profile.jpg")
        const picture = yield pic.getProfilePicture("default-profile.jpg");
        if (picture == null) {
            throw new Error("No profile picture found");
        }
        // console.log(picture.filename);
        // const andrej = await user.addUser("andrej", "bugar", "bazinga@pes.sk", "macka", "pes", picture.id)
        // await user.removeUser("bazinga@pes.sk");
        const andrej = yield client_1.prisma.user.findUnique({ where: { email: "bazinga@pes.sk" } });
        const andrejCalendar = yield user.getUserCalendar(andrej.id);
        // console.log(andrejCalendar)
        calendar.createEvent(andrejCalendar.id, "test event", new Date(), new Date()).then(r => { console.log(r); });
        // await prisma.user.findMany().then(r => console.log(r)).catch(e => console.error(e))
    });
}
main().then(() => console.log("done"));
