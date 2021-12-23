// zenorm auto generate
// This file is automatically generated
// Please do not modify
// date: 2021/12/13 下午1:24:36
// user: yefei@unknown
// database: test
import fs from 'node:fs/promises';
import { Model } from 'zenorm';

const modelMap = {};

const MessageOption = { name: 'message', table: 'message', pk: 'id', modelMap };
export function MessageQuery(query) { return new Model(MessageOption, query); }
modelMap['message'] = MessageQuery;

const NonautopkOption = { name: 'nonautopk', table: 'nonautopk', pk: 'id', modelMap };
export function NonautopkQuery(query) { return new Model(NonautopkOption, query); }
modelMap['nonautopk'] = NonautopkQuery;

const ProfileOption = { name: 'profile', table: 'profile', pk: 'id', modelMap };
export function ProfileQuery(query) { return new Model(ProfileOption, query); }
modelMap['profile'] = ProfileQuery;

const UserOption = { name: 'user', table: 'user', pk: 'id', modelMap };
export function UserQuery(query) { return new Model(UserOption, query); }
modelMap['user'] = UserQuery;

export class Queries {
  constructor(query) { this._query = query; }
  get message() { return MessageQuery(this._query); }
  get nonautopk() { return NonautopkQuery(this._query); }
  get profile() { return ProfileQuery(this._query); }
  get user() { return UserQuery(this._query); }
}

export function queries(query) { return new Queries(query); }

/* options update */
async function loadModelOption(option, file) {
  const url = new URL(file, import.meta.url);
  if (await fs.access(url).then(() => true, () => false)) {
    const mod = await import(url);
    Object.assign(option, mod.default);
  }
}

await loadModelOption(MessageOption, './options/message.js');
await loadModelOption(NonautopkOption, './options/nonautopk.js');
await loadModelOption(ProfileOption, './options/profile.js');
await loadModelOption(UserOption, './options/user.js');
