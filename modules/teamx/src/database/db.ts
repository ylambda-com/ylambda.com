import Dexie, { Table } from 'dexie';

export interface Member {
  id?: number;
  name: string;
  job_title: string;
  profile_photo: string;
  notes: string
}

export class TeamxDb extends Dexie {
  members!: Table<Member>; 

  constructor() {
    super('teamx');
    this.version(1).stores({
      members: '++id, name' // Primary key and indexed props
    });
  }
}

export default new TeamxDb();