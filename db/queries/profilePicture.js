"use strict";
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
exports.removeProfilePicture = removeProfilePicture;
exports.getProfilePicture = getProfilePicture;
exports.addProfilePicture = addProfilePicture;
exports.listProfilePictures = listProfilePictures;
const client_1 = require("../client");
const fs_1 = require("fs");
const path_1 = require("path");
function removeProfilePicture(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        client_1.prisma.profilePicture.delete({ where: { filename: filename } })
            .then(() => {
            console.log(`picture: ${filename} removed`);
        });
    });
}
function getProfilePicture(filename) {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.profilePicture.findUnique({ where: { filename: filename } });
    });
}
function addProfilePicture(path) {
    return __awaiter(this, void 0, void 0, function* () {
        const filename = (0, path_1.basename)(path);
        const file = (0, fs_1.readFileSync)(path);
        yield client_1.prisma.profilePicture.create({
            data: {
                filename: filename,
                picture: file
            }
        });
    });
}
function listProfilePictures() {
    return __awaiter(this, void 0, void 0, function* () {
        return client_1.prisma.profilePicture.findMany();
    });
}
